let w = 270
let h = 500
var ww
var hh
var sprite
var imgu
var wood
var imgl
var imgr
var room = 0
var sprite
var wall
var trapopen
var trapclosed
var walk
var trap1, trap2, trap3


// loading all images sounds and traps

function preload() {
	soundFormats("mp3")
	imgl = loadImage("left 1.png")
	imgu = loadImage("up 1.png")
	imgd = loadImage("down 1.png")
	imgr = loadImage("right 1.png")
	wood = loadImage("New Piskel (2).png")
	wall = loadImage("New Piskel 4.png")
	walk = loadSound("Sand Walk Music.mp3")
	trapopen = loadImage("New Piskel (3).png")
	trapclosed = loadImage("New Piskel (4).png")
	trap1 = new MouseTrap(200, 200)
	trap2 = new MouseTrap(20, 450)
	trap3 = new MouseTrap(440, 450)
	
}

function setup() {
let canvas = createCanvas(715, 665);
  canvas.parent('sketch-container');
	rectMode(CENTER)
	ww = 715
	hh = 665
	textAlign(CENTER)
	textSize(50)

// so that I can switch sprites depending on key pressed
	
	sprite = imgu

}

//background

function draw() {

	
	// if ((keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW) && !walk.isPlaying()() )) {
	// walk.()
	// } else {
	// 	walk.stop()
	// }	


	// draws the floor
	for (let y = 0; y <= hh; y += 40) {
		for (let x = 0; x <= ww; x += 40) {
			image(wood, x, y, 40, 40);
		}
	}
	// image(wood,0,0,ww,hh)

	// from the reference, but edited - changes the sprite depending on what key pressed - also stops diagonal movement
	if (keyIsDown(LEFT_ARROW) === true) {
		w -= 3;
		sprite = imgl
	}

	if (keyIsDown(RIGHT_ARROW) === true) {
		w += 3;
		sprite = imgr
	}

	if (keyIsDown(UP_ARROW) === true) {
		h -= 3;
		sprite = imgu
	}

	if (keyIsDown(DOWN_ARROW) === true) {
		h += 3;
		sprite = imgd
	}
	if (keyIsDown(DOWN_ARROW) === true && keyIsDown(LEFT_ARROW) === true) {
		h -= 3;
		w += 3;
	}
	if (keyIsDown(DOWN_ARROW) === true && keyIsDown(RIGHT_ARROW) === true) {
		h -= 3;
		w -= 3;
	}
	if (keyIsDown(UP_ARROW) === true && keyIsDown(LEFT_ARROW) === true) {
		h += 3;
		w += 3;
	}
	if (keyIsDown(UP_ARROW) === true && keyIsDown(RIGHT_ARROW) === true) {
		h += 3;
		w -= 3;
	}

	// travel between rooms
	if (room === 0) {
		title()
	} else if (room === 1) {
		room1()
	} else if (room === 2) {
		room2()
	} else if(room === 3) {
		room3()
	} else if (room === 4) {
		room4()
	} else if (room === 5) {
		room5()
	}

	//character	

	image(sprite, w, h, 70, 70)

}

// boot screen

function title() {
	w = (ww/2) - 35
	h = 250
	background("darkred")
	textSize(80)
	textFont("Impact")
	text("Rat Trapped:", ww / 2, hh / 3)
	textSize(40)
	text("Adventure of Cheeto® the Rat", ww / 2, hh / 1.7)
	textSize(40)
	textFont("arial")
	text("Press Any Button To Continue", ww / 2, hh / 1.3)
	if (keyIsPressed === true) {
		room++;
	}
}

// ways to make more rooms

function room1() {

	rectMode(CORNER)

	// walls generate to edge of screen on both axises
	for (let x = 0; x <= ww; x += 40) {
		image(wall, x, 0, 40, 40);
		image(wall, x, hh - 40, 40, 40);
	}

	for (let y = 0; y <= hh; y += 40) {
		image(wall, 0, y, 40, 40);

		
	}

	//help box
fill("lightblue")
rect(40,40, 10000, 120)

fill(0)
text("Help Menu", (ww/2) - 40, 60, 100)

if (h < 150) {
	fill("lightblue")
	rect(40,40,ww,hh - 40)
	fill(0)
	text("- Use arrow keys to move, No Diagonal Movement - Mouse Traps draw you in so avoid them if you can - Try to find your way out by moving through rooms!", 100,170,ww-100)
}

	//barriers and open walls to other rooms
	if (w <= 23) {
		w += 3
	}
	if (w >= ww - 1) {
		room++
		w = 0.5
	}
	if (h <= 23) {
		h += 3
	}
	if (h >= hh - 93) {
		h -= 3

	}

}

function room2() {
//main room
	for (let x = 0; x <= ww; x += 40) {
		// image(wall, x, 0, 40, 40);
		image(wall, x, hh - 40, 40, 40);
	}

	for (let y = 0; y <= hh; y += 40) {
		// image(wall, ww - 40, y, 40, 40);
	}
//first mousetrap drawn to draw player in and teahc them how they work
	trap1.draw()

	if (w <= 0.49) {
		room--
		w = ww - 2
	}
	if (w >= ww) {
		room ++
		w = 0.5
	}
	if (h <= 0) {
		room = 4
		h = hh - 5
	}
	if (h >= hh - 93) {
		h -= 3
	}

}

