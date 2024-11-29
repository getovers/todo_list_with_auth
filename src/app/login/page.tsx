import {Plus} from 'lucide-react';
import Link from "next/link";
import SubmitButton from "@/app/ui/form/submit-button";
import InputField from "@/app/ui/form/input-field";

export default function Page() {
    return (
        <main className="grid grid-cols-2 grid-rows-1 w-screen h-screen">
            <div className=" bg-mainpink flex justify-center items-center text-4xl text-white">Todo App</div>
            <div className=" bg-gray-200 flex justify-center items-center">
                <form className="bg-white w-6/12 h-4/6 rounded grid grid-rows-[15%_1fr_20%]">
                    <div className="flex justify-between items-center p-5 shadow-[0px_4px_20px_rgba(234,95,142,0.25)]">
                        <div className="text-mainpink text-2xl font-semibold ">ALREADY MEMBERS</div>
                        <div className="flex justify-between items-center gap-2">
                            <Plus className="text-todoDescr size-4 stroke-[3] "/>
                            <Link href="/signup" className="font-semibold">Sign up</Link>
                        </div>
                    </div>
                    <div className="px-10 py-6 text-lg flex gap-5 flex-col">
                        <div>
                            <label htmlFor="login" className="font-medium text-todoDescr">Login</label>
                            <InputField type="text" name="login"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="font-medium text-todoDescr">Password</label>
                            <InputField type="password" name="password"/>
                        </div>
                    </div>
                    <div className="flex justify-center items-end p-8">
                        <SubmitButton text="SIGN IN"/>
                    </div>
                </form>
            </div>
        </main>
    )
}