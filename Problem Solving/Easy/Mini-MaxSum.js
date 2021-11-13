function miniMaxSum(arr) {
    const sortedArr = [...arr.sort((a,b) => a - b)]
    let [min, max] = [0, 0]
    sortedArr.forEach((num, index) => {
        min += index < arr.length-1 && num
        max += index >= 1 && num
    })
    console.log(min, max)
}