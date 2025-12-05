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