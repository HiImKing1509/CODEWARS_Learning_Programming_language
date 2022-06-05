function findUniq(arr) {
    arr.sort((a, b) => {return a - b});
    return arr[1] === arr[0] ? arr.slice(-1)[0] : arr[0];
}
