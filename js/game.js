// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// bio images
var bio1Ready = false;
var bio1Image = new Image();
bio1Image.onload = function () {
	bio1Ready = true;
};
bio1Image.src = "images/bio1.png";

var bio2Ready = false;
var bio2Image = new Image();
bio2Image.onload = function () {
	bio2Ready = true;
};
bio2Image.src = "images/bio2.png";

var bio3Ready = false;
var bio3Image = new Image();
bio3Image.onload = function () {
	bio3Ready = true;
};
bio3Image.src = "images/bio3.png";

var bio4Ready = false;
var bio4Image = new Image();
bio4Image.onload = function () {
	bio4Ready = true;
};
bio4Image.src = "images/bio4.png";

var bio5Ready = false;
var bio5Image = new Image();
bio5Image.onload = function () {
	bio5Ready = true;
};
bio5Image.src = "images/bio5.png";

var bio6Ready = false;
var bio6Image = new Image();
bio6Image.onload = function () {
	bio6Ready = true;
};
bio6Image.src = "images/bio6.png";

var bio7Ready = false;
var bio7Image = new Image();
bio7Image.onload = function () {
	bio7Ready = true;
};
bio7Image.src = "images/bio7.png";

var bio8Ready = false;
var bio8Image = new Image();
bio8Image.onload = function () {
	bio8Ready = true;
};
bio8Image.src = "images/bio8.png";

var bio9Ready = false;
var bio9Image = new Image();
bio9Image.onload = function () {
	bio9Ready = true;
};
bio9Image.src = "images/bio9.png";

var bio10Ready = false;
var bio10Image = new Image();
bio10Image.onload = function () {
	bio10Ready = true;
};
bio10Image.src = "images/bio10.png";

var bio11Ready = false;
var bio11Image = new Image();
bio11Image.onload = function () {
	bio11Ready = true;
};
bio11Image.src = "images/bio11.png";

// Game objects
var hero = {
	speed: 256 // movement in pixels per second
};
var monster = {};
var tapesRescued = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var secondOrMore = false;
// Reset the game when the player catches a monster
var reset = function () {
if (!secondOrMore) {
	hero.x = canvas.width / 4;
	hero.y = canvas.height / 2;
}
secondOrMore= true;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width/2 - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown && hero.y >= 0) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown && hero.y <=448) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown && hero.x >= 0) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown && hero.x <=480) { // Player holding right
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		if (tapesRescued < 50) {
		++tapesRescued;
		}
		reset();
	}
};

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
		switch (tapesRescued) {
	case 0:
		if (bio1Ready) {
			ctx.drawImage(bio1Image, 512, 0);
		}
		break;
	case 5:
		if (bio2Ready) {
			ctx.drawImage(bio2Image, 512, 0);
		}
		break;
	case 10:
		if (bio3Ready) {
			ctx.drawImage(bio3Image, 512, 0);
		}
		break;
	case 15:
		if (bio4Ready) {
			ctx.drawImage(bio4Image, 512, 0);
		}
		break;
	case 20:
		if (bio5Ready) {
			ctx.drawImage(bio5Image, 512, 0);
		}
		break;
	case 25:
		if (bio6Ready) {
			ctx.drawImage(bio6Image, 512, 0);
		}
		break;
	case 30:
		if (bio7Ready) {
			ctx.drawImage(bio7Image, 512, 0);
		}
		break;
	case 35:
		if (bio8Ready) {
			ctx.drawImage(bio8Image, 512, 0);
		}
		break;
	case 40:
		if (bio9Ready) {
			ctx.drawImage(bio9Image, 512, 0);
		}
		break;
	case 45:
		if (bio10Ready) {
			ctx.drawImage(bio10Image, 512, 0);
		}
		break;
	case 50:
		if (bio11Ready) {
			ctx.drawImage(bio11Image, 512, 0);
		}
		break;
	}

	// Score

	if (tapesRescued < 50) { 
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "24px Helvetica";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Tapes rescued: " + tapesRescued, 32, 5);
	}
	else {
		ctx.fillStyle = "rgb(250, 250, 250)";
		ctx.font = "48px Helvetica";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("You win!", 256, 240);
	}
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
