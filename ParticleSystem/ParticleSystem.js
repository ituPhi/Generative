class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }
  addParticles() {
    this.particles.push(new Particle(this.origin.x, this.origin.y));
  }

  setOrigin(newX, newY) {
    this.origin = createVector(newX, newY);
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.update();
      p.display();
      if (p.isDead()) {
        this.particles.splice(i, 1);
        console.log("running here2");
      }
    }
  }
}
