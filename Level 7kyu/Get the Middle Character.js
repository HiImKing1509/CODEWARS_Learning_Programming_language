function getMiddle(s) {
    var n = s.length;
    if (!(n % 2)) {
        return s.substring(n / 2 - 1, n / 2 + 1);
    } else {
        return s.substring(n / 2 + 1, n / 2);
    }
}
