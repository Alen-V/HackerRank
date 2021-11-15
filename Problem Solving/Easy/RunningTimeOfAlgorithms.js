function runningTime(arr, time = 0) {
    for(let j = 1; j < arr.length; j++) {
        const unsorted = arr[j];
        for(let i = j-1; i > -1; i--) {
            if(unsorted < arr[i]) {
                time++
                arr[i+1] = arr[i];
                arr[i] = unsorted;
            } else {
                arr[i+1] = unsorted;
                break;
            }
        }
    }
    return time
}