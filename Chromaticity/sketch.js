let colors;
let stripeWidth;
let tiltIncrement; // The amount by which the tilt increases per stripe

function setup() {
  createCanvas(600, 600);
  // Define your colors - the last color is black for the tilted bars
  colors = [color('#FFEB3B'), color('#03A9F4'), color('#008000'), color('#0000ff'), color('#000000'),color('#000000')];
  stripeWidth = 3; // The width of each stripe
  tiltIncrement = 10; // Change this to adjust the skew effect
  noLoop();
}

function draw() {
  background(255);
  let colorIndex = 0; // Start with the first color

for (let x = 0; x < width; x += stripeWidth ) {
    let currentTilt = tiltIncrement * (x / stripeWidth %3);

    let currentColor = colors[colorIndex % colors.length];

    // Extract RGBA values of the current color and the black color
    let r1 = red(currentColor), g1 = green(currentColor), b1 = blue(currentColor), a1 = alpha(currentColor);
    let r2 = red(color('#000000')), g2 = green(color('#000000')), b2 = blue(color('#000000')), a2 = alpha(color('#000000'));

    // Compare RGBA values to determine if the color is black
    if (r1 === r2 && g1 === g2 && b1 === b2 && a1 === a2) {
      fill(currentColor);
      noStroke();
      quad(x, 0, x + stripeWidth*4, 0, x + stripeWidth + currentTilt, height, x + currentTilt, height);
    } else {
      fill(currentColor);
      noStroke();
      rect(x, 0, stripeWidth/2 , height);
    }

    colorIndex++;
  }

  //... other code ...
}
