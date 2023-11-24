// No tilt Version Juan Iturbe


let colors;
let stripeWidth;
let tiltIncrement;
let margin;

function setup() {
 
 // let palette = createPalette('e9ce2c-e5f993-69a197-bf211e-f9dc5c');

  let palette = createPalette('e9ce2c-e5f993-69a197-bf211e-f9dc5c');

  // Calculate the canvas size while maintaining a 4:5 aspect ratio
  let widthR = 1;
  let heightR = 1; 
  let dimensions = canvasRatio(widthR,heightR);
  createCanvas(dimensions.canvasWidth, dimensions.canvasHeight);
  const tiltScale = 24;
  const modulo = 8;


  stripeWidth = width / 1200  ;
  margin = width * 0.04;
  tiltIncrement = (width / 800) * tiltScale;


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
  

  background(palette.get(1));
  
  let colorIndex = 0; // Start with the first color

  for (let x = margin; x < width - margin; x += stripeWidth) {
    let currentColor = colors[colorIndex % colors.length];
    let isBlack = (red(currentColor) === 0 && green(currentColor) === 0 && blue(currentColor) === 0);

    let currentTilt = isBlack ? 0 : tiltIncrement * ((x / 2) / stripeWidth % modulo );
    let endX = x + stripeWidth * x ;
    let endXTilted = endX + currentTilt;

    fill(currentColor);
    noStroke();
   
    if (isBlack) {

      // Draw the black bars without tilt
      rect(x , margin, min(stripeWidth, width - margin - x ), height - 2 * margin);
      
    } else {
      // Draw other bars with potential tilt
      quad(x , margin, 
           min(endX, width - margin) , margin, 
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