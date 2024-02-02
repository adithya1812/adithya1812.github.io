let allowed = 80;
let tot = 0;
let paintapp;
let typeracer;
function preload() {
  paintapp = createA(
    "adithya1812.github.io/p5js-paint-app",
    "p5js-paint-app"
  );
  typeracer = createA(
    "adithya1812.github.io/p5js-typeracer",
    "p5js-typeracer"
  );
  survey = createA(
    "adithya1812.github.io/adithya-survey-form",
    "adithya-survey-form"
  );
}
class particles {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.pos = createVector(x, y);
    this.size = size;
    this.flag = true;
    this.ran = random(2, -2);
    tot++;
  }

  display() {
    fill(255);
    noStroke();
    if (this.flag) {
      circle(this.x, this.y, this.size);
    }
  }

  move() {
    this.x += ((velo.x + this.ran) * this.size) / 100;
    this.y += ((velo.y + this.ran) * this.size) / 100;
  }

  update() {
    if (this.flag) {
      if (
        this.x < 0 - 50 ||
        this.x > width + 50 ||
        this.y < 0 - 50 ||
        this.y > height + 50
      ) {
        tot--;
        this.flag = false;
        if (par.length > allowed * 5) {
          par.shift();
        }
      }
    } else {
      if (this.x >= 0 && this.y >= 0 && this.x <= width && this.y <= height) {
        tot++;
        this.flag = true;
      }
    }
  }
}

let par = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < allowed; i++) {
    par.push(new particles(random(0, width), random(0, height), random(1, 10)));
  }
}
let VX, VY;

function draw() {
  background("black");
  fill(0);
  rect(0, 0, width, 10);
  rect(0, 0, 10, height);
  //console.log(par.length);
  //console.log(tot);
  velo = createVector(-1 * (mouseX - width / 2), -1 * (mouseY - height / 2));
  for (let i = 0; i < par.length; i++) {
    par[i].display();
    par[i].move();
    par[i].update();
  }
  if (tot <= allowed) {
    par.push(
      new particles(
        random(width, 0),
        (mouseY >= height / 2) * (height + 100),
        random(1, 10)
      )
    );
    par.push(
      new particles(
        (mouseX > width / 2) * (width + 100),
        random(height, 0),
        random(1, 10)
      )
    );
  }
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
}
