let particleSystem;

function setup() {
  createCanvas(400, 400);
  particleSystem = new ParticleSystem(createVector(width / 2, height / 2));
}

function draw() {
  background(220);
  particleSystem.addParticles();
  particleSystem.run();
  //console.log("running here");
}
