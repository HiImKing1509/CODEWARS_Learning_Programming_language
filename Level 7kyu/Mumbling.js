function accum(s) {
    var res = "";
    for (var i = 0; i < s.length; i += 1) {
        res += (s.charAt(i).toUpperCase() + s[i].toLowerCase().repeat(i)) + '-';
    }
    return res.slice(0, -1);
}
