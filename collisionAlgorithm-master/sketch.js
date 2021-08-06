var obj2, movingRect;
var obj1, obj2, fixedRect;
function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(100,200,50,50);
  obj2 = createSprite(200,200,50,50);
  obj3 = createSprite(300,200,50,50);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  obj2.shapeColor = "green";
  obj2.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
// if(isTouching(obj3, movingRect)){
//   movingRect.shapeColor = "red";
//   obj3.shapeColor = "red";
// }
// else{
//   movingRect.shapeColor = "green";
//   obj3.shapeColor = "green";
// }
  bounceOff(movingRect, fixedRect);
if(isTouch(movingRect,obj2)){
  movingRect.shapeColor = "red";
      obj2.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  obj2.shapeColor = "green";
}
  drawSprites();
}

