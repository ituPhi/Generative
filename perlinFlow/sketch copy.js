let cols, rows;
let noiseScale = 0.1;
let agents = [];
let flowField = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width / 20); // Number of columns for the flow field
  rows = floor(height / 20); // Number of rows for the flow field
  noiseDetail(0.001, 0.5); // Noise detail for smoother transitions
  flowField = createFlowField();

  // Create multiple agents
  for (let i = 0; i < 40000; i++) {
    agents.push(new Agent(random(width), random(height)));
  }

  background(255);
}

function draw() {
  // Move and display each agent
  for (let agent of agents) {
    agent.follow(flowField);
    agent.update();
    agent.show();
  }
}

// Function to create a flow field using Perlin noise
function createFlowField() {
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

// Agent class for pathfinding
class Agent {
  constructor(x, y) {
    this.pos = createVector(x, y); // Starting position
    this.vel = createVector(0, 0); // Initial velocity
    this.acc = createVector(0, 0); // Initial acceleration
    this.maxSpeed = 2; // Maximum speed
    this.prevPos = this.pos.copy(); // Previous position for tracing paths
  }

  // Make the agent follow the flow field
  follow(flowField) {
    let x = floor(this.pos.x / 20);
    let y = floor(this.pos.y / 20);
    let force;
    
    // Ensure the position is within the flow field bounds
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      force = flowField[x][y];
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
  }

  // Draw the agent's path
  show() {
    stroke(0, 10); // Light stroke for overlapping paths
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.prevPos.set(this.pos); // Update previous position
  }
}
