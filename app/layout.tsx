import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Separator } from "@/components/ui/separator"
import Providers from "@/components/providers"
import { KBarButton } from "@/components/ui/k-bar-button"

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
            <body className={`dark ${inter.className}`}>
                <Providers>
                    <div className="flex justify-center p-2">
                        <KBarButton />
                    </div>
                    <Separator />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
