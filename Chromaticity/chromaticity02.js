let colors;
let stripeWidth;
let tiltIncrement; // The amount by which the tilt increases per stripe
let margin = 175; // Margin size

function setup() {
  
  //let palette = createPalette('fce762-fffded-ffb17a-4f4789-201335');
  let palette = createPalette('333745-e63462-fe5f55-c7efcf-eef5db');
  //let palette = createPalette("00f556-ff2e38-ffab0f-00bfe0-ffee8f");
  palette = palette.shuffle();
  //palette.sortByLightness();
  //palette.sortByBrightness();

  createCanvas(800, 800);

  // Define your colors - the last color is black for the tilted bars
  colors = [
    color(palette.get(1)),
    color(palette.get(3)),
    color(palette.get(4)),
    color(palette.get(2)),
    color(palette.get(3)),
    color(palette.get(1)),
    color('#000000'),
    color('#000000'),
    //color('#000000'),
   // color('#000000')
  ];
  stripeWidth = width/random(100,600); // The width of each stripe
  tiltIncrement = random(12,128); // Change this to adjust the skew effect

  background(palette.get(4));
  
  let colorIndex = 0; // Start with the first color

  for (let x = margin; x < width - margin; x += stripeWidth) {
    let currentColor = colors[colorIndex % colors.length];
    let isBlack = (red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0);

    let currentTilt = isBlack ? 0 : tiltIncrement * (x  / stripeWidth % 2);
    let endX = x + stripeWidth;
    let endXTilted = endX + currentTilt;

    fill(currentColor);
    noStroke();
  
    if (isBlack) {

      // Draw the black bars without tilt
      rect(x , margin, min(stripeWidth, width - margin - x ), height - 2 * margin);
      
    } else {
      // Draw other bars with potential tilt
      
      quad(x, margin, 
           min(endX , width - margin), margin, 
           min(endXTilted, width - margin), height - margin, 
           min( x + currentTilt, width - margin), height - margin);
    }
    colorIndex++;
    
  }

addNoise(10);
}
/*
function mousePressed() {
  saveCanvas("cinetic2", "jpeg");
}
*/

// Assuming createPalette and addPerlinNoise are functions you've defined elsewhere