function room3 () {

	// blank room to confuse player
		for (let x = 0; x <= ww; x += 40) {
		image(wall, x, 0, 40, 40);
		image(wall, x, hh - 40, 40, 40);
	}

	for (let y = 0; y <= hh; y += 40) {
		image(wall, ww - 40, y, 40, 40);
	}


	if (w <= 0.49) {
		room--
		w = ww - 5
	}
	if (w >= ww - 93) {
		w -= 3
	}
	if (h <= 23) {
		h += 3
	}
	if (h >= hh - 93) {
		h -= 3
	}
}

function room4 () {
		for (let x = 0; x <= ww; x += 40) {
		image(wall, x, 0, 40, 40);
		// image(wall, x, hh - 40, 40, 40);
	}

	for (let y = 0; y <= hh; y += 40) {
		image(wall, ww - 40, y, 40, 40);
	}
//hopefully mousetraps make it harder to get in ;)
	trap2.draw()
	trap3.draw()

	if (w <= 0.49) {
		room = 5
		w = ww - 100
	}
	if (w >= ww - 93) {
		w -= 3
	}
	if (h <= 23) {
		h += 3
	}
	if (h >= hh) {
		room = 2
		h = 5
	}

}

function room5 () {

	//game end you find the crack in the wall to escape
		for (let x = 0; x <= ww; x += 40) {
		image(wall, x, 0, 40, 40);
		image(wall, x, hh - 40, 40, 40);
	}

	for (let y = 0; y <= hh; y += 40) {
		// image(wall, ww - 40, y, 40, 40);
		image(wall, 0, y, 40, 40);
	}

	fill("black")
rect(40,40, 10000, 120)

fill("white")
text("Crack In The Wall. Enter House", 140, 60, 500)

if (h < 150) {
	fill("Black")
	rect(40,40,ww,hh - 40)
	textSize(40)
	fill("white")
	text("You Win!   -   Credits: Art: Leo Bland - Coding: Leo Bland - Ideas: Leo Bland and Otis Pekar - SFX: DasDeer (Freesound)", 50,170,)
}

	
	if (w <= 23) {
		w += 3
	}
	if (w >= ww) {
		room -- 
		w = 5
	}
	if (h <= 23) {
		h += 3
	}
	if (h >= hh - 93) {
		h -= 3

	}
}

function dead() {

	background("darkred")
	textSize(70)
	textFont("Impact")
	text("You Died! furthest room: " + room, ww / 2, hh / 3)
	textSize(40)
	textFont("arial")
	text("Click Mouse To Continue", ww / 2, hh / 1.3)
	if (mouseIsPressed === true) {
		room = 0;
	}
}


//first time doing class was very difficult
class MouseTrap {
//tells the computer what goes into a mouse trap. declaring vars just for trap
	constructor(trapx, trapy) {
		this.x = trapx;
		this.y = trapy;
		this.w = 170
		this.h = 200
		this.inHotZone = false;
		this.lure = false
	}
// the mouse trap that checks if you are in it and you die if you are. makes invisible box
	checkHotZone() {

		if (w > this.x && w < this.x + 110 && h > this.y && h < this.y + 160) {
			this.inHotZone = true
		} else {
			this.inHotZone = false;
		}

	}

//this is the lure no.1 that takes a larger box to make the mouse attracted

	cheese() {
		if (w > this.x - 90 && w < this.x + 240 && h > this.y - 50 && h < this.y + 350) {
			this.lure = true
		} else {
			this.lure = false
		}
	}

//smaller version of the above
	cheese2() {
		  if (w > this.x - 45 && w < this.x + 195 && h > this.y && h < this.y + 305) {
    this.lure2 = true
  } else {
    this.lure2 = false
  }
}

	//tells code how to draw it and everything that goes into that
	draw() {

		this.cheese()

		if (this.lure) {
				textSize(45)
				text("cheese", w + 30, h + 10)

			//equasion from rhazes goalx-playerx * 0.___ and same for y. takes the number and multiplies movement by it drawing player in
				w += ((this.x + this.w / 2) - w) * 0.005
				h += ((this.y + this.h / 2) - h) * 0.005
		}

		this.cheese2() 

		if(this.lure2) {
			w += ((this.x + this.w / 2) - w) * 0.026
			h += ((this.y + this.h / 2) - h) * 0.026
		}

		this.checkHotZone();

		// trap switching and making player die
		if (this.inHotZone) {
			image(trapclosed, this.x, this.y, this.w, this.h)
			w = this.x + 50
			h = this.y + 130
			dead()
		} else {
			image(trapopen, this.x, this.y, this.w, this.h)
		}

		// how to test hot zone. the old one
		
		// stroke("red")
		// rectMode(CORNERS)
		// rect(this.x-90,this.y+350,this.x+240,this.y - 50)
		// rectMode(CORNER)

	}

}


//sound code taken from sound page on reference

function keyPressed() {
   walk.loop();
 }
 function keyReleased() {
   walk.stop();
 }