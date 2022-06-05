function spinWords(string) {
    var arrString = string.split(" ");
    arrString.forEach((element, i) => {
        if (element.length >= 5)
            arrString[i] = [...element].reverse().join("");
    });
    return arrString.join(" ");
}
