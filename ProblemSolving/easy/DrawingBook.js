function pageCount(n, p) {
    const start = p - 1
    let end = n - p
    if (n % 2 !== 0)
        end -= 1
    if (start > end) return Math.ceil(end/2)
    else return Math.ceil(start/2)
}