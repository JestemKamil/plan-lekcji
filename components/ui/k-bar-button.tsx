"use client"
import { ReactNode } from "react"
import { useKBar } from "kbar"

export function KBarButton({ ...rest }) {
    const { query } = useKBar()
    return (
        <div className="w-auto flex-none">
            <button
                className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 w-40 lg:w-64"
                onClick={() => query.toggle()}
            >
                <span className="hidden lg:inline-flex">
                    Szukaj planu lekcji...
                </span>
                <span className="inline-flex lg:hidden">Szukaj...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">CTRL K</span>
                </kbd>
            </button>
        </div>
    )
}
