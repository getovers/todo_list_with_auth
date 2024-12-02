import MainPage from "@/app/ui/todos/main-page";
import {useSession} from "next-auth/react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Page() {
    const data = await getServerSession();
    console.log({data})
    return <MainPage />;

}
