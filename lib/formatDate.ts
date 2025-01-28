export function formatDate(date: Date) {
  const month = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ]

  const day = date.getDate()
  const monthName = month[date.getMonth()]
  const year = date.getFullYear()

  return `${day} , ${monthName} ,  ${year}`

}