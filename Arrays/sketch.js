let movers = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    movers.push(new Mover(0.1));
  }
}
function draw() {
  background(220);
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();
  }
}
