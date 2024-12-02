'use client'
import {signOut} from "next-auth/react";

export default function Header() {
    const handlerSignOut = () => signOut()
    return (
        <header className="bg-gray-200 flex justify-between text-2xl py-5 px-10">
            <div className="h-full w-1/3 flex items-center"><div>ToDo App</div></div>
            <div className="h-full w-1/3 flex items-center justify-center font-semibold">{`Ласкаво просимо`} <span>&#x1F44B;</span></div>
            <div className="flex h-full w-1/3 items-center justify-end">
                <div className="px-2 py-1 text-xl cursor-pointer hover:bg-[#EA5F8E] hover:rounded hover:text-white transition duration-300">
                    <button onClick={ handlerSignOut}
                     className="rounded w-full h-full ">Вийти</button>
                </div>
            </div>
        </header>
    )
}