import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { getTimetablesList } from "@/lib/cez_scraper/timetable"
import Link from "next/link"

export default async function Home() {
    const timetables = await getTimetablesList()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24 ">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <Card className="mb-5 m-2">
                    <CardHeader>
                        <CardTitle className="text-center">Klasy</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                        {timetables.map(
                            (timetable, index) =>
                                timetable.href.startsWith("plany/o") && (
                                    <Button variant="link">
                                        <Link href={timetable.href} key={index}>
                                            {timetable.name}
                                        </Link>
                                    </Button>
                                )
                        )}
                    </CardContent>
                </Card>

                <Card className="mb-5 col-span-2 m-2">
                    <CardHeader>
                        <CardTitle className="text-center">Sale</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-2">
                        {timetables.map(
                            (timetable, index) =>
                                timetable.href.startsWith("plany/s") && (
                                    <Button
                                        className="text-pretty"
                                        variant="link"
                                    >
                                        <Link href={timetable.href} key={index}>
                                            {timetable.name}
                                        </Link>
                                    </Button>
                                )
                        )}
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
