import Input from "@/app/ui/todos/input";
import TodosContainer from "@/app/ui/todos/todos-container";
import Header from "@/app/ui/header";

export default function Home() {
  return (
      <main className="grid grid-rows-[100px_1fr] grid-cols-1 v-screen h-screen bg-mainpink">
          <Header/>
          <div className="h-full w-full flex justify-center items-center">
              <div className="bg-[#3e424a] w-4/12 h-[44rem] rounded p-10 grid grid-cols-1 grid-rows-[3.5rem_1fr] gap-4">
                  <Input/>
                  <TodosContainer/>
              </div>
          </div>
      </main>

  );
}
