class Hp {
  constructor(value, x, y, col, enemy) {
    this.value = value;
    this.pos = createVector(x,y);
    this.col = col;
    this.enemy = enemy
    this.gameOver = false;
  }
  render() {
    textSize(20);
    stroke(this.col);
    text(this.value, this.pos.x, this.pos.y, this.pos.x + 10, this.pos.y + 10);
  }
  update(lives) {
    this.value = lives;
    if (this.value < 1 && this.gameOver === false) {
      this.gameOver = true;
    }
    if (this.gameOver === true) {
      textSize(40);
      stroke(255);
      text("GAME OVER! " + this.enemy + " is victorious\n        Press R to restart", width/2 - 300, height/2 - 20);
    }
  }
}
