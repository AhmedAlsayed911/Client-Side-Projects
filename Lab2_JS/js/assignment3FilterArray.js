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