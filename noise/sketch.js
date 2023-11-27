let xoff = 0;
let xoff2 = 10000;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  xoff += 0.01;
  xoff2 += 0.02;
  let x = map(noise(xoff), 0, 1, 0, width);
  let y = map(noise(xoff2), 0, 1, 0, width);

  console.log(xoff);
  fill(color("red"));
  ellipse(x, y, 20, 20);
}
