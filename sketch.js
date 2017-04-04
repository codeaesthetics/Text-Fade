var a = 0;
var b = 0;
var contents = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(60);

}

function draw() {
  a = (a + .6); //movement
  b = (b + .7); //color
  var grow = (windowHeight * .9 - a);
  var pointerx = map(mouseX,0,windowWidth,0,256);
  var pointery = map(mouseY,0,windowWidth,0,256);


  textSize(300);
  fill(b, pointery, pointerx);
  textAlign(LEFT);
  textSize(214);
  text(contents, grow, grow);
  
}

function keyTyped() {
  background(255);
  contents += key;
  a=0;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(DELETE) {

  clear();
  b=0;
  
}