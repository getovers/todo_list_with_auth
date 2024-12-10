'use client';

import {UserRound} from "lucide-react";
import Link from "next/link";
import SubmitButton from "@/app/ui/form/submit-button";
import {useState} from "react";
import {useRouter} from "next/navigation";
// import {useSession} from "next-auth/react";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    // const session = useSession();
    // console.log(session);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!username.trim() || !password.trim()) {
            setError("All fields are required");
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    contentType: "application/json",
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if (res.ok) {
                setUsername("");
                setPassword("");
                setError("");
                router.push("/main");

            } else {
                const data = await res.json();
                setError(data.message);
                console.log("User registration failed");
            }
        } catch (error) {
            console.log(`Error during registration ${error}`);
        }
    }

    return (
        <main className="grid grid-cols-2 grid-rows-1 w-screen h-screen">
            <div className="bg-gray-200 flex justify-center items-center text-4xl">Todo App</div>
            <div className="bg-mainpink flex justify-center items-center">
                <form onSubmit={handleSubmit} className="bg-white w-6/12 h-4/6 rounded grid grid-rows-[15%_1fr_20%]">
                    <div className="flex justify-between items-center p-5 shadow-[0px_4px_20px_rgba(234,95,142,0.25)]">
                        <div className="text-mainpink text-2xl font-semibold ">CREATE AN ACCOUNT</div>
                        <div className="flex justify-between items-center gap-2">
                            <UserRound className="text-todoDescr size-4 stroke-[3] "/>
                            <Link href="/login" className="font-semibold">Sign in</Link>
                        </div>
                    </div>
                    <div className="px-10 py-6 text-lg flex gap-5 flex-col">
                        <div>
                            <label htmlFor="login" className="font-medium text-todoDescr">Username</label>
                            <input id="login" type="text" autoComplete="off" onChange={(e) => setUsername(e.target.value)} value={username}
                                   className="w-full border-b border-b-gray-300 bg-transparent focus: outline-none"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="font-medium text-todoDescr">Password</label>
                            <input id="password" type="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password}
                                   className="w-full border-b border-b-gray-300 bg-transparent focus: outline-none"/>
                        </div>

                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">{error}
                            </div>
                        )}

                    </div>
                    <div className="flex justify-center items-end p-8">
                        <SubmitButton text="SIGN UP"/>
                    </div>
                </form>
            </div>
        </main>
    )
}