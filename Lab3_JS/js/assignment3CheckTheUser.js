var params = new URLSearchParams(window.location.search);
var userName = params.get("Username");
var password = params.get("Password");

var win = window.open("", "", "width=250,height=150");

win.document.open();

if (userName && userName.toUpperCase() === "ALI" && password === "123") {
    win.document.write(`<h2>Hi ${userName}</h2>`);
} else {
    win.document.write(`<h2 style="color:red;">Error!</h2>`);
}

win.document.close();

setTimeout(() => {
    win.close();
}, 1000);
