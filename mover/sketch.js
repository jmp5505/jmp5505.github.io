let player1;
let player2;
let hp1;
let hp2;
let bomb1 = [];
let bomb2 = [];
let speedBox = [];
let borderBox = [];
let freezeBox = [];
let healBox = [];
const maxBombs = 10;
const maxSpeedBoxes = 3;
const maxBorderBoxes = 2;
const maxFreezeBoxes = 4;
const maxHealBoxes = 2;
const speedBoxChance = 600;
const borderBoxChance = 1200;
const freezeBoxChance = 1300;
const healBoxChance = 600;
let score1 = 0;
let score2 = 0;

function setup() {
  createCanvas(1300, 600);
  player1 = new Player(0, height/2, 50, 'green', 10);
  player2 = new Player(width - 50, height/2, 50, 'red', 10);
  hp1 = new Hp(player1.hp, 50, 20, 'green', "red");
  hp2 = new Hp(player2.hp, width - 70, 20, 'red', "green");
}

function draw() {
  background(0);
  player1.render();
  player2.render();
  hp1.render();
  hp2.render();
  stroke(255);
  textSize(40);
  text(score1, 10, 590);
  text(score2, width - 40, 590);

  for(let i = 0; i < bomb1.length; i++) {
    if (bomb1.length <= maxBombs) {
      if ((player2.pos.x + player2.size) < bomb1[i].pos.x || player2.pos.x > (bomb1[i].pos.x + 20) || (player2.pos.y + player2.size) < bomb1[i].pos.y || player2.pos.y > (bomb1[i].pos.y + 20)) {
        bomb1[i].render(color(0, 255, 0));
      }
      else {
        bomb1.splice(i, 1);
        player2.hp -= 1;
      }
    }
    else {
      bomb1.splice(i, 1);
    }
  }
  for(let j = 0; j < bomb2.length; j++) {
    if (bomb2.length <= maxBombs) {
      if ((player1.pos.x + player1.size) < bomb2[j].pos.x || player1.pos.x > (bomb2[j].pos.x + 20) || (player1.pos.y + player1.size) < bomb2[j].pos.y || player1.pos.y > (bomb2[j].pos.y + 20)) {
        bomb2[j].render(color(255, 0, 0));
      }
      else {
        bomb2.splice(j, 1);
        player1.hp -= 1;
      }
    }
    else {
      bomb2.splice(j, 1);
    }
  }
  if (frameCount % speedBoxChance === 0) {
    speedBox.push(new Box(random(200, width -200), random(0, height), 0));
  }
  for (let k = 0; k < speedBox.length; k++) {
    if (speedBox.length <= maxSpeedBoxes) {
      if ((player1.pos.x + player1.size) < speedBox[k].pos.x || player1.pos.x > (speedBox[k].pos.x + 20) || (player1.pos.y + player1.size) < speedBox[k].pos.y || player1.pos.y > (speedBox[k].pos.y + 20)) {
        speedBox[k].render(color(255, 255, 0));
      }

      else {
        speedBox[k].eat(player1, player2);
        speedBox.splice(k, 1);
        break;
      }
      if ((player2.pos.x + player2.size) < speedBox[k].pos.x || player2.pos.x > (speedBox[k].pos.x + 20) || (player2.pos.y + player2.size) < speedBox[k].pos.y || player2.pos.y > (speedBox[k].pos.y + 20)) {
        speedBox[k].render(color(255, 255, 0));
      }
      else {
        speedBox[k].eat(player2, player1);
        speedBox.splice(k, 1);
        break;
      }
    }
    else {
      speedBox.splice(k, 1);
    }
  }
  if (frameCount % borderBoxChance === 0) {
    borderBox.push(new Box(random(200, width -200), random(0, height), 1));
  }
  for (let l = 0; l < borderBox.length; l++) {
    if (borderBox.length <= maxBorderBoxes) {
      if ((player1.pos.x + player1.size) < borderBox[l].pos.x || player1.pos.x > (borderBox[l].pos.x + 20) || (player1.pos.y + player1.size) < borderBox[l].pos.y || player1.pos.y > (borderBox[l].pos.y + 20)) {
        borderBox[l].render(color(0, 0, 255));
      }

      else {
        borderBox[l].eat(player1, player2);
        borderBox.splice(l, 1);
        break;
      }
      if ((player2.pos.x + player2.size) < borderBox[l].pos.x || player2.pos.x > (borderBox[l].pos.x + 20) || (player2.pos.y + player2.size) < borderBox[l].pos.y || player2.pos.y > (borderBox[l].pos.y + 20)) {
        borderBox[l].render(color(0, 0, 255));
      }
      else {
        borderBox[l].eat(player2, player1);
        borderBox.splice(l, 1);
        break;
      }
    }
    else {
      borderBox.splice(l, 1);
    }
  }
  if (frameCount % freezeBoxChance === 0) {
    freezeBox.push(new Box(random(200, width -200), random(0, height), 2));
  }
  for (let m = 0; m < freezeBox.length; m++) {
    if (freezeBox.length <= maxFreezeBoxes) {
      if ((player1.pos.x + player1.size) < freezeBox[m].pos.x || player1.pos.x > (freezeBox[m].pos.x + 20) || (player1.pos.y + player1.size) < freezeBox[m].pos.y || player1.pos.y > (freezeBox[m].pos.y + 20)) {
        freezeBox[m].render(color(0, 255, 255));
      }

      else {
        freezeBox[m].eat(player1, player2);
        freezeBox.splice(m, 1);
        break;
      }
      if ((player2.pos.x + player2.size) < freezeBox[m].pos.x || player2.pos.x > (freezeBox[m].pos.x + 20) || (player2.pos.y + player2.size) < freezeBox[m].pos.y || player2.pos.y > (freezeBox[m].pos.y + 20)) {
        freezeBox[m].render(color(0, 255, 255));
      }
      else {
        freezeBox[m].eat(player2, player1);
        freezeBox.splice(m, 1);
        break;
      }
    }
    else {
      freezeBox.splice(m, 1);
    }
  }
  if (frameCount % healBoxChance === 0) {
    healBox.push(new Box(random(200, width -200), random(0, height), 3));
  }
  for (let n = 0; n < healBox.length; n++) {
    if (healBox.length <= maxHealBoxes) {
      if ((player1.pos.x + player1.size) < healBox[n].pos.x || player1.pos.x > (healBox[n].pos.x + 20) || (player1.pos.y + player1.size) < healBox[n].pos.y || player1.pos.y > (healBox[n].pos.y + 20)) {
        healBox[n].render(color(255, 255, 255));
      }

      else {
        healBox[n].eat(player1, player2);
        healBox.splice(n, 1);
        break;
      }
      if ((player2.pos.x + player2.size) < healBox[n].pos.x || player2.pos.x > (healBox[n].pos.x + 20) || (player2.pos.y + player2.size) < healBox[n].pos.y || player2.pos.y > (healBox[n].pos.y + 20)) {
        healBox[n].render(color(255, 255, 255));
      }
      else {
        healBox[n].eat(player2, player1);
        healBox.splice(n, 1);
        break;
      }
    }
    else {
      healBox.splice(n, 1);
    }
  }
  player1.update();
  player2.update();
  hp1.update(player1.hp);
  hp2.update(player2.hp);
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
  else if (keyCode === 82) {
    if (hp1.gameOver === true || hp2.gameOver === true) {
      if (hp1.gameOver === true) {
        score2++;
      }
      else if (hp2.gameOver === true) {
        score1++;
      }
      hp1.gameOver = false;
      hp2.gameOver = false;
      bomb1 = [];
      bomb2 = [];
      speedBox = [];
      borderBox = [];
      freezeBox = [];
      healBox = [];
      setup();
    }
  }
}
