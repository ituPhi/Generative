class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.lifespan = 255;
  }
  update() {
    this.position.add(this.velocity);
    this.lifespan -= 0.2;
  }

  display() {
    stroke(0, this.lifespan);
    fill(255, this.lifespan);
    ellipse(this.position.x, this.position.y, 25, 25);
  }

  isDead() {
    return this.lifespan < 0;
  }
}
