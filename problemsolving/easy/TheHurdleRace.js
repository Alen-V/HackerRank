// Version 1
function hurdleRace(k, height, max=0) {
    for (let i = 0; i < height.length; i++)
        if (height[i] > max) max = height[i]
    return k > max ? 0 : max - k 
}


// Version 2

function hurdleRace(k, height, max=0) {
    height.forEach(h => (h > max) && (max = h))
    return k > max ? 0 : max - k 
}