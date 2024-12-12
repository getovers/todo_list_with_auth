'use client'
import { CirclePlus } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function InputForm() {
  const [description, setDescription] = useState('')
  const router = useRouter()

  const session = useSession()
  const creator_username = session.data?.user?.name

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!description.trim()) {
      alert('Введіть текст завдання')
      return
    }

    try {
      const res = await fetch('http://localhost:3000/api/tasks ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, is_completed: false, creator_username }),
      })
      if (res.ok) {
        setDescription('')
        router.refresh()
      } else {
        throw new Error('Failed to create task')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative bg-[#353a40] w-full h-14 rounded border-2 border-grayBorder flex">
        <button type="submit" className="text-todoDescr flex items-center justify-center p-3 cursor-pointer ">
          <CirclePlus size={30} strokeWidth={2} className="hover:text-mainpink"/>
        </button>
        <input type="text" value={description}
          className="text-justify bg-transparent focus: outline-none  h-full text-inputText text-xl placeholder-inputText w-full selection:text-white selection:bg-todoDescr"
          placeholder="Додати завдання..." onChange={(e)=>setDescription(e.target.value)}/>
      </div>
    </form>

  )
}
