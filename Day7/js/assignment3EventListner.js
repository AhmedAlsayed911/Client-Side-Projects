addEventListener("load", function () {

    var nxtbtn = this.document.getElementById('nxt');
    var prebtn = document.getElementById('pre');
    var slide = this.document.getElementById('ss');
    var stop = this.document.getElementById('stp');
    var img = document.getElementsByTagName('img')[0];
    var counter = 1;

    nxtbtn.addEventListener("click", function () {
        counter++
        if (counter == 7)
            counter = 1;
        img.src = `/assets/Images/${counter}.png`
    })

    prebtn.addEventListener("click", function () {
        counter--;
        if (counter == 0)
            counter = 6;
        img.src = `/assets/Images/${counter}.png`
    })

    var slideCounter = 1;
    var test;
    slide.addEventListener("click", function () {
        test = setInterval(() => {
            slideCounter++
            if(slideCounter == 7)
                slideCounter = 1;
            img.src = `/assets/Images/${slideCounter}.png`;
        }, 1000);
    })

    stop.addEventListener("click", function(){
        clearInterval(test);
    })
});
