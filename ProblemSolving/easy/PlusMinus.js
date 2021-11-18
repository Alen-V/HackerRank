function plusMinus(arr) {
    const negNum = arr.filter(num => num < 0).length / arr.length
    const posNum = arr.filter(num => num > 0).length / arr.length
    const zeros = arr.filter(num => num === 0).length / arr.length
    console.log(`${posNum}\n${negNum}\n${zeros}`)
}