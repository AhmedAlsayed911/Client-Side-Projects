var arr = [3,1,2,4,3,5,1];

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