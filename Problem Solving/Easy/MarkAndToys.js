function maximumToys(prices, k, items = 0, sum = 0) {
    const minPrices = [...prices.sort((a,b) => a - b)]
    for (let i = 0; i < minPrices.length; i++) {
        if(minPrices[i] > k) break
        if (sum + minPrices[i] <= k) {
            sum += minPrices[i]
            items++
        }
    }
    return items
}