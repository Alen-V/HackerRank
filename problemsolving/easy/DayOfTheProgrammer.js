function dayOfProgrammer(year, leapDay = 0) {
    if (year < 1918) 
        leapDay = year % 4 === 0 ? 244 : 243
    else if (year === 1918) 
        leapDay = 230
    else 
        leapDay = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 244 : 243
    return `${256 - leapDay}.09.${year}`
}