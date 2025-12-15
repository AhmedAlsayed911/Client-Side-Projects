function sumAll(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++)
    {
        if(!isNaN(arguments[i]))
            sum += arguments[i];
        else
            console.log("invalid input!!")
    }
    return isNaN(sum) ? console.log("Invalid input") : console.log(sum);
}
var test =  sumAll(1,2,3,4,5);
console.log(test);
