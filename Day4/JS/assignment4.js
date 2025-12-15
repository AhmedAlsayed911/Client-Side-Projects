var sum = 0;
var num;
for (var i = 1; i <= 5; i++) {
    num = prompt("Enter number " + i + " : ");
    if (isNaN(num))
        alert("Invalid input, please enter numeric values.");
    else
        sum += Number(num);
}
console.log(sum.toPrecision(5));