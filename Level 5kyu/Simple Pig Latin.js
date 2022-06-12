function pigIt(str) {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++)
        if (!arr[i].match((/^[^a-zA-Z0-9]+$/)))
            arr[i] = arr[i].slice(1) + arr[i][0] + "ay";
    return arr.join(" ");
}
