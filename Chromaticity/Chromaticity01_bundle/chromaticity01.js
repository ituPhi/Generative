let colors;
let stripeWidth;
let tiltIncrement; // The amount by which the tilt increases per stripe
let margin; // Margin size

function setup() {
  //let palette = createPalette('fce762-fffded-ffb17a-4f4789-201335');
  //let palette = createPalette('333745-e63462-fe5f55-c7efcf-eef5db');
  let palette = createPalette("00f556-ff2e38-ffab0f-00bfe0-ffee8f");
  //palette = palette.shuffle();

// Calculate the canvas size while maintaining a 4:5 aspect ratio
let widthR = 1;
let heightR = 1; 
let dimensions = canvasRatio(widthR,heightR);
createCanvas(dimensions.canvasWidth, dimensions.canvasHeight);
const tiltScale = 12;
const modulo = 2;


stripeWidth = width / 900;
margin = width * 0.04;
tiltIncrement = (width / 900) * tiltScale;


  
  // Define your colors - the last color is black for the tilted bars
  colors = [
      color(palette.get(1)),
    color(palette.get(3)),
    color(palette.get(4)),
    color(palette.get(2)),
    color(palette.get(3)),
    color(palette.get(1)),
    color('#000000'),
    color('#000000')
  ];


  background(palette.get(4));
  
  
  let colorIndex = 0; // Start with the first color

  for (let x = margin; x < width - margin; x += stripeWidth) {
    let currentColor = colors[colorIndex % colors.length];
    let isBlack = (red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0);

    let currentTilt = isBlack ? 0 : tiltIncrement * ( (width/x) / stripeWidth % modulo);
    let endX = x + (stripeWidth + 2) ;
    let endXTilted = endX + currentTilt ;

    fill(currentColor);
    noStroke();
   
    if (isBlack) {

      // Draw the black bars without tilt
      rect(x  , margin, min(stripeWidth, width - margin - x ), height - 2 * margin ) ;
      
    } else {
      // Draw other bars with potential tilt
      quad(x , margin, 
           min(endX, width - margin), margin, 
           min(endXTilted, width - margin), height - margin, 
           min(x + currentTilt, width - margin), height - margin);
    }
    colorIndex++;
  }
  addNoise(10);


}


function keyTyped() {
  if (key === 's') {
      saveCanvas("Chromaticity02", "png");
  } 
  // uncomment to prevent any default behavior
  // return false;
}



/*

let colors;
let stripeWidth;
let tiltIncrement; // The amount by which the tilt increases per stripe
let margin; // Margin size
let gradationFactor = 10; // Gradation factor for stripe width

function setup() {
  let palette = createPalette("00f556-ff2e38-ffab0f-00bfe0-ffee8f");
  let widthR = 1;
  let heightR = 1; 
  let dimensions = canvasRatio(widthR,heightR);
  createCanvas(dimensions.canvasWidth, dimensions.canvasHeight);
  const tiltScale = 59;

  margin = width * 0.04;
  tiltIncrement = (width / 1000) * tiltScale;

  colors = [
    color(palette.get(1)),
    color(palette.get(3)),
    color(palette.get(4)),
    color(palette.get(2)),
    color(palette.get(3)),
    color(palette.get(1)),
    color('#000000'),
    color('#000000')
  ];

  background(palette.get(4));
  
  let colorIndex = 4; // Start with the first color

  for (let x = margin; x < width - margin; x += stripeWidth) {
    let currentColor = colors[colorIndex % colors.length];
    let isBlack = (red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0);

    let currentTilt = isBlack ? 0 : tiltIncrement; 
    stripeWidth = (width /1200) * (1 + x * gradationFactor / width);

    let endX = x + stripeWidth;
    let endXTilted = endX + currentTilt;

    fill(currentColor);
    noStroke();
    if (isBlack) {
      rect(x, margin, min(stripeWidth, width - margin - x), height - 2 * margin);
      
    } else {
      quad(x, margin, 
           min(endX, width - margin ) + (width/100), margin, 
           min(endXTilted, width - margin), height - margin, 
           min(x + currentTilt, width - margin), height - margin); 
           


           
    }
    colorIndex++;
  }
  addNoise(10);






}

function keyTyped() {
  if (key === 's') {
    saveCanvas("Chromaticity02", "png");
  }
}

// ... Additional functions like createPalette, canvasRatio, addNoise ...


*/