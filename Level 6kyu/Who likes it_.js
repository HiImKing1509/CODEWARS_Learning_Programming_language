function likes(names) {
    if (names.length == 0) {
        return "no one likes this";
    } else if (names.length == 1) {
        return `${names.slice(0)} likes this`;
    } else if (names.length == 2) {
        return `${names.slice(0, 1)} and ${names.slice(1)} like this`;
    } else if (names.length == 3) {
        return `${names.slice(0, 1)}, ${names.slice(1, 2)} and ${names.slice(2)} like this`;
    } else {
        return `${names.slice(0, 1)}, ${names.slice(1, 2)} and ${names.slice(2).length} others like this`;
    }
}
