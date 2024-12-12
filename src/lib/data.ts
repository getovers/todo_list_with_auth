
export const getTodos = async(creator_username: string = '') => {
  try {
    const res = await fetch(`http://localhost:3000/api/tasks?creator_username=${creator_username}`, {
      cache: 'no-store'
    })

    if (!res.ok) {
      throw new Error(`Could not fetch tasks ${res.status}`)
    }

    const data = await res.json()

    return data.tasks
  } catch (error) {
    console.log('Error loading tasks', error)
  }
}

