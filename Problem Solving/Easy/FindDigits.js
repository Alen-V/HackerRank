function findDigits(n, sum=0) {
    let arr = [...n.toString().split('')]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue
        if (n % +arr[i] === 0) sum++
    }
    return sum
}