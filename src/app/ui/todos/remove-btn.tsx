'use client'
import {Trash2} from "lucide-react";
import {useRouter} from "next/navigation";

export default function RemoveBtn({id}: {id: string}) {
    const router = useRouter();

    const removeTask = async () => {
        const confirmed = confirm(`Ви впевнені, що хочете видалити?`);
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/tasks?id=${id}`, {
                method: 'DELETE'
            })

            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <button onClick={removeTask} className="cursor-pointer text-todoDescr hover:text-mainpink">
            <Trash2 className="size-6"/>
        </button>
    )
}