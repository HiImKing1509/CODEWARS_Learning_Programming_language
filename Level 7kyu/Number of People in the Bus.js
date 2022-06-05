var number = function (busStops) {
    var res = 0;
    busStops.forEach(element => {
        res = res + element[0] - element[1];
    });
    return res;
}
