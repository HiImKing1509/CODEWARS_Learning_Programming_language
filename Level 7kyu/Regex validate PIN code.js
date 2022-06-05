function validatePIN (pin) {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var arrayPin = pin.split("");
    var flag = true
    arrayPin.forEach(element => {
        if (!arr.includes(element)) flag = false;        
    });

    return flag && (pin.length === 4 || pin.length === 6);
}
