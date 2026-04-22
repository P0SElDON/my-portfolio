// A sketch that creates a castle with flickering lights inside the windows (randomly generated colors). There is adjustable rain (color and amount) that was made by MindForCode on youtube, but edited by Leo Bland
// project by Leo Bland, inspired by the Zelda and Chill album

// let R = 5
// let G = 4
// let B = 68

let amount = 10; //not past 10,000 or computer will break

// Rain credit to
// MindForCode
// Rain code only
let rains = [];
let rainAmount = amount;

function preload() {
  mySound = loadSound("Thunder Rain Sound Effect 1294.wav");
}

function setup() {
   let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
  mySound.loop();
}

function draw() {
  background(5, 4, 68);
  for (let r of rains) {
    r.show();
    r.update();
  }
  // background(26,37,69,75);
  strokeWeight(0);
  frameRate(24);

  //amount of rain spawned
  for (let i = 0; i < rainAmount; i++) {
    //My variable!^
    rains.push(new Rain(random(width)));
  }

  //clouds
  fill(249, 246, 239);
  circle(128, 63, 45);
  fill(250, 233, 236);
  circle(90, 67, 65);
  fill(242, 241, 240);
  circle(58, 77, 50);

  fill(249, 246, 239);
  circle(250, 63, 45);
  fill(250, 233, 236);
  circle(285, 67, 65);
  fill(242, 241, 240);
  circle(310, 90, 50);

  fill(249, 246, 239);
  circle(250, -50, 150);

  //clouds at top
  fill(249, 246, 239);
  circle(20, -50, 150);
  fill(242, 241, 240);
  circle(140, -50, 150);
  fill(242, 241, 240);
  circle(350, -50, 150);

  //castle
  fill(69, 69, 71);
  rect(131, 210, 150, 200);
  square(50, 300, 100);
  square(270, 300, 100);
  triangle(52, 301, 124, 302, 85, 110);
  triangle(132, 211, 281, 212, 200, 70);
  triangle(369, 301, 285, 302, 331, 110);

  // windows
  fill(255, 255, random(25, 225));
  rect(185, 239, 40, 50, 1);
  rect(60, 316, 40, 50, 1);
  rect(320, 316, 40, 50, 1);

  //door
  fill(150, 75, 0);
  rect(178, 341, 60, 70);
  fill(" black");
  rect(206, 341, 3, 70);

  //rain
  strokeWeight(2);
}

// animates the rain
class Rain {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, random(7, 10));
    this.len = random(15, 30);
    this.sat = random(255);
  }

  show() {
    // change color --v   changes saturation <
    stroke(107, 149, 196, this.sat);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.len);
  }

  update() {
    this.pos.add(this.vel);
    if (this.y > height + 100) {
      rains.shift();
    }
  }
}

//coordinate finder
function keyPressed() {
  if (key === "p") {
    print(mouseX + "," + mouseY);
  }
}

//Disregard this. Just a thing on the side I was trying.

// function rainSounds() {
//   if (amount <= 5) {
//     console.log("Drizzle")
//   }

//   if (amount = 6,50) {
//     console.log("normal rain")

//   }

//   if (amount >= 50) {
//     console.log("downpour")
//   }

//   if (amount == 0) {
//    background(200)
//   }
// }
