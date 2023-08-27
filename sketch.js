let ans
let result = ''
let pos = 0
let flag = false
let btn
let btn0
let btn1
let btn2
let btn3
let design
let nounURL = "https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json"
let total = 0
let timer = false
let endTime
let colour = '#E1E0DD'
let wordCount = 25
let instructions

function preload() {
	nounData = loadJSON(nounURL);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  landing()
  nouns = nounData.nouns
  btn0 = createButton('10 words')
  btn0.position (width/4, height - 250)
  btn0.mousePressed(word10)
  btn0.style('font-size', '30px')
  btn0.style('background-color', '#5E503F')
  btn0.style('color', '#EAE0D5')
  btn1 = createButton('25 words')
  btn1.position (width/4+200, height - 250)
  btn1.mousePressed(word25)
  btn1.style('font-size', '30px')
  btn1.style('background-color', '#5E503F')
  btn1.style('color', '#EAE0D5')
  btn2 = createButton('50 words')
  btn2.position (width/4+400, height - 250)
  btn2.mousePressed(word50)
  btn2.style('font-size', '30px')
  btn2.style('background-color', '#5E503F')
  btn2.style('color', '#EAE0D5')
  randomize();
}
function landing() {
  btn = createButton('Click to Start')
  btn.position (width/2.5 ,height - 200 )
  btn.mousePressed(toBegin)
  btn.style('font-size', '30px')
  btn.style('background-color', '#5E503F')
  btn.style('color', '#EAE0D5')
  fill('black')
}
function word10(){
  wordCount = 10
}
function word25(){
  wordCount = 25
}
function word50(){
  wordCount = 50
}
function randomize(){
      selectedNoun21 = nouns[int(random(nouns.length))]
  selectedNoun1 = nouns[int(random(nouns.length))]
  selectedNoun2 = nouns[int(random(nouns.length))]
  selectedNoun3 = nouns[int(random(nouns.length))]
  selectedNoun4 = nouns[int(random(nouns.length))]
  selectedNoun5 = nouns[int(random(nouns.length))]
  selectedNoun6 = nouns[int(random(nouns.length))]
  selectedNoun7 = nouns[int(random(nouns.length))]
  selectedNoun8 = nouns[int(random(nouns.length))]
  selectedNoun9 = nouns[int(random(nouns.length))]
  selectedNoun10 = nouns[int(random(nouns.length))]
  selectedNoun11 = nouns[int(random(nouns.length))]
  selectedNoun12 = nouns[int(random(nouns.length))]
  selectedNoun13 = nouns[int(random(nouns.length))]
  selectedNoun14 = nouns[int(random(nouns.length))]
  selectedNoun15 = nouns[int(random(nouns.length))]
  selectedNoun16 = nouns[int(random(nouns.length))]
  selectedNoun17 = nouns[int(random(nouns.length))]
  selectedNoun18 = nouns[int(random(nouns.length))]
  selectedNoun19 = nouns[int(random(nouns.length))]
  selectedNoun20 = nouns[int(random(nouns.length))]
  selectedNoun21 = nouns[int(random(nouns.length))]
  selectedNoun22 = nouns[int(random(nouns.length))]
  selectedNoun23 = nouns[int(random(nouns.length))]
  selectedNoun24 = nouns[int(random(nouns.length))]
  selectedNoun25 = nouns[int(random(nouns.length))]
  selectedNoun26 = nouns[int(random(nouns.length))]
  selectedNoun27 = nouns[int(random(nouns.length))]
  selectedNoun28 = nouns[int(random(nouns.length))]
  selectedNoun29 = nouns[int(random(nouns.length))]
  selectedNoun30 = nouns[int(random(nouns.length))]
  selectedNoun31 = nouns[int(random(nouns.length))]
  selectedNoun32 = nouns[int(random(nouns.length))]
  selectedNoun33 = nouns[int(random(nouns.length))]
  selectedNoun34 = nouns[int(random(nouns.length))]
  selectedNoun35 = nouns[int(random(nouns.length))]
  selectedNoun36 = nouns[int(random(nouns.length))]
  selectedNoun37 = nouns[int(random(nouns.length))]
  selectedNoun38 = nouns[int(random(nouns.length))]
  selectedNoun39 = nouns[int(random(nouns.length))]
  selectedNoun40 = nouns[int(random(nouns.length))]
  selectedNoun41 = nouns[int(random(nouns.length))]
  selectedNoun42 = nouns[int(random(nouns.length))]
  selectedNoun43 = nouns[int(random(nouns.length))]
  selectedNoun44 = nouns[int(random(nouns.length))]
  selectedNoun45 = nouns[int(random(nouns.length))]
  selectedNoun46 = nouns[int(random(nouns.length))]
  selectedNoun47 = nouns[int(random(nouns.length))]
  selectedNoun48 = nouns[int(random(nouns.length))]
  selectedNoun49 = nouns[int(random(nouns.length))]
  selectedNoun50 = nouns[int(random(nouns.length))]
}
function draw() {
  background('#1B263B');
  textFont("Maven Pro");
  textAlign(CENTER);
  textSize(48)
  fill('#E0E1DD');
  text("Adithya's typeracer", width/2, 100)
  textSize(30);
  textAlign(LEFT)
  text('Welcome to my typeracer! This is a game where you have to match the text on the screen by typing it out as fast as you can. There are three options to choose from - 10 words, 25 words, and 50 words - and these will determine the number of words in your typeracer. Pressing the button "Click to Start" will initiate the game. Hope you enjoy my typeracer!', 50, 125, windowWidth - 50)
  if (result=='Adithya is the best'){
    ans=result
    colour = '#E0E1DD'
    total = 1
    pos = 1
 }
  if (wordCount == 10){
  ans = selectedNoun1 + " " +selectedNoun2 + " " +selectedNoun3 + " " +selectedNoun4 + " " +selectedNoun5 + " " +selectedNoun6 + " " +selectedNoun7 + " " +selectedNoun8 + " " +selectedNoun9 + " " +selectedNoun10
  }
  if (wordCount == 25){
  ans = selectedNoun1 + " " +selectedNoun2 + " " +selectedNoun3 + " " +selectedNoun4 + " " +selectedNoun5 + " " +selectedNoun6 + " " +selectedNoun7 + " " +selectedNoun8 + " " +selectedNoun9 + " " +selectedNoun10 + " " +selectedNoun11 + " " +selectedNoun12 + " " +selectedNoun13 + " " +selectedNoun14 + " " +selectedNoun15 + " " +selectedNoun16 + " " +selectedNoun17 + " " +selectedNoun18 + " " +selectedNoun19 + " " +selectedNoun20 + " " +selectedNoun21 + " " +selectedNoun22 + " " +selectedNoun23 + " " +selectedNoun24 + " " +selectedNoun25
  } if (wordCount == 50){
    ans = selectedNoun1 + " " +selectedNoun2 + " " +selectedNoun3 + " " +selectedNoun4 + " " +selectedNoun5 + " " +selectedNoun6 + " " +selectedNoun7 + " " +selectedNoun8 + " " +selectedNoun9 + " " +selectedNoun10 + " " +selectedNoun11 + " " +selectedNoun12 + " " +selectedNoun13 + " " +selectedNoun14 + " " +selectedNoun15 + " " +selectedNoun16 + " " +selectedNoun17 + " " +selectedNoun18 + " " +selectedNoun19 + " " +selectedNoun20 + " " +selectedNoun21 + " " +selectedNoun22 + " " +selectedNoun23 + " " +selectedNoun24 + " " +selectedNoun25 + " " +selectedNoun26 + " " +selectedNoun27 + " " +selectedNoun28 + " " +selectedNoun29 + " " +selectedNoun30 + " " +selectedNoun31 + " " +selectedNoun32 + " " +selectedNoun33 + " " +selectedNoun34 + " " +selectedNoun35 + " " +selectedNoun36 + " " +selectedNoun37 + " " +selectedNoun38 + " " +selectedNoun39 + " " +selectedNoun40 + " " +selectedNoun41 + " " +selectedNoun42 + " " +selectedNoun43 + " " +selectedNoun44 + " " +selectedNoun45 + " " +selectedNoun46 + " " +selectedNoun47 + " " +selectedNoun48 + " " +selectedNoun49 + " " +selectedNoun50
  }
    if (result=='Adithya is the best'){
    ans=result
    colour = '#E0E1DD'
    total = 1
    pos = 1
    }
  if (flag==true){
    fill('#1B263B')
    noStroke()
    rect(50,125,width,300)
    textFont("Roboto Mono")
    textAlign(LEFT);
    textSize(25);
    fill('#778DA9');
    text(ans, 50, 125,windowWidth- 100);
    fill(colour);
    text(result, 50, 125, windowWidth- 100);
    fill('#778DA9')
    noStroke()
    rect(260,height-65,width-290,20)
    text('Progress bar:',50, height-50)
    fill('#E1E0DD')
    rect(260,height-65,map(pos,0,ans.length,0,width-290),20)
    fill('#778DA9')
    text('Accuracy:',50,height-220)
    accuracy = pos/total * 100
    text(round(accuracy,1)+'%',185,height-220)
    duration = (endTime - startTime)/1000
    text('Time:'+str(round(duration,1))+' seconds',50,height-190)
    if (result=='Adithya is the best'){
    duration = 0
    rect(260,height-65,width-290,20)
  }
    btn3 = createButton('Click to Restart')
    btn3.size(150,125)
    btn3.position (width-225, height-275)
    btn3.mousePressed(toRestart)
    btn3.style('font-size', '30px')
    btn3.style('background-color', '#5E503F')
    btn3.style('color', '#EAE0D5')
  if(ans==result){
    noLoop();
    text('Good job! You completed the typeracer', 50, height - 160, windowWidth-50)
    text('Typing speed:'+ round((60/duration)*wordCount,1) + ' words per minute',50,height-130, windowWidth-50)
    textFont("Maven Pro");
    textAlign(CENTER);
    textSize(48)
    fill('#E1E0DD');
    }
  } 
  if (timer==true) {
    endTime = millis()
  }
}
function keyTyped(){
  total += 1
  if (key==ans[pos]){
    pos+=1
    colour = '#E1E0DD'
  } else {
    colour = 'red'
  }
  if(keyCode==65){
    result += key
  } else if (keyCode==66){
    result+= key
  } else if (keyCode==67){
    result+= key
  } else if (keyCode==68){
    result+= key
  } else if (keyCode==69){
    result+= key
  } else if (keyCode==70){
    result+= key
  } else if (keyCode==71){
    result+= key
  } else if (keyCode==72){
    result+= key
  } else if (keyCode==73){
    result+= key
  } else if (keyCode==74){
    result+= key
  } else if (keyCode==75){
    result+= key
  } else if (keyCode==76){
    result+= key
  } else if (keyCode==77){
    result+= key
  } else if (keyCode==78){
    result+= key
  } else if (keyCode==79){
    result+= key
  } else if (keyCode==80){
    result+= key
  } else if (keyCode==81){
    result+= key
  } else if (keyCode==82){
    result+= key
  } else if (keyCode==83){
    result+= key
  } else if (keyCode==84){
    result+= key
  } else if (keyCode==85){
    result+= key
  } else if (keyCode==86){
    result+= key
  } else if (keyCode==87){
    result+= key
  } else if (keyCode==88){
    result+= key
  } else if (keyCode==89){
    result+= key
  } else if (keyCode==90){
    result+= key
  } else if (keyCode==32){
    result+= key
  } else if (keyCode==48){
    result+= key
  } else if (keyCode==49){
    result+= key
  } else if (keyCode==50){
    result+= key
  } else if (keyCode==51){
    result+= key
  } else if (keyCode==52){
    result+= key
  } else if (keyCode==53){
    result+= key
  } else if (keyCode==54){
    result+= key
  } else if (keyCode==55){
    result+= key
  } else if (keyCode==56){
    result+= key
  } else if (keyCode==57){
    result+= key
  } else if (keyCode==222){
    result+= key
  } else if (keyCode==189){
    result+= key
  } else if (keyCode==188){
    result+= key
  } else if (keyCode==190){
    result+= key
  } else if (keyCode==191){
    result+= key
  } else if (keyCode==186){
    result+= key
  } else if (keyCode==219){
    result+= key
  } else if (keyCode==220){
    result+= key
  } else if (keyCode==221){
    result+= key
  } else if (keyCode==192){
    result+= key
  } else if (keyCode==187){
    result+= key
  } else if (keyCode==BACKSPACE){
    result = result.substring(0,result.length - 1)
    total-= 1
  }
}

function toBegin(){
  flag = true
  btn.hide()
  btn0.hide()
  btn1.hide()
  btn2.hide()
  startTime = millis()
  timer = true
}
function toRestart(){
window.location.reload()
}