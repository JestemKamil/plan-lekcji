import { getTimetable } from "@/lib/cez_scraper/timetable"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default async function Page({ params }: { params: { slug: string } }) {
    const { timetable, className } = await getTimetable(params.slug)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Table>
                <TableCaption>{className}</TableCaption>
                <TableHeader>
                    <TableRow>
                        {timetable[0].rowItems.map((item, index) => (
                            <TableHead key={index}>{item}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {timetable.slice(1).map((row, index) => (
                        <TableRow key={index}>
                            {row.rowItems.map((item, rowIndex) => (
                                <TableCell key={rowIndex}>{item}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    )
}
