import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"


// first we r doing search engine optimization
export const metadata = {
    title: 'chatSphere',
    description: 'a Next.js 13 Meta chatSphere Application',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return ( 
        <ClerkProvider>   
        <html lang="en">
            <body className={`${inter.className} bg-[#F5F7FA]`}>{children}</body>
            </html>
            </ClerkProvider>
    )
}