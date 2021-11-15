function angryProfessor(k, a, students=0) {
    for (let i = 0; i < a.length; i++) {
        if (students === k) return 'NO'
        if (a[i] <= 0) students++
    }
    return 'YES'
}