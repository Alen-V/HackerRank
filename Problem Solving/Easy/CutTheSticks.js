function cutTheSticks(arr, min=0, cutSticks=[]) {
    while (arr.length) {
        min = Math.min(...arr)
        cutSticks.push(arr.length)
        arr = arr.filter(num => num - min)
    }
    return cutSticks
}