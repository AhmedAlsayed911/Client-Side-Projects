var i=0;
var test2 = setInterval(function(){
    if(i == 10)
        clearInterval(test2)
    document.write(`<span style="border: 4px solid red;">${i}</span><br>`);
    i++;
}, 1000);