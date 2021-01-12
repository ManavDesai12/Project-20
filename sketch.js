var car, wall;
var speed, weight;
speed=Math.random(200,201);
weight=Math.random(400,1500);

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
  car.velocityX = 10;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0
    if((0.5*weight*speed*speed)/22500 < 100){
      car.shapeColor = "green"
    }
    else if(100 <= (0.5*weight*speed*speed)/22500 <= 180){
      car.shapeColor = "yellow";
    }
    else {
      car.shapeColor = "red";
    }
  }
  
}