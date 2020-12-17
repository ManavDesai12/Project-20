var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = ("green");
  fixedRect = createSprite(100, 200, 50, 100);
  fixedRect.shapeColor = ("green");
  movingRect.velocityX = -5
  fixedRect.velocityX = 5

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = ("red");
    fixedRect.shapeColor = ("red");
    movingRect.velocityX = movingRect.velocityX * -1;
    fixedRect.velocityX = fixedRect.velocityX * -1;

  }
  else {
    movingRect.shapeColor = ("green");
    fixedRect.shapeColor = ("green");
  }


  
}