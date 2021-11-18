function timeConversion(s) {
    const timeZone = s.slice(-2);
    let hour = s.slice(0, 2)
    if (timeZone === 'PM' && hour !== '12') hour = (+hour + 12).toString()
    if (timeZone === 'AM' && hour === '12') hour = '00'
    return s.slice(0, -2).replace(s.slice(0, 2), hour)
}