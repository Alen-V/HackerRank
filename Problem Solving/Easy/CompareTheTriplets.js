function compareTriplets(a, b) {
    let [scoreA, scoreB] = [0, 0]
    a.forEach((num, index) => {
        if(num > b[index]) {
            scoreA++
        } else if ( num < b[index] ) {
            scoreB++
        }
    })
    return [scoreA, scoreB]
}