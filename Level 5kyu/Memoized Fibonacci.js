var fibonacci = function (n) {
    var fib = [0, 1, 1];
    for (var i = 3; i <= n; i++)
		    fib[i] = fib[i - 1] + fib[i - 2];
    return n < 0 ? "NaN" : fib[n];
}
