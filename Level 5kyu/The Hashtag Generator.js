function generateHashtag(str) {
    const arr = str.split("");
    var res = ['#'];
    var flag = true
    var empty = true
    arr.forEach(element => {
        if (element == " ") {
            flag = true;
        } else {
            if (flag) {
                res.push(element.toUpperCase());
            } else {
                res.push(element);
            }
            empty = false
            flag = false;
        }
    });
    if ((res.join("").length > 140) || str.length == 0 || empty) return false
    else return res.join("");
}
