import { getTimetablesList } from "@/lib/cez_scraper/timetable"
import Link from "next/link"

export default async function Home() {
    const timetables = await getTimetablesList()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {timetables.map((timetable, index) => (
                <Link href={timetable.href} key={index}>
                    {timetable.name}
                </Link>
            ))}
        </main>
    )
}
