function equalizeArray(arr, maxInstance=0, num=0) {
    for(let i = 0; i < arr.length - 1; i++) {
        let instance = 1
            for (let j = i+1; j < arr.length; j++)
                if (arr[i] === arr[j])
                    instance++
        if (instance > maxInstance) {
            maxInstance = instance
            num = arr[i]
        }
    }
    let maxArr = [...arr]
    for (let i = 0; i < maxArr.length; i++) {
        if (maxArr[i] !== num) {
            maxArr.splice(i, 1)
            i--
        }
    }
    return arr.length - maxArr.length
}