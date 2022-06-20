function persistence(num) {
    var flag = true;
    var count = 0;
    while (1) {
        if (num < 10) {
            break;
        } else {
            var arr = Array.from(String(num), Number);
            var res = 1;
            arr.forEach((element) => {
                res *= element;
            });
            num = res;
            count++;
        }
    }
    return count;
}
