let a, b, c, d;
function setup() {
  let $ = createPalette("e63946-f1faee-a8dadc-457b9d-1d3557");
  $.sortByBrightness();
  let t = canvasRatio(1, 1);
  createCanvas(t.canvasWidth, t.canvasHeight),
    (b = width / 900),
    (d = 0.04 * width),
    (c = (width / 1900) * 12),
    (a = [color($.get(1)), color($.get(3)), color($.get(4)), color($.get(2)), color($.get(3)), color($.get(1)), color("#000000"), color("#000000")]),
    background($.get(1));
  let e = 0;
  for (let g = d; g < width - d; g += b) {
    let _ = a[e % a.length],
      n = 0 === red(_) && 0 === green(_) && 0 === blue(_),
      i = n ? 0 : c * ((g / b) % 3.9),
      l = g + 4 * b,
      s = l + i;
    fill(_),
      noStroke(),
      n
        ? rect(g, d, min(b, width - d - g), height - 2 * d)
        : quad(g, d, min(l, width - d), d, min(s, width - d), height - d, min(g + i, width - d), height - d),
      e++;
  }
  addNoise(10);
}
function keyTyped() {
  "s" === key && saveCanvas("Chromaticity" + day() + hour() + minute(), "png");
}
