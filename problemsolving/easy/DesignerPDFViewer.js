// Version 1
function designerPdfViewer(h, word, queries=[], max=0) {
    const arr = [...word.split('')]
        for (let i = 0; i < arr.length; i++)
            queries.push(arr[i].charCodeAt() - 97) // starts charCode at 0
        for (let i = 0; i < queries.length; i++)
            if (h[queries[i]] > max) max = h[queries[i]]
    return arr.length * max
}

// Version 2
function designerPdfViewer(h, word, queries=[], max=0) {
    // Write your code here
    const arr = [...word.split('')]
    arr.forEach(word => queries.push(word.charCodeAt() - 97))
    queries.forEach(query => (h[query] > max) && (max = h[query]))            
    return arr.length * max
}