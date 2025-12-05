function sumAll() {
    var i = 0;
    var t = [];
    var operation = prompt("'+' or '*' ???!");
    if (operation !== '+' && operation !== '*') {
        return "Error";
    }
    do {
        var num = prompt("Enter only numeric values : ");
        if (num === undefined || num === null || num.trim() === "" || isNaN(num)) {
            console.log("Invalid input!!");
        } else {
            t[i] = num;
            i++;
        }
        var acc = confirm("do you like to continue ?!");
    } while (acc);
    if (t.length === 0) {
        return "Invalid input!!";
    }
    var expr = t.join(operation);
    var result;
    result = eval(expr);
    if (isNaN(result) || result === undefined) {
        return "Invalid input!!";
    } else {
        return result;
    }
}
var result = sumAll();
console.log(result);