let colors;
let tiltIncrement; // The amount by which the tilt increases per stripe
let margin = 175; // Margin size

function setup() {
  let palette = createPalette('333745-e63462-fe5f55-c7efcf-eef5db');
  palette = palette.shuffle();

  createCanvas(800, 800);

  colors = [
    color(palette.get(1)),
    color(palette.get(3)),
    color(palette.get(4)),
    color(palette.get(2)),
    color(palette.get(3)),
    color(palette.get(1)),
    color('#000000'),
    color('#000000'),
  ];

  tiltIncrement = 36; // Change this to adjust the skew effect

  background(palette.get(4));
  
  let colorIndex = 0; // Start with the first color
  let x = margin; // Initial x position

  while (x < width - margin) {
    // Calculate a random width for each stripe
    let currentStripeWidth = random(1, 14); // Change 20 and 100 to your desired min and max widths

    let currentColor = colors[colorIndex % colors.length];
    let isBlack = (red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0);

    let currentTilt = isBlack ? 0 : tiltIncrement * (x  / currentStripeWidth % 2);
    let endX = x + currentStripeWidth;
    let endXTilted = endX + currentTilt;

    fill(currentColor);
    noStroke();

    if (isBlack) {
      rect(x, margin, min(currentStripeWidth, width - margin - x), height - 2 * margin);
    } else {
      quad(x, margin, 
           min(endX, width - margin), margin, 
           min(endXTilted, width - margin), height - margin, 
           min(x + currentTilt, width - margin), height - margin);
    }

    x += currentStripeWidth / 4; // Increment x by the current stripe's width
    colorIndex++;
  }

  addNoise(10);
}

// Assuming createPalette and addNoise are functions you've defined elsewhere
