function isIsogram(str) {
    lengthString = str.length;
    const res = new Set();
    str.toLowerCase().split("").forEach(element => {
        res.add(element);
    });
    return res.size === lengthString;
}
