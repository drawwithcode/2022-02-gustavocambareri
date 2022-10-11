//init array of bubbles
let Bubbles = [];
//init background color
let coloreSfondo = 255;
//init and declare  boolean for click function
let isClicked = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  //loop for creating bubble array, so I don't have to create 50 stamps of bubbles
  for (let i = 0; i < 50; i++) {
    Bubbles.push(new Bubble(width / 2, height / 2, 100));
  }
}

function draw() {
  background(coloreSfondo);
  //loop for drawing the bubbles with the methods I created
  for (let i = 0; i < Bubbles.length; i++) {
    Bubbles[i].move();
    Bubbles[i].randomize();
    Bubbles[i].show();
  }

  console.log(isClicked);
}

class Bubble {
  constructor(xpos, ypos, radius) {
    this.x = xpos;
    this.y = ypos;
    this.r = radius;
  }
  //randomizes x and y of bubbles
  move() {
    this.x += random(-30, 30);
    this.y += random(-30, 30);
  }
  //randomizes the fill
  randomize() {
    let a = random(0, 255);
    let b = random(0, 255);
    let c = random(0, 255);
    let randomColor = color(a, b, c);
    this.color = randomColor;
    fill(this.color);
  }
  //draws bubbles
  show() {
    push();
    noStroke();
    fill(this.color);
    translate(this.x, this.y);
    circle(0, 0, this.r);
    pop();
  }
}
//color fades from white to black when window is resized
function windowResized() {
  coloreSfondo -= 2;
}
//TIME STOPS WHEN YOU CLICK. TIME RUNS WHEN U CLICK AGAIN
function mouseClicked() {
  // coloreSfondo = 255;
  console.log("ciao");
  if (isClicked == false) {
    isClicked = true;
    noLoop();
  } else if (isClicked == true) {
    isClicked = false;
    loop();
  }
}
