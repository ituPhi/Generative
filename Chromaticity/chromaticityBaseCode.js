// No tilt Version Juan Iturbe

let colors;
let stripeWidth;
let tiltIncrement;
let margin;

function setup() {
  let palette = createPalette("e63946-f1faee-a8dadc-457b9d-1d3557");
  palette.sortByBrightness();
  //palette.reverse();
  //palette.sortByLightness();
  // palette.reverse();
  //palette.sortBySaturation();
  //palette.reverse();
  // palette.shuffle();

  // Calculate the canvas size while maintaining a 4:5 aspect ratio
  let widthR = 1;
  let heightR = 1;
  let dimensions = canvasRatio(widthR, heightR);
  createCanvas(dimensions.canvasWidth, dimensions.canvasHeight);
  const tiltScale = 12;
  const modulo = 3.9;

  stripeWidth = width / 900;
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

  background(palette.get(1));

  let colorIndex = 0; // Start with the first color

  for (let x = margin; x < width - margin; x += stripeWidth) {
    let currentColor = colors[colorIndex % colors.length];
    let isBlack = red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0;

    let currentTilt = isBlack ? 0 : tiltIncrement * ((x / stripeWidth) % modulo);
    let endX = x + stripeWidth * 4;
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
  addNoise(10);
}

function keyTyped() {
  if (key === "s") {
    saveCanvas("Chromaticity" + day() + hour() + minute(), "png");
  }
  // uncomment to prevent any default behavior
  // return false;
}
