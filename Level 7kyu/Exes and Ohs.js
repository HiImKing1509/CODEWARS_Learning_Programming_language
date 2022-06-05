function XO(str) {
    var x = 0;
    var o = 0;
    for (var i = 0; i < str.length; i += 1) {
        if (str[i] === 'x' || str[i] === 'X') x += 1;
        else if (str[i] === 'o' || str[i] === 'O') o += 1;
    }
    return x === o;
}
