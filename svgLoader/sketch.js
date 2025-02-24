var mySvg; 

function preload(){
	mySvg = loadImage("./out4.svg");

}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(30);
  imageMode(CENTER);
  image(mySvg, 400 ,400);
}