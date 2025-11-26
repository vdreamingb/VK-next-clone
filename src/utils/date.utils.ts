export function parseDate(date:string){
    const newDate = new Date(date)
    const day = newDate.getDate()
    const month = newDate.getMonth().toLocaleString()
    const year = newDate.getFullYear()

    return `${day}.${month.length === 1? `0${month}`: month}.${year}`
}