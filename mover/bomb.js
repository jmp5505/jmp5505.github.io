class Bomb {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.col = 1;
  }

  render() {
    this.col++;
    if (this.col >= 255) {
      this.col = 1;
    }
    stroke(this.col);
    noFill();
    rect(this.pos.x, this.pos.y, 20, 20);

  }
}
