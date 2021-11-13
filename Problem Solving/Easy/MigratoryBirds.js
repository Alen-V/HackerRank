function migratoryBirds(arr, instance = {}) {
    for (let i = 0; i < arr.length; i++) {
        if (!instance[arr[i]])
            instance[arr[i]] = [arr[i]]
        else
            instance[arr[i]].push(arr[i])
    }
    return Object.values(instance).sort((a, b) => b.length - a.length).shift()[0] // Or just use [0][0] instead of .shift()[0]
}
