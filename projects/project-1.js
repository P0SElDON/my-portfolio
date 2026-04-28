// all the necessary variables

let b1 = 10
let b2 = 10
let b3 = 10
let b4 = 10
let b5 = 10
let b6 = 10
let t1 = 0
let t1var = 0
let t2 = 0
let t2var = 0
let t3 = 0
let t3var = 0
let t4 = 0
let t4var = 0
let t5 = 0
let t5var = 0
let t6 = 0
let t6var = 0
let wintxt = 0

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
  rectMode(CENTER)
  // allows for the change in light brightness without making it all white. simpler variables
   colorMode(HSB) 
  textSize(80)
  
  // random element. applies to win and lose text.
  wintxt = random(20,80)
}

function draw() {
  noStroke()
  background(220);
 
  //b should = 63 when pressed. the lights and how they change color. brightness + num of light.
  fill(40,b1,93)
  
  ellipse(45,100,35,70)
  
  fill(200, 0, 85)
  rect(45,130,40,20, 3)
  
  //light 2
  fill(40,b2,93)
  
  ellipse(45 +60,100,35,70)
  
  fill(200, 0, 85)
  rect(45+60,130,40,20, 3)
  
  //light 3
  fill(40,b3,93)
  
  ellipse(45 +120,100,35,70)
  
  fill(200, 0, 85)
  rect(45+120,130,40,20, 3)
  
  //light 4
  fill(40,b4,93)
  
  ellipse(45 +180,100,35,70)
  
  fill(200, 0, 85)
  rect(45+180,130,40,20, 3)
  
  //light 5
  fill(40,b5,93)
  
  ellipse(45 +240,100,35,70)
  
  fill(200, 0, 85)
  rect(45+240,130,40,20, 3)
  
  //light 6
  
  fill(40,b6,93)
  
  ellipse(45 +300,100,35,70)
  
  fill(200, 0, 85)
  rect(45+300,130,40,20, 3)
  
  
  
  
  
  // these are the text variables. it makes them red if max amt of turns is reached.
  
  if (t1var <2) {
  fill(t1)
  text("1",25,230)
  } else {
  fill(0,100,100)
  text("1",25,230)
  }
 
  
 if (t2var < 2){
  fill(t2)
  text("2",25+55,230)
  } else {
    fill (0,100,100)
    text("2",25+55,230)
  }
  
  if (t3var < 4) {
  fill(t3)
  text("3",25+120,230)
  } else {
  fill(0,100,100)
  text("3",25+120,230)
  }

  
  if (t4var < 2) {
    fill(t4)
  text("4",25 + 180,230)
  }
   else {
     fill(0,100,100)
  text("4",25 + 180,230)
   }
  
  if (t5var < 2) {
    fill(t5)
  text("5",25+240,230)
  } else {
  fill(0,100,100)
  text("5",25+240,230)
  }
  

  if (t6var < 2) {
    fill(t6)
  text("6",25+300,230)
  } else {
  fill(0,100,100)
  text("6",25+300,230)
  }
  
  
  // making it so that there arent too many solutions. must press 5 to make it work. bc of previous logic this allows for less solutions.
  if (b3 > 63) {
    
    b3 = 10.0001
  }
  
  
  // randomized win and lose splash screens if conditions are met
  if (b1 === 63 & b2 === 63 & b3 === 63 & b4 === 63 & b5 === 63 & b6 === 63) {
    fill (wintxt,100,100)
    text("You win!",50,300)
    let t1var = 0
    let t2var = 0
    let t3var = 0
    let t4var = 0
    let t5var = 0
    let t6var = 0
  }
  if (t1var >= 2 & t2var >= 2 & t3var >= 4 & t4var >= 2 & t5var >= 2 & t6var >= 2) {
    fill (wintxt,100,100)
    text("You Lose",30,300)
    let t1var = 0
    let t2var = 0
    let t3var = 0
    let t4var = 0
    let t5var = 0
    let t6var = 0
    }
}

// makes the keys actually change the lights. this is a switch case

function keyPressed() {

switch (key) {
  case"1" :
    t1 = 70
    t1var ++
    b4 = 63
    break;
    
    case "4" :
    t4 = 70
    t4var ++
    t1 = 0
    t2 = 0
    t3 = 0
    t5 = 0
    t6 = 0
    b1 = 10
    b2 = 10
    b3 = 10
    b4 = 10
    b5 = 10
    b6 = 10
    break;
    
    case "2" :
    t2 = 70
    t2var ++
    b1 = 63
    b3 = b3 + 53
    b5 = 63
    break;
    
    case "3" :
    t3 = 70
    t3var ++
    b2 = 63
    b3 = b3 + 53
    break;
    
    case "5" :
    t5 = 70
    t5var ++
    b3 = 10
    b6 = 10
    break;
 
    case "6" :
    t6 = 70
    t6var ++
    b6 = 63
    break;
  }
}
