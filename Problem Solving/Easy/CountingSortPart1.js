function countingSort(arr, freqArr=[]) {
    for (let i = 0; i < 100; i++) {
        freqArr.push(0)
        for(let n = 0; n < arr.length; n++)
            if (arr[n] === i)
                freqArr[i] += 1
    }
    return freqArr
}