function aVeryBigSum(ar) {
    let output = 0
    ar.map(num => output += num)
    return output
}