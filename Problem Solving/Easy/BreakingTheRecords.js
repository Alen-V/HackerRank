function breakingRecords(scores) {
    let [maxScore, minScore] = [scores[0], scores[0]]
    let score = { best: 0, worst: 0 }
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i]
            score.best++
        } else if (scores[i] < minScore) {
            minScore = scores[i]
            score.worst++
        }
    }
    return [score.best, score.worst]
}