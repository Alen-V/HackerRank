function superReducedString(s) {
    const arr = [...s.split('')]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2)
            i = -1
        }
    }
    return arr.join('') !== '' ? arr.join('') : 'Empty String'
}