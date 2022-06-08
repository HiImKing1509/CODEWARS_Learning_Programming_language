function positiveSum(arr) {
    return arr.filter((x) => {
        return x > 0;
    }).reduce(function (a, b) {
        return a + b;
    }, 0);
}
