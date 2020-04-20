class Player {
  constructor(x, y, size, col, hp) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.speed = 2;
    this.size = size;
    this.col = col;
    this.hp = hp;
    this.blocked = false;
    this.bcounter = 0;
    this.scounter = 0;
    this.fcounter = 0;
  }

  render() { //draw the player
    stroke(this.col);
    noFill();
    rect(this.pos.x, this.pos.y, this.size, this.size);

  }
  update() { //move the player
    if (this.blocked === true) {
      this.bcounter++;
      if (this.bcounter === 600) {
        this.blocked = false;
        this.bcounter = 0;
      }
    }
    if (this.speed > 2) {
      this.scounter++;
      if (this.scounter === 600) {
        this.speed = 2;
        this.scounter = 0;
      }
    }
    if (this.speed === 0.5) {
      this.fcounter++;
      if (this.fcounter === 600) {
        this.speed = 2;
        this.vel.mult(4);
        this.fcounter = 0;
      }
    }
    this.pos.add(this.vel);
    if (this.blocked === false) {
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
    else {
      if (this.pos.x > (width - this.size) && this.vel.x > 0) {
        this.pos.x = width - this.size;
      }
      else if (this.pos.x < 0 && this.vel.x < 0) {
        this.pos.x = 0;
      }
      else if (this.pos.y > (height - this.size) && this.vel.y > 0) {
        this.pos.y = height - this.size;
      }
      else if (this.pos.y < 0 && this.vel.y < 0) {
        this.pos.y = 0;
      }
    }
  }
}
