function sumOfDifferences(arr) {
    arr.sort((a, b) => {
        return a - b;
    }); 

    var sum = 0;

    for (let index = 0; index < arr.length - 1; index++) {
        sum += (arr[index + 1] - arr[index]);
    }

    return sum;
}
