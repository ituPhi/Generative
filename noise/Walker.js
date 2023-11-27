class Walker {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
  }
  step() {
    let choice = floor(random(5));
    let step = createVector();

    switch (choice) {
      case 0:
        step = createVector(3 + this.r, 0);
        break;
      case 1:
        step = createVector(-3 - this.r, 0);
        break;
      case 2:
        step = createVector(0, 3 + this.r);
        break;
      case 3:
        step = createVector(0, -3 - this.r);
        break;
      case 4:
        createVector(0, -3 - this.r);
        break;
    }
    this.pos.add(step);
  }

  altStep() {
    this.pos.x = this.pos.x + random(-1, 1);
    this.pos.y = this.pos.y + random(-1, 1);
  }

  show() {
    colorMode(HSB);
    stroke(0.5);
    let hue = map(sin(radians(frameCount)), 0, 1, 0, 255);
    fill(hue, 100, 50);
    let scalarScale = sin(radians(frameCount));
    circle(this.pos.x, this.pos.y, this.r * scalarScale);
  }
}
