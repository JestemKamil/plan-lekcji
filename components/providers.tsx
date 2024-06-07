"use client"
import { ReactNode } from "react"
import { KBarSearchProvider } from "./k-bar"

export default function Providers({ children }: { children: ReactNode }) {
    return <KBarSearchProvider>{children}</KBarSearchProvider>
}
