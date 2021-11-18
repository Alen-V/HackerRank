function viralAdvertising(n, sum=0) {
    let people = 5
    for (let i = 0; i < n; i++) {
        const daySum = Math.floor(people / 2)
        sum += daySum
        people = daySum * 3
    }
    return sum
}