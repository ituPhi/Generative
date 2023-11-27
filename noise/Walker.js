class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  update() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
  }
  show() {
    point(this.pos.x, this.pos.y);
  }
}
