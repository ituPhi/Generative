var pts = [];
var mult = 0.008;
var velocities = []; // {{ edit_1 }}
colorMode(HSB)
function setup() {
createCanvas(windowWidth,windowHeight);
background(30);
noiseDetail(1,1)
rectMode(CENTER)
var density = 42;
var space = width/density;

 
for (let x = 0; x < width; x+=space) {
  for (let y = 0; y < height; y+=space) {
    var pos = createVector(x,y);
    pts.push(pos);
    velocities.push(createVector(0, 0)); // {{ edit_2 }}
    
  }
  
}

}

function draw() {
  noStroke();
  fill(255)

  for (let i = 0; i < pts.length; i++) {
    var angle = map(noise(pts[i].x * mult, pts[i].y * mult), 0, 1, 0, TWO_PI);
    var force = createVector(cos(angle), sin(angle));
    velocities[i].add(force);
    velocities[i].limit(angle*2); // Limit the speed for smoother movement {{ edit_3 }}
    pts[i].add(velocities[i]); // Update position based on velocity {{ edit_4 }}
    fill(map(angle, 0, TWO_PI, 100, 450), 255); // Set fill to greyscale based on angle
    stroke(30)
    ellipse(pts[i].x,pts[i].y,map(angle,0,100,0,2000))
    //rect(pts[i].x,pts[i].y,map(angle,0,100,25,900*(0.1)),100)
    rotate(10,0)
  }
}


