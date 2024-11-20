export default function Header() {
    return (
        <header className="bg-gray-200 flex justify-between text-2xl py-5 px-10">
            <div className="h-full w-1/3 flex items-center"><div>ToDo App</div></div>
            <div className="h-full w-1/3 flex items-center justify-center font-semibold">Ласкаво просимо, user <span>&#x1F44B;</span></div>
            <div className="flex h-full w-1/3 items-center justify-end">
                <div className="px-2 py-1 text-xl cursor-pointer hover:bg-[#EA5F8E] hover:text-white transition duration-300">
                    <button>Вийти</button>
                </div>
            </div>
        </header>
    )
}