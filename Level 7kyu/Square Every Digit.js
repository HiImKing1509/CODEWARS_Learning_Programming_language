function squareDigits(num) {
    const arrOfDigits = Array.from(String(num), Number);
    var result = [];
    arrOfDigits.forEach(element => {
        result.push((element ** 2).toString());
    });
    return parseInt(result.join(''));
}
