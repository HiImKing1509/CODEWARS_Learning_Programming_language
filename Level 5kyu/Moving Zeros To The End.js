function moveZeros(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            array.push(arr[i]);
            arr.splice(i--, 1);
        }
    }
    arr.push(...array);
    return arr;
}
