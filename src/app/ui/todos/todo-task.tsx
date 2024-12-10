'use client'
import {Checkbox} from "@/components/ui/checkbox";
import RemoveBtn from "@/app/ui/todos/remove-btn";
import {useState} from "react";


export default function TodoTask({description, completed, id}: {
    description: string,
    completed: boolean,
    id: string
}) {
    const [isChecked, setIsChecked] = useState(completed);
    const toggleCheckbox = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/tasks`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    is_completed: !isChecked,
                })
            })
            if (res.ok) {
                setIsChecked(!isChecked)
            } else {
                throw new Error("Failed to update task status");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex w-full justify-between h-min gap-4 text-lg">
            <div className="flex justify-center items-center">
                <Checkbox onClick={toggleCheckbox}
                    className="size-6 bg-checkbox data-[state=checked]:bg-checkbox border-2 border-grayBorder data-[state=checked]:text-white"
                    checked={isChecked}/>
            </div>
            <div className="text-todoTitle items-start w-full break-all">{description}</div>
            <RemoveBtn id={id}/>
        </div>
    )
}