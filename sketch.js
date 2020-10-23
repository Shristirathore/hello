function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(255,0,0);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
