var angle = 0;
var slider;

function setup() {
  createCanvas(600, 600);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  stroke(125,242,129);
  translate(0, -len);
  if (len > 4) {
    push();
   // pop()
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
  rotate(-angle);
  branch(len * 0.67)
    pop();
  }
}