import TodoTask from '@/app/ui/todos/todo-task'
import { getTodos } from '@/lib/data'
import { Todo } from '@/lib/definitions'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function TodosContainer() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const session = await getServerSession(authOptions)
  const username: string = session?.user?.name || ''
  const tasks = await getTodos(username)

  return (
    <div className="flex flex-col gap-4 overflow-auto h-full">
      {tasks.map((todo:Todo) => (
        <TodoTask key={todo._id} description={todo.description} completed={todo.is_completed} id={todo._id}/>
      ))}
    </div>
  )
}
