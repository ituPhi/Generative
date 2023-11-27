function addNoise(intensity) {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let adjustment = random(-intensity, intensity);
    pixels[i] = pixels[i] + adjustment; // Red
    pixels[i + 1] = pixels[i + 1] + adjustment; // Green
    pixels[i + 2] = pixels[i + 2] + adjustment; // Blue
    // Alpha (i + 3) is left unchanged
  }
  updatePixels();
}
