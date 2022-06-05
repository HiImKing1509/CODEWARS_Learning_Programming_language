function findShort(s) {
    var myArray = s.split(" ");
    return myArray.reduce((a, b) => a.length <= b.length ? a : b).length;
}
