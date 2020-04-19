let player;

function setup() {
  createCanvas(1000, 600);
  player = new Player(width/2, height/2, 40);
}

function draw() {
  background(0);
  player.render();
  player.update();
}
class Player {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.speed = 3;
    this.size = size;
  }
  render() {
    stroke(255);
    noFill();
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }
  update() {
    this.pos.add(this.vel.mult(0.999));
    if (this.pos.x > (width + this.size) && this.vel.x > 0) {
      this.pos.x = -this.size;
    }
    else if (this.pos.x < -this.size && this.vel.x < 0) {
      this.pos.x = width + this.size;
    }
    else if (this.pos.y > (height + this.size) && this.vel.y > 0) {
      this.pos.y = -this.size;
    }
    else if (this.pos.y < -this.size && this.vel.y < 0) {
      this.pos.y = height + this.size;
    }

  }
}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    player.vel = createVector(0, player.speed);
  }
  else if (keyCode === UP_ARROW) {
    player.vel = createVector(0,  -player.speed);
  }
  else if (keyCode === RIGHT_ARROW) {
    player.vel = createVector( player.speed, 0);
  }
  else if (keyCode === LEFT_ARROW) {
    player.vel = createVector( -player.speed, 0);
  }
}
