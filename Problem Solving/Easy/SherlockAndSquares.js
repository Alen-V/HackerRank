function squares(a, b, sum = 0) {
    let i = 1
    let n = i * i
    while (n <= b) {
        if (n >= a && n <= b) sum++
        i++
        n = i * i
    }
    return sum
}