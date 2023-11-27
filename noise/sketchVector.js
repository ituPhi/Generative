let Walkers;
function setup() {
  createCanvas(400, 400);
  Walkers = new Walker(200, 200);
}

function draw() {
  background(25);
  strokeWeight(3);
  stroke(color("red"));
  Walkers.show();
}
