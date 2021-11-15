function countingSort(arr, freqArr=[], sortedArr = []) {
    for (let i = 0; i < 100; i++) {
        freqArr.push(0)
        for(let n = 0; n < arr.length; n++)
            if (arr[n] === i)
                freqArr[i] += 1
    }
    for (let i = 0; i < freqArr.length; i++) {
        if(freqArr[i] === 0) continue
        for (let n = 0; n < freqArr[i]; n++)
            sortedArr.push(i)
    }
    return sortedArr
}