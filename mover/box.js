class Box {
  constructor(x, y, type) {
    this.pos = createVector(x,y);
    this.type = type; // 0 for speedbox, 1 for borderbox, 2 for freezebox, 3 for healbox
  }
  render(col) {
    if (this.type === 3) {
      strokeWeight(1);
      stroke(255);
      fill(255);
      rect(this.pos.x,this.pos.y, 20, 20);
      strokeWeight(4);
      stroke('red');
      line(this.pos.x + 10, this.pos.y + 4, this.pos.x + 10, this.pos.y + 16);
      line(this.pos.x + 4, this.pos.y + 10, this.pos.x + 16, this.pos.y + 10);
      stroke(255);
      strokeWeight(1);
    }
    else {
      this.col = col;
      stroke(this.col);
      rect(this.pos.x,this.pos.y, 20, 20);
    }
  }
  eat(player, enemy) {
    if (this.type === 0) {
      player.speed = 4;
    }
    else if (this.type === 1) {
      enemy.blocked = true;
    }
    else if (this.type === 2) {
      player.speed = 0.5;
      player.vel.mult(0.25);
    }
    else if (this.type === 3) {
      player.hp += 1;
    }
  }
}
