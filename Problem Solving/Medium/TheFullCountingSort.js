function countSort(arr) {
    let freqArr = []
    for (let i = 0; i <= 100; i++) {
        freqArr.push([])
        for(let n = 0; n < arr.length; n++) {
            if (n < arr.length / 2) arr[n][1] = '-'
            if (+arr[n][0] === i) freqArr[i].push(arr[n][1])
        }
    }
    console.log(freqArr.flat().join(' '))
}