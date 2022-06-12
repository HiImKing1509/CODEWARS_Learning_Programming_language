function findOutlier(integers) {
    return integers.filter((x) => x % 2).length === 1 ?
        parseInt(integers.filter((x) => x % 2).toString()) : 
        parseInt(integers.filter((x) => !(x % 2)).toString());
}
