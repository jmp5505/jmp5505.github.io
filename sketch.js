let cookie;
let count = 0;
let coef = 1;
let coefcoef = 1;
let price = 25;
let autoprice = 200;
let autocoef = 10;
let autofarm = 0;

function setup() {
    createCanvas(1200, 600);
    cookie = new Cookie();
}
function draw() {
    count += autofarm / 100;
    background(0);
    frameRate(30);
    cookie.render(600, 300);
    document.getElementById("counter").innerText = count.toPrecision(5);
    stroke(255);
}

function Cookie() {
    this.render = function(a, b) {
        fill('red');
        stroke(255);
        ellipse(a,b,200,200);
    }
    this.click = function(xval, yval) {
        if (xval >= 500 && xval <= 700 && yval >= 200 && yval <= 400) {
            count = count + 1 * coef;
            console.log("clicked");
        }
    }
}
function mouseClicked() {
    cookie.click(mouseX, mouseY);
    console.log(mouseX, mouseY);
    console.log(count);
}
function Upgrade () {
    if (count >= price) {
        count -= price;
        console.log("purchased upgrade");
        coef = 8 * coefcoef;
        coefcoef += 0.3;
        price *= (coefcoef * 0.3) + 1;
        document.getElementById("upgrade").innerText = price.toPrecision(5);
    }
}
function Autofarm () {
    if (count >= autoprice) {
        count -= autoprice;
        console.log("purchased autofarm");
        autocoef++;
        autoprice += autocoef * 10;
        autofarm += autocoef;
        document.getElementById("autofarm").innerText = autoprice.toPrecision(5);
    }
}