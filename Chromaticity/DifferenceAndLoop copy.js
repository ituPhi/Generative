const npts = 200; // Number of points per ring
const numRings = 20; // Number of concentric rings
const maxRadius = 450; // Maximum radius for the outermost ring
const primaryColors = ['rgb(0,255,115)', 'rgb(216,168,238)', 'blue','black']; // Array of primary colors

function setup() {
  let cnv = createCanvas(1400, 1400);
  noLoop();
}

function draw() {
  background(220);

  for (let ring = 0; ring < numRings; ring++) {
    let radius = (ring + 1) * maxRadius / numRings;
    const rStep = TWO_PI / npts;

    for (let angle = 0; angle < TWO_PI; angle += rStep) {
      let x = width / 2 + cos(angle) * radius ;
      let y = height / 2 + sin(angle) * radius;

      // Select color using modulo operator
      fill(primaryColors[ring % primaryColors.length]);
      noStroke();
      rectMode(CENTER);
      // Draw circle with random size
      circle(x, y, 20);
      rect(x,y,20,400);
       rect(x+100,y+100,1,1400);
blendMode(DIFFERENCE)
    }
  }

}
