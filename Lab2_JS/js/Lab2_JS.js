var arr = [3,1,2,4,3,5,1];
var newArr = arr.filter(function(item,index){
    return arr.indexOf(item) == index;
})
console.log(newArr);


var sortedArr = newArr.sort(function(a,b){
    return a-b;
})
console.log(sortedArr);



var filteringArrBiggerThan50 = newArr.filter(function(item){
    return item > 50;
})
console.log(filteringArrBiggerThan50);

function RemoveItemsBiggerThan50(arr) {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] > 50) {
            result.push(arr[index]);
        }
    }
    return result;
}   
var userDefinedRemovingBiggerThan50Values = RemoveItemsBiggerThan50(newArr);
console.log(userDefinedRemovingBiggerThan50Values);


function DisplayMaxAndMin(arr){
    var res = [];
    max = arr[0];
    min = arr[0];
    for (var i = 0; i < arr.length; i++) {
              if(arr[i] > max)
                max  = arr[i];
            else if(arr[i] < min)
                min = arr[i];
    }
    res.push(min);
    res.push(max);
    return res;
}
var GetMaxAndMin = DisplayMaxAndMin(arr);
console.log("Min Number = "+min+" Max = "+max)

/////////////////////////////////////////////////

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



/////////////////////////////////////////////////////////////

function UpFirstChar(str){
if(str == undefined || str == null)
    console.log("Error!!");
else
{
    var y = [];
    var up = str.split(" ");
    for(var i=0;i<up.length;i++)
    {
       up[i] = up[i].charAt(0).toUpperCase() + up[i].substring(1);
       y.push(up[i]);
    }
    return y.join(" ") ;
}
}
var upi = prompt("Enter any string");
var resultt = UpFirstChar(upi);
console.log(resultt);


function GetMaxLength(str){
if(str == undefined || str == null)
    console.log("Error!!");
else
{   
    var index;
    var maxLength = 0;
    var up = str.split(" ");
    for(var i=0;i<up.length;i++)
        if(up[i].length > maxLength)
        {
            maxLength = up[i].length;
            index = i;
        }
            
    return up[index];
}
}
var maxi = prompt("Enter any string");
var resulttt = GetMaxLength(maxi);
console.log(resulttt);
