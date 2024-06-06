import { getTimetable } from "@/lib/cez_scraper/timetable"
import Link from "next/link"

export default async function Page({ params }: { params: { slug: string } }) {
    const timetable = await getTimetable(params.slug)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <table>
                <tbody>
                    {timetable.map((row, index) => (
                        <tr key={index}>
                            {row.rowItems.map((item, rowIndex) =>
                                index == 0 ? (
                                    <th key={rowIndex}>{item}</th>
                                ) : (
                                    <td key={rowIndex}>{item}</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
