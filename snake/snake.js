var isapple = false;
var apples = [];
var stop = false;
var score = 0;
var speed = 20;
var dsound;
var esound;   

function preload() {
    soundFormats('wav');
    dsound = loadSound('https://jmp5505.github.io/snake/ded', console.log("dsound loaded"), console.log("noep"));
    esound = loadSound('https:/jmp5505.github.io/snake/eat', console.log("esound loaded"), console.log("nope"));
}
function setup() {
    let canvas = createCanvas(1200, 560);
    canvas.parent('game');
    snake = new Snake(width/2, height/2);
    scoreboard = new ScoreBoard(40, 40);
    textFont("Monospace");   
}

function keyPressed() {
    if (keyCode == 83 && snake.vel.y != -speed) {
        snake.nextvel = createVector(0, speed);
    }
    else if (keyCode == 87 && snake.vel.y != speed) {
        snake.nextvel = createVector(0, -speed);
    }
    else if (keyCode == 68 && snake.vel.x != -speed) {
        snake.nextvel = createVector(speed, 0);
    }
    else if (keyCode == 65 && snake.vel.x != speed) {
        snake.nextvel = createVector(-speed, 0);
    }
    else if (keyCode == 82) {
        stop = false;
        apples = [];
        isapple = false;
        snake.body = [];
        frameRate(15);
        setup();
    }
}
function draw() {
    if (stop == false) {
        frameRate(15);
    }
    else {
        
        textSize(speed);
        fill(255);
        stroke(255)
        frameRate(0);
        console.log("test");
        score = 0;
        dsound.play(); 
    }
    
    background(0);
    
    
    if (isapple == false) {
        apples.push(new Apple(floor(random(width / speed)) * speed, floor(random(height / speed)) * speed));
        isapple = true;
    }
    if (snake.body.length > 5) {
        for (let i = snake.body.length - 1; i > 0; i--) {
            if (snake.body[i].x == apples[0].pos.x && snake.body[i].y == apples[0].pos.y  && isapple == true) {
                apples.splice(0, 1);
                isapple = false;
                break;
            } 
        }
    }
    if (isapple == true) {
        apples[0].render();
        if (snake.pos.x == apples[0].pos.x && snake.pos.y == apples[0].pos.y) {
            console.log("hammnam");
            snake.eat();
            isapple = false;
        }
    }
    
    
    snake.update();
    snake.render();
    scoreboard.render();

}
class Snake {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(-speed, 0);
        this.nextvel = createVector(-speed, 0);
        this.body = [];
        this.l = 3;
    }
    
    render() {
        stroke(255);
        fill(255);
        
        for (var i = 0; i < this.body.length -1; i++) {
            rect(this.body[i].x, this.body[i].y, speed, speed);
            
        }
        
    }
    update() {
        let i = 0;
        let p = this.pos
        this.body.push(createVector(p.x,p.y));
        if (this.body.length >= this.l) {
            this.body.shift();
        }
        this.vel = this.nextvel;
        this.pos.add(this.vel);
        this.p = 0;
        for (i = this.body.length - 2; i >= 0; i--) {
            if ((this.body.length > 3 && this.body[this.body.length - 1].x == this.body[i].x && this.body[this.body.length - 1].y == this.body[i].y) || this.body[this.body.length - 1].x >= width || this.body[this.body.length - 1].x < 0 || this.body[this.body.length - 1].y >= height || this.body[this.body.length - 1].y < 0) {
                console.log("ded");
                stop = true;
            }
        }
    }
    eat() {
        this.l++;
        score++;
        apples.splice(0, 1);
        console.log(score);
        esound.play(); 
    }
}

class Apple {
    constructor(x, y) {
        this.pos = createVector(x, y);
    }
    render() {
        stroke(255,0,0);
        fill(255,0,0);
        rect(this.pos.x, this.pos.y, speed, speed);
    }
}
class ScoreBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    render() {
        stroke(255);
        textSize(32);
        fill(255);
        text("SCORE: " + score.toString(), this.x, this.y);
        if (stop == true) {
            text("GAME OVER!!\nR to RESTART", width/2 - 100, height/2);
        }
    }
}