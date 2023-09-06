let paintapp 
let typeracer
function preload(){
  paintapp = createA('/p5js-paint-app','adithya1812.github.io/p5js-paint-app')
  typeracer = createA('/p5js-typeracer','adithya1812.github.io/p5js-typeracer')
  survey = createA('/adithya-survey-form','adithya1812.github.io/adithya-survey-form')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#1b263b');
  fill('#E1E0DD');
  textSize(48);
  textAlign(CENTER);
  textFont('Maven Pro');
  text("Adithya's website",width/2,50);
  textAlign(LEFT);
  textSize(15);
  textFont('Roboto Mono');
  fill('#778DA9');
  text('My projects:',25,150);
  text('Paint app - ',25,175);
  paintapp.position(135,160);
  paintapp.style('color','#E1E0DD');
  text('Typeracer - ',25,200);
  typeracer.position(135,185);
  typeracer.style('color','#E1E0DD');
  text('Survey form - ',25,225)
  survey.position(150,210)
  survey.style('color','#E1E0DD')
}
