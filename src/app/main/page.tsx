import MainPage from '@/app/ui/todos/main-page'
import { getServerSession } from 'next-auth'

import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
export default async function Page() {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }
  return <MainPage  />

}
