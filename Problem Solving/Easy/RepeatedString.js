function repeatedString(s, n) {
    if(s === 'a') {
        return n
    }
    function countOccurence(s, count = 0) {
        const stringArr = s.split('')
        for(let i = 0; i < stringArr.length; i++)
            if(stringArr[i] === 'a')
                count++
        return count
    }
    const stringLength = s.length
    const remainder = n % stringLength
    const repeat = Math.floor(n/stringLength)
    const lastString = s.slice(0, remainder)
    return (countOccurence(s) * repeat) + countOccurence(lastString)
}
