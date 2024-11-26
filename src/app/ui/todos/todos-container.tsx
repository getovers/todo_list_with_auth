import TodoTask from "@/app/ui/todos/todo-task";

export default function TodosContainer() {
    return (
        <div className="flex flex-col gap-4 overflow-auto h-full">
            <TodoTask/>
        </div>
    )
}