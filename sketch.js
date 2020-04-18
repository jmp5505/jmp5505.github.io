let cookie;
let count = 0;
let coef = 1;
let coefcoef = 1;
let price = 25;
let autoprice = 200;
let autocoef = 10;
let autofarm = 0;
let effect = false;
let effects = [];



function setup() {
    createCanvas(1200, 600);
    cookie = new Cookie();
}
function draw() {
    count += autofarm / 100;
    background(0);
    frameRate(30);
    cookie.render(600, 300);
    document.getElementById("counter").innerText = count.toPrecision(3);
    stroke(255);
    if (effect === true) {
        effects.push(ellipse(random(100,1100), random(100, 500), 20, 20));
        effects.push(ellipse(random(100,1100), random(100, 500), 20, 20));
        effects.push(ellipse(random(100,1100), random(100, 500), 20, 20));
        effects.push(ellipse(random(100,1100), random(100, 500), 20, 20));
        setTimeout(function(){
            
        }, 3000);
        effect = false;
    }
    
    
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
            effect = true;
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
        coefcoef++;
        price *= coefcoef * 2;
        document.getElementById("upgrade").innerText = price;
    }
}
function Autofarm () {
    if (count >= autoprice) {
        count -= autoprice;
        console.log("purchased autofarm");
        autocoef++;
        autoprice += autocoef * 10;
        autofarm += autocoef;
        document.getElementById("autofarm").innerText = autoprice;
    }
}