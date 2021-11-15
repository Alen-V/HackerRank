function utopianTree(n, treeHeight=1) {
    // Write your code here
    if (n === 0) return treeHeight
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) treeHeight++
        else treeHeight = treeHeight * 2
    }
    return treeHeight
}