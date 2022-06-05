function validParentheses(parens) {
    var sum = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === '(') sum += 1
        else {
            sum -= 1;
            if (sum === -1) return false;
        }
    }
    return sum === 0 ? true : false;
}
