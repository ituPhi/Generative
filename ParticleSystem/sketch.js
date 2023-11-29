let particleSystem;

function setup() {
  createCanvas(400, 400);
  particleSystem = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(220);
  if (mouseX > 0 || mouseY > 0) {
    particleSystem.setOrigin(mouseX, mouseY);
    particleSystem.addParticles();
    particleSystem.run();
  }

  console.log(mouseX);
  console.log(mouseY);
  //console.log("running here");
}
