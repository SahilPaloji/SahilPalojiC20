var a, b;

function setup() {
  createCanvas(800,400);
 a = createSprite(400, 200, 50, 50);
 b = createSprite(200, 200, 30, 20);

 a.shapeColor= "green";
 b.shapeColor= "green";
}

function draw() {
  background(255,255,255);  
 
a.x = World.mouseX;
a.y = World.mouseY;

  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2){
    a.shapeColor= "yellow";
    b.shapeColor= "yellow";
  }
  else{
    a.shapeColor= "green";
 b.shapeColor= "green";
  }
  drawSprites();
}