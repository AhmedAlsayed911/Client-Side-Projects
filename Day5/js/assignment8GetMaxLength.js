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