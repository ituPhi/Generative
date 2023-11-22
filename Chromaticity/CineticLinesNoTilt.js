let colors;
let stripeWidth;
let tiltFactor; // The amount of tilt for the black bars

function setup() {
  createCanvas(960, 768);
  // Define the colors - make sure to include black for the tilted bars
  colors = [color('#ff0000'), color('#ffa500'), color('#008000'), color('#0000ff'), color('#000000')];
  stripeWidth = width / (colors.length * 20); // Adjust the number to get the desired number of stripes
  tiltFactor = 0.5; // Change this value to adjust the tilt
  noLoop();
}

function draw() {
  background(255);
  let colorIndex = 0; // Start with the first color

  for (let x = 0; x < width; x += stripeWidth) {
    // Check if the current bar is black and should be tilted
    if (colors[colorIndex % colors.length] === color('#000000')) {
      fill(colors[colorIndex % colors.length]);
      noStroke();
      // Draw a tilted quadrilateral for the black bar
      quad(x, 0, x + stripeWidth, 0, x + stripeWidth * (10 + tiltFactor), height, x + stripeWidth * tiltFactor, height);
    } else {
      // Draw a regular rectangle for other colors
      fill(colors[colorIndex % colors.length]);
      noStroke();
      rect(x, 0, stripeWidth, height);
    }
    // Increase the index to use the next color
    colorIndex++;
  }
}
