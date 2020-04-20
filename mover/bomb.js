class Bomb {
  constructor(x, y, col) {
    this.pos = createVector(x, y);
    this.col = col
    this.i = 0;
    this.rise = true;
  }

  render(col) {
    this.col = col;
    this.col.setBlue(this.i);
    if (this.rise === true) {
      this.i++;
    }
    else if (this.rise === false) {
      this.i--;
    }
    if (this.i >= 255) {
      this.rise = false;
    }
    else if (this.i <= 0) {
      this.rise = true;
    }
    stroke(this.col);
    noFill();
    rect(this.pos.x, this.pos.y, 20, 20);

  }
}
