let allowed = 80;
let tot = 0;
let paintapp;
let typeracer;
let minesweeper;
let wallpaperApp;
let stars = [];
let speedX, speedY, finalSpeed;

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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < windowWidth; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  speedX = map(mouseX, 0, width, 0, 35);
  speedY = map(mouseY, 0, height, 0, 35);
  finalSpeed = sqrt(speedX * speedX + speedY * speedY);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  noStroke();
  fill("#E1E0DD");
  textSize(48);
  textAlign(CENTER);
  textFont("Maven Pro");
  text("Adithya's website", 0, 50 - height / 2);
  textAlign(LEFT);
  textSize(15);
  textFont("Roboto Mono");
  fill("#778DA9");
  text("My projects:", 25 - width / 2, 150 - height / 2);
  text("Paint app - ", 25 - width / 2, 175 - height / 2);
  paintapp.position(135, 160);
  paintapp.style("color", "#E1E0DD");
  text("Typeracer - ", 25 - width / 2, 200 - height / 2);
  typeracer.position(135, 185);
  typeracer.style("color", "#E1E0DD");
  text("Survey form - ", 25 - width / 2, 225 - height / 2);
  survey.position(150, 210);
  survey.style("color", "#E1E0DD");
  text("Minesweeper -", 25 - width / 2, 250 - height / 2);
  minesweeper.position(150, 235);
  minesweeper.style("color", "#E1E0DD");
  text("Wallpaper App -", 25 - width / 2, 275 - height / 2);
  wallpaperApp.position(170, 260);
  wallpaperApp.style("color", "#E1E0DD");
}

class Star {
  constructor() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
    this.size = random(5, 20);
  }
  update() {
    this.z = this.z - finalSpeed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, this.size, 0);
    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);
    this.pz = this.z;
    stroke(255);
    strokeWeight(r);
    line(px, py, sx, sy);
  }
}
