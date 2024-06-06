import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Plan lekcji",
    description: "Plan lekcji centrum edukacji zawodowej w stalowej woli",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pl">
            <body className={`dark ${inter.className}`}>{children}</body>
        </html>
    )
}
