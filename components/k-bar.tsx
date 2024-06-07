import { FC, ReactNode, useEffect, useState } from "react"
import { KBarProvider } from "kbar"
import { KBarModal } from "./ui/k-bar-modal"
import { fetchTimetablesList } from "@/lib/server-actions"
import { useRouter } from "next/navigation"

type Action = {
    id: string
    name: string
    keywords: string
    perform: () => void
}

export function KBarSearchProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const [actions, setActions] = useState<Action[]>([])
    const router = useRouter()
    useEffect(() => {
        const fetchTimetables = async () => {
            const timetables = await fetchTimetablesList()
            const newActions = timetables.map((timetable) => ({
                id: timetable.name,
                name: timetable.name,
                keywords: timetable.name,
                perform: () => router.push(`/${timetable.href}`),
            }))
            setActions(newActions)
            setIsLoading(false)
            timetables.map((timetable) => {
                router.prefetch(`/${timetable.href}`)
            })
        }

        fetchTimetables()
    }, [])

    return (
        <KBarProvider actions={actions}>
            <KBarModal actions={actions} isLoading={isLoading} />
            {children}
        </KBarProvider>
    )
}
