function narcissistic(value) {
    const num = String((Math.abs(value))).length;

    var result = 0;
    let value_ = value;

    while (value) {
        result += (Math.pow(value % 10, num));
        value = parseInt(value /= 10);
    }

    return result === value_;
}
