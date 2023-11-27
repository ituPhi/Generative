let walker;

function setup() {
  createCanvas(900, 900);
  walker = new Walker(width / 2, height / 2, 25);
}
function draw() {
  // background(220);
  walker.step();
  walker.show();
}
