function sockMerchant(n, ar, matchingPairs=0) {
    ar.forEach((sock, i) => {
        for(let k = i+1; k <= ar.length; k++) {
            if (sock === ar[k]) {
                matchingPairs++
                ar.splice(k, 1)
                k--
                break;
            }
        }
    })
    return matchingPairs
}