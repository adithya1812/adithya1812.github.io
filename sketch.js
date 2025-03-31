let paintapp;
let typeracer;
let minesweeper;
let wallpaperApp;
let fatSim;
let vacuum;
let fallingSim;
let stars = [];
let scrollSpeedX, scrollSpeedY, scrollSpeed;
let mouseSpeedX, mouseSpeedY;
let scrolledMillis = 0;
let starfieldMove = false;
let starfieldArrow = false;
let starfieldForward = true;
let ir = 0.5;
let keyAlrPressed;

function preload() {
  paintapp = createA(
    "p5js-paint-app",
    "adithya1812.github.io/p5js-paint-app/"
  );
  typeracer = createA(
    "p5js-typeracer",
    "adithya1812.github.io/p5js-typeracer/"
  );
  survey = createA(
    "adithya-survey-form",
    "adithya1812.github.io/adithya-survey-form/"
  );
  minesweeper = createA(
    "minesweeper",
    "adithya1812.github.io/minesweeper/"
  );
  wallpaperApp = createA(
    "wallpaper-app",
    "adithya1812.github.io/wallpaper-app/"
  );
  fatSim = createA(
    "fat-interactive-simulations",
    "adithya1812.github.io/fat-interactive-simulations/"
  );
  vacuum = createA(
    "robot-vacuum",
    "adithya1812.github.io/robot-vacuum/"
  )
  fallingSim = createA(
    "falling-elements-simulator",
    "adithya1812.github.io/falling-elements-simulator/"
  )
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < round(0.001 * windowWidth * windowHeight); i++) {
    stars[i] = new Star();
  }
  spaceMode = round(random(1, 2));
}

function draw() {
  background(0);
  push();
  if (spaceMode == 2) {
    translate(
      map(mouseX, 0, width, 0.5 + ir, 0.5 - ir) * width,
      map(mouseY, 0, height, 0.5 + ir, 0.5 - ir) * height
    );
  } else {
    translate(width / 2, height / 2);
  }
  scrollSpeedX = map(mouseX, 0, width, 0, 35);
  scrollSpeedY = map(mouseY, 0, height, 0, 35);
  scrollSpeed = sqrt(scrollSpeedX * scrollSpeedX + scrollSpeedY * scrollSpeedY);
  mouseSpeedX = map(width / 2 - mouseX, 0, width, 0, 15);
  mouseSpeedY = map(height / 2 - mouseY, 0, height, 0, 15);
  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    if (starfieldMove == true || starfieldArrow == true || spaceMode == 2) {
      stars[i].updateZ();
    } else if (spaceMode == 1) {
      stars[i].updateXY();
    }
  }
  pop();
  if (starfieldMove == true && millis() - scrolledMillis >= 250) {
    starfieldMove = false;
  }
  if (scrolledMillis == 0 && !keyAlrPressed) {
    textAlign(CENTER);
    noStroke();
    textSize(20);
    fill("white");
    text(
      `Move, and scroll your mouse, or press the up and down arrows for a cool effect!`,
      10,
      height / 2 + 100,
      width - 10
    );
  }
  noStroke();
  fill("#E1E0DD");
  textSize(48);
  textAlign(CENTER);
  textFont("Maven Pro");
  text("Adithya's website", width / 2, 50);
  textAlign(LEFT);
  textSize(15);
  textFont("Roboto Mono");
  fill("#778DA9");
  text("My projects:", 25, 150);
  text("Paint app - ", 25, 175);
  paintapp.position(135, 160);
  paintapp.style("color", "#E1E0DD");
  text("Typeracer - ", 25, 200);
  typeracer.position(135, 185);
  typeracer.style("color", "#E1E0DD");
  text("Survey form - ", 25, 225);
  survey.position(150, 210);
  survey.style("color", "#E1E0DD");
  text("Minesweeper -", 25, 250);
  minesweeper.position(150, 235);
  minesweeper.style("color", "#E1E0DD");
  text("Wallpaper App -", 25, 275);
  wallpaperApp.position(170, 260);
  wallpaperApp.style("color", "#E1E0DD");
  text("Fat Interactive Simulations -", 25, 300);
  fatSim.position(300, 285);
  fatSim.style("color", "#E1E0DD");
  text("Robot Vacuum Simulation -", 25, 325)
  vacuum.position(260, 310)
  vacuum.style("color", "#E1E0DD")
  text("Falling Elements Simulator -", 25, 350)
  fallingSim.position(290, 335)
  fallingSim.style("color", "#E1E0DD")
}

function mouseWheel(event) {
  scrolledMillis = millis();
  starfieldMove = true;
  if (event.delta < 0) {
    starfieldForward = true;
  } else if (event.delta > 0) {
    starfieldForward = false;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
    starfieldArrow = true;
    keyAlrPressed = true;
    if (keyCode == UP_ARROW) {
      starfieldForward = true;
    } else {
      starfieldForward = false;
    }
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
    starfieldArrow = false;
  }
}

class Star {
  constructor() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);
    this.pz = this.z;
    this.size = random(5, 20);
  }
  updateZ() {
    if (
      (starfieldForward == true && spaceMode != 2) ||
      (starfieldForward == true && starfieldMove == true)
    ) {
      this.z -= scrollSpeed;
    } else if (
      (starfieldForward == false && spaceMode != 2) ||
      (starfieldForward == false && starfieldMove == true)
    ) {
      this.z += scrollSpeed;
    } else if (spaceMode == 2) {
      this.z -= 3;
    }
    if (this.z < 0) {
      this.z = width;
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.pz = this.z;
    }
    if (this.z > width) {
      this.z = 1;
      this.x = random(-width / 2, width / 2);
      this.y = random(-height / 2, height / 2);
      this.pz = this.z;
    }
  }

  updateXY() {
    this.x = this.x + mouseSpeedX;
    this.y = this.y + mouseSpeedY;
    if (this.x > width / 2) {
      this.x = -width / 2;
      this.y = random(-height / 2, height / 2);
      this.z = random(width);
    } else if (this.x < -width / 2) {
      this.x = width / 2;
      this.y = random(-height / 2, height / 2);
      this.z = random(width);
    } else if (this.y < -height / 2) {
      this.x = random(-width / 2, width / 2);
      this.y = height / 2;
      this.z = random(width);
    } else if (this.y > height / 2) {
      this.x = random(-width / 2, width / 2);
      this.y = -height / 2;
      this.z = random(width);
    }
  }

  show() {
    fill(255);
    noStroke();
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, this.size, 0);
    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    if (starfieldMove == true || starfieldArrow == true) {
      stroke(255);
      strokeWeight(r);
      line(px, py, sx, sy);
    } else {
      fill(255);
      circle(sx, sy, r);
    }
  }
}
