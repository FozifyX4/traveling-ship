var sea,seaimage;
var ship,shipimage

function preload(){
  seaimage=loadImage("sea.png")
  shipimage=loadAnimation("ship-1.png","ship-2.png")
}

function setup() {
  createCanvas(800,700);
  sea=createSprite(400,350,800,700);
  sea.addImage(seaimage);
  sea.velocityX=-2;
  ship=createSprite(150,500,160,210)
  ship.addAnimation("ship",shipimage)
  ship.scale=0.3
}

function draw() {
  background(220);
  if(sea.x<0){
    sea.x=400
  }
  drawSprites();
}