class Box {
  constructor(x, y, type) {
    this.pos = createVector(x,y);
    this.type = type; // 0 for speedbox, 1 for borderbox, 2 for freezebox, 3 for healbox, 4 for superbox
  }
  render(col) {
    if (this.type === 3) {
      strokeWeight(1);
      stroke(255);
      rect(this.pos.x,this.pos.y, 20, 20);
      strokeWeight(1);
      stroke('red');
      line(this.pos.x + 10, this.pos.y + 4, this.pos.x + 10, this.pos.y + 16);
      line(this.pos.x + 4, this.pos.y + 10, this.pos.x + 16, this.pos.y + 10);
      stroke(255);
      strokeWeight(1);
    }
    if (this.type === 4) {
      this.col = col;
      stroke(this.col);
      strokeWeight(1);
      beginShape();
      vertex(this.pos.x + 10, this.pos.y - 2.5);
      vertex(this.pos.x + 12.5, this.pos.y + 7.5);
      vertex(this.pos.x + 22.5, this.pos.y + 10);
      vertex(this.pos.x + 12.5, this.pos.y + 12.5);
      vertex(this.pos.x + 10, this.pos.y + 22.5);
      vertex(this.pos.x + 7.5, this.pos.y + 12.5);
      vertex(this.pos.x - 2.5, this.pos.y + 10);
      vertex(this.pos.x + 7.5, this.pos.y + 7.5);
      vertex(this.pos.x + 10, this.pos.y - 2.5);
      endShape();
      stroke(255);
    }
    else {
      this.col = col;
      stroke(this.col);
      rect(this.pos.x,this.pos.y, 20, 20);
    }
  }
  eat(player, enemy) {
    if (this.type === 0) {
      player.speed += 2;
      player.vel.mult(2);
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
    else if (this.type === 4) {
      player.invincible = true;
      player.speed = 8;
      player.vel.mult(4);
    }
  }
}
