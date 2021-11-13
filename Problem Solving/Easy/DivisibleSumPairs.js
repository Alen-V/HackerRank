function divisibleSumPairs(n, k, ar, validPairs=[]) {
    for(let i = 0; i < n; i++) {
        for (let j = i+1; j <= n; j++) {
            if(((ar[i] + ar[j]) % k) === 0)
                validPairs.push([ar[i], ar[j]])
        }
    }
    return validPairs.length
}