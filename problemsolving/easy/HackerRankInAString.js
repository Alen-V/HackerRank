function hackerrankInString(s, string = '') {
    const hr = 'hackerrank'
    const arr = [...s.split('')]
    for (let i = 0; i < hr.length; i++) {
        if (i > string.length) break
        for (let j = 0; j < arr.length; j++) {
            if (hr[i] === arr[j]) {
                string += arr[j]
                arr.splice(0, j+1)
                break
            }
        }
    }
    return string === hr ? 'YES' : 'NO'
}