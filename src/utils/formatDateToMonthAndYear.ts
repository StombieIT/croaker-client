const months: Array<string> = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
]

export const formatDateToMonthAndYear = (date: Date): string => {
    return [months[date.getUTCMonth()], date.getUTCFullYear()].join(" ")
}