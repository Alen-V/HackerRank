function birthdayCakeCandles(candles) {
    candles.sort((a, b) => b - a)
    return candles.filter(a => a >= candles[0]).length
}