import axios from "axios"
import parse from "node-html-parser"

type TimetableListItem = {
    name: string
    href: string
}

type TimetableRow = {
    rowItems: string[]
}

export async function getTimetablesList() {
    const response = await axios.get(
        "https://ckpstw.webd.pl/n1/plan/u/lista.html"
    )
    const parsedResponse =
        parse(response.data).querySelector("ul")?.querySelectorAll("li > a") ??
        []
    let timetables: TimetableListItem[] = []
    parsedResponse.map((item) => {
        timetables.push({
            name: item.text,
            href: item.getAttribute("href")?.slice(0, -5) ?? "",
        })
    })
    return timetables
}

export async function getTimetable(url: string) {
    const response = await axios.get(
        `https://ckpstw.webd.pl/n1/plan/u/plany/${url}.html`
    )
    let parsedResponse = parse(response.data)
        .querySelector("div > table > tr > td > table")
        ?.querySelectorAll("tr")
    if (!parsedResponse) {
        return []
    }

    let timetable: TimetableRow[] = []
    parsedResponse.map((row) => {
        let parsedRow = row?.querySelectorAll("th, td")

        let rowData: string[] = []
        parsedRow?.map((item) => {
            rowData.push(item.text)
        })
        timetable.push({ rowItems: rowData })
    })
    return timetable
}
