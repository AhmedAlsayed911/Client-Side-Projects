str = "Hello to My JS tasks ❤️"
var i=0;

var win = window.open("","","width = 400 , height = 200")

var interval = setInterval(() => {
    win.document.write(str[i]);
    i++;

    if(i == str.length){
        clearInterval(interval);

        setTimeout(() => {
            win.close();
        }, 1000);
    }
}, 200);