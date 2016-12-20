function fullDate(val) {
    let date = new Date(val)
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}
    ${date.getHours()}:${date.getMinutes()}`
}

export { fullDate }
