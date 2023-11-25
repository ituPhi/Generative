function canvasRatio(widthR, heightR) {
  let canvasWidth, canvasHeight;
  if (windowWidth / windowHeight > widthR / heightR) {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * (widthR / heightR);
  } else {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth * (heightR / widthR);
  }
  return { canvasWidth, canvasHeight };
}
