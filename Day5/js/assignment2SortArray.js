var arr = [3,1,2,4,3,5,1];
var newArr = arr.filter(function(item,index){
    return arr.indexOf(item) == index;
})

var sortedArr = newArr.sort(function(a,b){
    return a-b;
})
console.log(sortedArr);
