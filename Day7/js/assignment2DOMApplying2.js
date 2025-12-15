window.onload = function () {

    var secTable = document.getElementsByTagName('table')[1];
    var firstAnchor = secTable.getElementsByTagName('a')[0];
    firstAnchor.href = "training.com";
    firstAnchor.innerText = "Training";
    // console.log(firstAnchor);


    var images = document.getElementsByTagName('img');
    var lastImage = images[images.length - 1];
    lastImage.style.border = "2px solid pink";
    // console.log(lastImage);

    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        var userData = document.getElementById('UserData');
        var checked = userData.querySelectorAll("input[name = 'hoppy']:checked");

        checked.forEach(element => {
            alert(element.value);
        });
    });

    var example = document.getElementById('example');
    example.style.background = "red";
    // console.log(example);
};
