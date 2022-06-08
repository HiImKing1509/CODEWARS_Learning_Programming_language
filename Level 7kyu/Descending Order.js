function descendingOrder(n) {
    var array = n.toString().split("");
    array.sort((a, b) => b - a);
    return parseInt(array.join(""));
}
