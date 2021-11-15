    // Version 1
function getMoneySpent(keyboards, drives, b, max = -1) {
    for ( let i = 0; i < keyboards.length; i++)
        for (let j = 0; j < drives.length; j++)
            if (keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= b)
                max = keyboards[i] + drives[j]
    return max
}

    // Version 2
function getMoneySpent(keyboards, drives, b, max = -1) {
    keyboards.forEach(key => {
        drives.forEach(drive => (key + drive > max && key + drive <= b) && (max = key + drive))
    })
    return max
}