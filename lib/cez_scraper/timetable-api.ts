"use server"
import axios from "axios"
import parse from "node-html-parser"

type TimetableListItem = {
    name: string
    href: string
}

export async function fetchTimetablesList() {
    const response = await axios.get(
        "https://ckpstw.webd.pl/n1/plan/u/lista.html"
    )
    const parsedResponse = parse(response.data).querySelectorAll("ul >li > a")
    let timetables: TimetableListItem[] = []
    parsedResponse.map((item) => {
        timetables.push({
            name: item.text,
            href: item.getAttribute("href")?.slice(0, -5) ?? "",
        })
    })
    return timetables
}
