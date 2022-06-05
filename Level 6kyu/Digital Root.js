function digital_root(n) {
    if (n < 10) return n;
    else {
        const arrOfDigits = Array.from(String(n), Number);
        return digital_root(arrOfDigits.reduce((a, b) => a + b, 0))
    }
}
