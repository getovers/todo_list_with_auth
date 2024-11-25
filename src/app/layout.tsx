import "./globals.css";
import Header from "@/app/ui/header";

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <div className="grid grid-rows-[100px_1fr] grid-cols-1 v-screen h-screen bg-mainpink">
            <Header/>
            <div>
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
