function wave(str) {
    var arr = new Array;
    for (let index = 0; index < str.length; index++)
        if (str[index] != " ")
            arr.push(str.substring(0, index) + str.charAt(index).toUpperCase() + str.substring(index + 1));
    return arr;
}
