function quickSort(arr) {
    const p = arr[0]
    const array = [p]
    for (let i = 1 ; i < arr.length; i++) {
        if (arr[i] > p) 
            array.push(arr[i])
        else if (arr[i] < p) 
            array.unshift(arr[i])
    }
    return array
}