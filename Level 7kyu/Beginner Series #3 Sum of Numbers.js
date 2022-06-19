function getSum(a, b) {
    var arr = a < b ? [a, b] : [b, a];
    return a === b ? a : (arr[1] + arr[0]) * (arr[1] - arr[0] + 1) / 2
}
