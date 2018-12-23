// declaring the variable
var circleX = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // seting the background color
  background(250, 250, 100);
  
  //adding color to the ellipse
  fill(250, 200, 200);
  
  //creating the ellipse
  ellipse(circleX, 200, 80, 80);
  
  //moving the circle
  circleX = circleX + 1;
  
  
  
  
}