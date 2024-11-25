import Input from "@/app/ui/todos/input";
import TodosContainer from "@/app/ui/todos/todos-container";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center items-center">
        <div className="bg-[#3e424a] w-4/12 h-[44rem] rounded p-10 grid grid-cols-1 grid-rows-[3.5rem_1fr] gap-4">
            <Input/>
            <TodosContainer/>
        </div>
    </main>
  );
}
