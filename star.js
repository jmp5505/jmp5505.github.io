function star() {
    console.log("hey");
    if (Date.getMinutes % 2 == 0) {
        console.log("Ey");
        document.getElementById("body").innerHTML = "<img src=\"star.gif?" + Math.floor(Math.random(0, 10000)) * 10000 + "\" style=\"position:absolute;z-index: -2; height: 200px;\">"
    }
}
