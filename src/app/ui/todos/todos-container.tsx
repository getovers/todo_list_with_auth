import TodoTask from "@/app/ui/todos/todo-task"
import {getTodos} from "@/lib/data";
import { Todo } from "../../../lib/definitions"

export default async function TodosContainer() {
    const tasks = await getTodos();
    // console.log(tasks)
    return (
        <div className="flex flex-col gap-4 overflow-auto h-full">
            {tasks.map((todo:Todo) => (
                <TodoTask key={todo._id} description={todo.description} completed={todo.is_completed} id={todo._id}/>
            ))}
        </div>
    )
}
