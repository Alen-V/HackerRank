function countingValleys(steps, path, valleys=0) {
    let [seaLvl, curPos] = [0, 'still']
    path.split('').forEach(move => {
        if (move === 'D')
            seaLvl--
        if (move === 'U')
            seaLvl++
        if (seaLvl < 0)
            curPos = 'started'
        if (seaLvl === 0 && curPos === 'started') {
            valleys++
            curPos = 'still'            
        }
    })
    return valleys
}