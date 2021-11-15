function insertionSort1(n, arr, val = 0) {
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i+1]) {
            val = arr[i+1]
            while (val < arr[i]) {
                arr[i+1] = arr[i]
                console.log(arr.join(' '))
                i--
            }
            arr[i+1] = val
            console.log(arr.join(' '))    
        }
    }
}