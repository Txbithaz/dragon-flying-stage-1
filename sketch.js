var bg;
var dragonflying;

function preload() {
  bg = loadImage("./assets/background.webp");
  dragonflying = loadAnimation("./assets/dragon1.png", "./assets/dragon2.png", "./assets/dragon3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dragon = createSprite(width/2, height/2, 10, 10);
  dragon.addAnimation("running", dragonflying);

}

function draw() {
  background(bg);
  drawSprites()
}