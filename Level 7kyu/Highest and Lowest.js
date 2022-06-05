function highAndLow(numbers) {
    var myArray = numbers.split(" ");
    var min = 9007199254740991;
    var max = -9007199254740991;
    myArray.forEach(element => {
        var num = parseInt(element);
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num
        }
    });
    return `${max} ${min}`;
}
