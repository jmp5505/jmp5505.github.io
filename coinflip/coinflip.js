var lastx = 1;
function flip() {
    let x = Math.floor(Math.random(0,2) * 2) +1;
    if (lastx == 0) {
        x += 2;
    }
    document.getElementById("flip").innerHTML = "<img src=\""+ x.toString() +".gif?" + Math.floor(Math.random(0, 10000000) * 10) + "\">";
    lastx = x % 2;
}