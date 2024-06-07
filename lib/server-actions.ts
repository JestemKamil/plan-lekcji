"use server"
import { getTimetablesList } from "./cez_scraper/timetable"

export async function fetchTimetablesList() {
    return await getTimetablesList()
}
