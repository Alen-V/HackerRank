function jumpingOnClouds(c, jumps=0) {
    for (let i = 0; i < c.length; i++) {
        if (c[i+1] === 0 || c[i + 2] === 0)
            jumps++
        if (c[i + 2] === 0)
            i++
    }
    return jumps
}