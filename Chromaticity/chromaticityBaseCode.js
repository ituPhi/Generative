// No tilt Version Juan Iturbe

let colors;
let stripeWidth;
let tiltIncrement;
let margin;
let colorStr = "ffff82-f5f7dc-b5d99c-0f0326-e65f5c";

function setup() {
  let palette = createPalette(colorStr);
  //palette.sortByBrightness();
  //palette.reverse();
  //palette.sortByLightness();
  //palette.reverse();
  palette.sortBySaturation();
  //palette.reverse();
  // palette.shuffle();

  // Calculate the canvas size while maintaining a 4:5 aspect ratio
  let widthR = 1;
  let heightR = 1;
  let dimensions = canvasRatio(widthR, heightR);
  createCanvas(dimensions.canvasWidth, dimensions.canvasHeight);
  const tiltScale = 10;
  const modulo = 4.1;

  stripeWidth = width / 700;
  margin = width * 0.04;
  tiltIncrement = (width / 1900) * tiltScale;

  colors = [
    color(palette.get(1)),
    color(palette.get(3)),
    color(palette.get(4)),
    color(palette.get(2)),
    color(palette.get(3)),
    color(palette.get(1)),
    color("#000000"),
    color("#000000"),
  ];

  background(palette.get(3));

  let colorIndex = 0; // Start with the first color

  for (let x = margin; x < width - margin; x += stripeWidth) {
    let currentColor = colors[colorIndex % colors.length];
    let isBlack = red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0;

    let currentTilt = isBlack ? 0 : tiltIncrement * ((x / stripeWidth) % modulo);
    let endX = x + stripeWidth * 3;
    let endXTilted = endX + currentTilt;

    fill(currentColor);
    noStroke();

    if (isBlack) {
      // Draw the black bars without tilt
      rect(x, margin, min(stripeWidth, width - margin - x), height - 2 * margin);
    } else {
      // Draw other bars with potential tilt
      quad(
        x,
        margin,
        min(endX, width - margin),
        margin,
        min(endXTilted, width - margin),
        height - margin,
        min(x + currentTilt, width - margin),
        height - margin
      );
    }
    colorIndex++;
  }
  fill(palette.get(0));

  blendMode(DIFFERENCE);

  for (let y = margin; y < height - margin; y += (stripeWidth * height) / 200) {
    let barHeight = min(height / 2000, height - margin - y); // Calculate the maximum allowed height for each bar
    rect(margin + stripeWidth * 2, y, width - margin * 2, barHeight);
  }

  addNoise(10);
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("Chromaticity" + day() + hour() + minute(), "png");
  }
  // uncomment to prevent any default behavior
  // return false;
}
