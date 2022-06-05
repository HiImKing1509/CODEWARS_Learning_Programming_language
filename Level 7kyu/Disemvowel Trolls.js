function disemvowel(str) {
    const includesArray = ['u', 'e', 'o', 'a', 'i', 'U', 'E', 'O', 'A', 'I'];
    for (let i = 0; i < str.length; i++) {
        if (includesArray.includes(str[i])) {
            str = str.replace(str[i--], '');
        }
    }
    return str;
}
