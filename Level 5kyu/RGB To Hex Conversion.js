const rgb = (r, g, b) => {
    return convert(r) + convert(g) + convert(b);
};

const convert = (number) => {
    if (number <= 0) return "00";
    else if (number >= 255) return "FF";
    else
        return number.toString(16).length === 1
            ? "0" + number.toString(16).toUpperCase()
            : number.toString(16).toUpperCase();
};
