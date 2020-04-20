class Player {
  constructor(x, y, size, col, hp) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.speed = 3;
    this.size = size;
    this.col = col;
    this.hp = hp;
  }

  render() { //draw the player
    stroke(this.col);
    noFill();
    rect(this.pos.x, this.pos.y, this.size, this.size);

  }

  update() { //move the player

    this.pos.add(this.vel);
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
