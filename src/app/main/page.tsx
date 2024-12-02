import MainPage from "@/app/ui/todos/main-page";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
export default async function Page() {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login");
    }
    return <MainPage />;

}
