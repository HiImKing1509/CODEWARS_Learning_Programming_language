function arrayDiff(a, b) {
    return a = a.filter((item) => !b.includes(item));
}
