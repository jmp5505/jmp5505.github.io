class Box {
  constructor(x, y, type) {
    this.pos = createVector(x,y);
    this.type = type; // 0 for speedbox, 1 for borderbox
  }
  render(col) {
    this.col = col;
    stroke(this.col);
    rect(this.pos.x,this.pos.y, 20, 20);
  }
  eat(player, enemy) {
    if (this.type === 0) {
      player.speed = 4;
      this.eaten = true;
    }
    else if (this.type === 1) {
      enemy.blocked = true;
    }
  }
}
