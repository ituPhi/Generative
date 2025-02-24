let cols, rows;
let noiseScale = 100;
let agents = [];
let flowField = [];
let flowField2 = []; // Declare flowField2 globally



function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / 5); // Number of columns for the flow field
  rows = floor(height / 5); // Number of rows for the flow field
  noiseDetail(0.1, 1); // Noise detail for smoother transitions
  flowField = createFlowField();
  flowField2 = createFlowField2(); // Generate flowField2 once

  // Create multiple agents
  for (let i = 0; i < 18000; i++) {
    agents.push(new Agent(random(width), random(height)));
  }

  background(240);
 
}

function draw() {
  // Move and display each agent
  for (let agent of agents) {
    agent.follow(flowField);
    agent.update();
    agent.show();
  }
}

function createFlowField2() {
  let field = [];
  for (let x = 0; x < cols; x++) {
    field[x] = [];
    for (let y = 0; y < rows; y++) {
      let angle = noise(x * noiseScale, y * noiseScale) * TWO_PI * 2; // Angle influenced by noise
      field[x][y] = p5.Vector.fromAngle(angle); // Store the direction as a vector
    }
  }
  return field;
}

// Function to create a flow field using Perlin noise
function createFlowField() {
  let field = [];
  let vortexPoints = [];

  // Generate random vortex points
  for (let i = 0; i < 9; i++) { // Adjust the number of vortex points as needed
    vortexPoints.push(createVector(random(width), random(height)));
  }

  for (let x = 0; x < cols; x++) {
    field[x] = [];
    for (let y = 0; y < rows; y++) {
      let pos = createVector(x * 5, y * 5);
      let direction = createVector(0, 0);

      // Calculate influence of each vortex point
      for (let vortex of vortexPoints) {
        let toVortex = p5.Vector.sub(vortex, pos);
        let distance = toVortex.mag();
        if (distance > 0) {
          toVortex.normalize();
          let perpendicular = createVector(-toVortex.y, toVortex.x); // Perpendicular vector
          direction.add(perpendicular.div(distance)); // Add influence inversely proportional to distance
        }
      }

      direction.normalize();
      field[x][y] = direction;
    }
  }
  return field;
}

// Agent class for pathfinding
class Agent {
  constructor(x, y) {
    this.pos = createVector(x, y); // Starting position
    this.vel = createVector(noise(x * noiseScale, y * noiseScale) * TWO_PI * 2, noise(x * noiseScale, y * noiseScale) * TWO_PI * 2); // Initial velocity
    this.acc = createVector(0, 0); // Initial acceleration
    this.maxSpeed = 10 // Maximum speed
    this.prevPos = this.pos.copy(); // Previous position for tracing paths
  }

  // Make the agent follow the flow field
  follow(flowField) {
    let x = floor(this.pos.x / 5);
    let y = floor(this.pos.y / 5);
    let force;
    
    // Ensure the position is within the flow field bounds
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      // Use the precomputed flowField2
      force = p5.Vector.add(flowField[x][y], flowField2[x][y]); // Properly add the two flow fields
      this.applyForce(force);
    }
  }

  // Apply a force to the agent's acceleration
  applyForce(force) {
    this.acc.add(force);
  }

  // Update the agent's position based on velocity and acceleration
  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0); // Reset acceleration to avoid continuous acceleration

    // Quantize the position to the nearest grid point
    this.pos.x = floor(this.pos.x / 20) * 20; // Adjust the quantization size as needed
    this.pos.y = floor(this.pos.y / 20) * 20; // Adjust the quantization size as needed
  }

  // Draw the agent's path with a wiggling effect
  show() {
/*     linearGradient(
      width/2-200, height/2-200, //Start point
      width/2+200, height/2+50, //End point
      color(250, 10, 100, 20), //Start color
      color(250, 20, 200, 10), //End color
    ); */

    stroke(10,10); // Light stroke for overlapping paths
    strokeWeight(1);
    
    
    // Add a small random offset to create a wiggling effect
    let wiggleX = random(-20, 20); // Random offset for x
    let wiggleY = random(-10, 1); // Random offset for y
    
    line(this.pos.x + wiggleX, this.pos.y + wiggleY, 
         this.prevPos.x + wiggleX, this.prevPos.y + wiggleY);
    
    this.prevPos.set(this.pos); // Update previous position
  }
}
function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  //drawingContext.fillStyle = gradient;
   drawingContext.strokeStyle = gradient;
}
