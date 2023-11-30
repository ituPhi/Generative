class Mover {
  constructor(speed) {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(random(-speed, speed), random(-speed, speed));
  }
  update() {
    this.position.add(this.velocity);
  }

  display() {
    fill(color("red"));
    noStroke();
    ellipse(this.position.x, this.position.y, 25, 25);
    stroke(1);
    strokeWeight(3);
    line(width / 2, height / 2, this.position.x, this.position.y);
  }
}
