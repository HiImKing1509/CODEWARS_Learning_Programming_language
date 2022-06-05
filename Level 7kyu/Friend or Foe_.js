function friend(friends) {
    var arr = new Array;
    friends.forEach(element => {
        if (element.length === 4) {
            arr.push(element);
        }
    });
    return arr;
}
