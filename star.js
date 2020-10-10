var pos = 0;

function star() {
    console.log("hey");
    var d = new Date();
    var n = d.getMinutes();
    console.log(n);
    if (n % 1 == 0) {
        document.getElementById("star").innerHTML = "<img src=\"star.gif?" + n + "\" style=\"position:absolute;z-index: -20; height: 200px; left:" + Math.floor(Math.random(0, 10) * 100) + "%\">";
        console.log("a");
    }
}
