function duplicateEncode(word)
{
    var obj = new Object;
    var arr = word.toLowerCase().split("")
    arr.forEach(element =>
    {
        if (element in obj)
            obj[ element ]++;
        else obj[ element ] = 1;
    });

    var str = "";
    arr.forEach(element => str += obj[ element ] === 1 ? "(" : ")");
    return str;
}
