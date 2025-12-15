do {
    var a = prompt("Enter first number : ");
    var b = prompt("Enter second number : ");
    var sum = Number(a) + Number(b);
    if (isNaN(a) || isNaN(b))
        alert("Invalid input, please enter numeric values.");
    else
        alert("Sum is : " + sum);
    var acc = confirm("Do you want to continue ?");
    if (!acc)
        break;
} while (acc);