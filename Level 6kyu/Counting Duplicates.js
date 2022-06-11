function duplicateCount(text) {
    var obj = {};
    var res = 0;
    text.toLowerCase().split("").forEach(element => {
        if (element in obj)
            obj[element]++;
        else
            obj[element] = 1;
    });
    for (const key in obj)
        if (obj[key] > 1)
            res++;
    return res;
}
