function birthday(s, d, m, cons = 0) {
    for (let i = 0; i < s.length; i++) {
        let chocoSum = 0
        for (let j = 0; j < m; j++)
            chocoSum += s[i+j]
        if (chocoSum === d) cons++
    }
    return cons
}