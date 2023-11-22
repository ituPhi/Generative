function addPerlinNoise(intensity, noiseScale) {
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let noiseVal = noise(x * noiseScale, y * noiseScale);

      let adjustment = map(noiseVal, 0, 1, -intensity, intensity);

      pixels[index] = pixels[index] + adjustment; // Red
      pixels[index + 1] = pixels[index + 1] + adjustment; // Green
      pixels[index + 2] = pixels[index + 2] + adjustment; // Blue
      // Alpha (index + 3) is left unchanged
    }
  }
  updatePixels();
}
