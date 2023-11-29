function setup() {
  createCanvas(800, 800);
  noLoop();
  pixelDensity(1);

  noiseDetail(100, 0.6);
}

function draw() {
  background(200);
  let scalar = 0.02;
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Calculating noise value at each pixel
      let noiseVal = noise(x * scalar, y * scalar);
      let bright = map(noiseVal, 0, 1, 0, 255);

      // Setting pixel colors based on noise value
      let index = (x + y * width) * 4;
      pixels[index + 0] = bright; // Red
      pixels[index + 1] = bright; // Green
      pixels[index + 2] = bright; // Blue
      pixels[index + 3] = 255; // Alpha
    }
  }

  updatePixels();
}
