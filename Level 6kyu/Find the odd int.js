function findOdd(A) {
    var obj = {};
    A.forEach(element => {
        if(!(element in obj)) {
            obj[element] = 1;
        } else {
            obj[element]++;
        }
    });
    for (const key in obj) {
        if (obj[key] % 2) {
            return parseInt(key);
        }
    }
    return 0;
}
