function extraLongFactorials(n) {
    let memo = [BigInt(0), BigInt(1)];
    const factorial = num => (typeof memo[num] !== 'number')
        ? ((num - BigInt(1)) > 0
            ? (num * factorial(num - BigInt(1)))
            : BigInt(1)
        )
        : memo[num]

    console.log(String(factorial(BigInt(n))));
}