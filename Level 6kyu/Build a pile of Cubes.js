function findNb(m) {
    var pref = [];
    pref.push(1);

    var i = 2;
    while (pref.slice(-1) < m)
        pref.push(parseInt(pref.slice(-1)) + Math.pow(i++, 3));

    if (!pref.includes(m)) return -1;
    else return pref.indexOf(m) + 1;
}
