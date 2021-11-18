function bonAppetit(bill, k, b, billSum = 0) {
    for (let i = 0; i < bill.length; i++) {
        if(i !== k)
            billSum += bill[i]
    }
    b - (billSum / 2) ? console.log(b - (billSum / 2)) : console.log('Bon Appetit')
}