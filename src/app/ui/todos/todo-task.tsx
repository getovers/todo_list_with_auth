import {Trash2} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";

export default function TodoTask() {
    return (
        <div className="flex w-full justify-between h-min gap-4 text-lg">
            <div className="">
                <Checkbox className="size-6 bg-checkbox data-[state=checked]:bg-checkbox border-2 border-grayBorder"/>
            </div>
            <div className="text-todoTitle items-start w-full break-all"></div>
            <div className="cursor-pointer">
                <Trash2 className="size-6 text-todoDescr hover:text-mainpink"/>
            </div>
        </div>
    )
}