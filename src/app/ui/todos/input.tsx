import {CirclePlus} from "lucide-react";

export default function Input() {
    return (
        <div className="relative bg-[#353a40] w-full h-14 rounded border-2 border-grayBorder flex">
            <div className="text-todoDescr flex items-center justify-center p-3 cursor-pointer ">
                <CirclePlus size={30} strokeWidth={2} className="hover:text-mainpink"/>
            </div>
            <input type="text"
                   className="text-justify bg-transparent focus: outline-none  h-full text-inputText text-xl placeholder-inputText w-full selection:text-white selection:bg-todoDescr"
                   placeholder="Додати завдання..."/>
        </div>
    )
}
