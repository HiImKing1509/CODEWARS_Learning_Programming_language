function sortArray(array) {
    oddArray = [];
    array.forEach(element => {
        if (element % 2) {
            oddArray.push(element);
        }
    });
    oddArray.sort((a, b) => {return a - b});

    var index = 0;
    array.forEach((element, i) => {
        if (element % 2) {
            array[i] = oddArray[index++];
        }
    });
    
    return array;
}
