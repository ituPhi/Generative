const npts = 500; // Number of points per ring
const numRings = 10; // Number of concentric rings
const maxRadius = 900; // Maximum radius for the outermost ring
const primaryColors = ['rgb(0,255,0)', 'rgb(255,0,0)', 'blue','black']; // Array of primary colors

function setup() {
  createCanvas(1000, 1000);
  noLoop();
}

function draw() {
  background(255);

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
      circle(x, y, 200);
      rect(x,y,width*0.3,900);
      //rotate(radians(30))
      //blendMode(DIFFERENCE)

    }

  }
 addPerlinNoise(100,2000)
}

function mousePressed() {
    saveCanvas("cinetic2", "jpeg");
  }


