function diagonalDifference(arr) {
    let [firstSum, secondSum] = [0, 0]
    for (let i = 0; i < arr.length; i++) {
        firstSum += arr[i][i]
        secondSum += arr[i][(arr.length - 1) - i]
    }
    return Math.abs(firstSum - secondSum);
}