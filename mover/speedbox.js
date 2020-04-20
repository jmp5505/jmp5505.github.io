class SpeedBox {
  constructor(x, y) {
    this.pos = createVector(x,y);
  }
  render(col) {
    this.col = col;
    stroke(this.col);
    rect(this.pos.x,this.pos.y, 20, 20);
  }
  eat(player) {
    player.speed = 4;
  }
}
