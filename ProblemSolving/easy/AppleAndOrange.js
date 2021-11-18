function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const countFruits = (fruits, tree) => {
        let fallenFruits = 0
        for (let i = 0; i < fruits.length; i++) {
            const fallenFruit = tree + fruits[i]
            if (fallenFruit >= s && fallenFruit <= t)
                fallenFruits++
        }
        return fallenFruits
    }
    console.log(`${countFruits(apples, a)}\n${countFruits(oranges, b)}`)
}