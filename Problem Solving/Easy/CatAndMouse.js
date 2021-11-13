function catAndMouse(x, y, z) {
    const [catA, catB] = [Math.abs(z - x), Math.abs(z - y)]
    if (catA === catB) 
        return `Mouse C`
    if (catA > catB) 
        return `Cat B`
    return `Cat A`
}