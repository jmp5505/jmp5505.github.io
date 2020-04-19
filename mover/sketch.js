let player1;
let player2;
let bomb1 = [];
let bomb2 = [];
let maxbombs = 10;
function setup() {
  createCanvas(1000, 600);
  player1 = new Player(0, height/2, 50, 'green', 0);
  player2 = new Player(950, height/2, 50, 'red', PI);
  bomb1.push(new Bomb(-40, -40));
  bomb2.push(new Bomb(-40, -40));
}

function draw() {
  background(0);
  player1.render();
  player2.render();
  for(let i = 0; i < bomb1.length; i++) {
    if (bomb1.length <= maxbombs) {
      bomb1[i].render();
    }
    else {
      bomb1.splice(i, 1)
    }
  }
  for(let j = 0; j < bomb2.length; j++) {
    if (bomb2.length <= maxbombs) {
      bomb2[j].render();
    }
    else {
      bomb2.splice(j, 1)
    }
  }
  player1.update();
  player2.update();
}

function keyPressed() {
  if (keyCode === 83) {
    player1.vel = createVector(0, player1.speed);
  }
  else if (keyCode === 87) {
    player1.vel = createVector(0, -player1.speed);
  }
  else if (keyCode === 68) {
    player1.vel = createVector(player1.speed, 0);
  }
  else if (keyCode === 65) {
    player1.vel = createVector(-player1.speed, 0);
  }
  else if (keyCode === 40) {
    player2.vel = createVector(0, player2.speed);
  }
  else if (keyCode === 38) {
    player2.vel = createVector(0, -player2.speed);
  }
  else if (keyCode === 39) {
    player2.vel = createVector(player2.speed, 0);
  }
  else if (keyCode === 37) {
    player2.vel = createVector(-player2.speed, 0);
  }
  else if (keyCode === 32) {
    bomb1.push(new Bomb(player1.pos.x + (player1.size/4), player1.pos.y  + (player1.size/4)));
  }
  else if (keyCode === 13) {
    bomb2.push(new Bomb(player2.pos.x + (player2.size/4), player2.pos.y  + (player2.size/4)));
  }
}
