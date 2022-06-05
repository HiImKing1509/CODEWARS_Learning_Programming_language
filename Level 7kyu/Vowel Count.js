function getCount(str) {
    let vowelsCount = 0;
    let sCheck = "aeiou";

    for (let index = 0; index < str.length; index++) {
        if (sCheck.includes(str[index])) {
            vowelsCount++;
        }
    }
    return vowelsCount;
}
