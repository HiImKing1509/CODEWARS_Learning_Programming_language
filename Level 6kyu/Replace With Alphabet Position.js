function alphabetPosition(text) {
    var obj = {};
    for (var i = 97; i <= 122; i++) obj[String.fromCharCode(i)] = i - 96;

    text = text.toLowerCase();
    var arr = [];
    for (var i = 0; i < text.length; i++)
        if (obj.hasOwnProperty(text[i])) arr.push(obj[text[i]]);
    return arr.join(" ");
}
