function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  groundClass=createSprite(200,150,20,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function mouseDragged(){
  matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sligShot.fly();

}