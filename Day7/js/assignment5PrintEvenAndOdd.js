var arr = ["Ahmed", "Sara", "Omar", "Laila", "Yousef", "Mona"];

window.onload = function () {
    var btn = document.getElementById('printBtn')
    var div = document.getElementById('output')

    btn.addEventListener("click", function(){

        arr.forEach((item,index) => {
            var p = document.createElement("p");
            p.textContent = item;
            if(index % 2 ==0){
                p.style.color = "green";
            }
            else{
                p.style.color = "blue";
            }
            div.appendChild(p);
        });
    })
}