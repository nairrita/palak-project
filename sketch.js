var bg, bg_img, turtle,turtle_img;
var bottle_img,bottleGroup;
var poster1_img;

function preload(){
  bg_img = loadImage("images/ocean.jpg");
  turtle_img = loadAnimation("images/t1.png","images/sprite_t50.png");
  bottle_img = loadImage("images/waste1.jpeg")
  poster1_img = loadImage("images/poster1.jpeg")
 
}

function setup(){
  var canvas = createCanvas(displayWidth,displayHeight)
  
  bg =  createSprite(600,500,1200,1000);
  bg.addImage("img",bg_img);
  bg.x = bg.width/2;
  turtle = createSprite(200,400,50,50);
  turtle.addAnimation("img",turtle_img);
  turtle.scale = 0.5;
  
  bg.scale = 1.0

  bottleGroup =  new Group();
  
  
  

}

function draw(){

  background(0)
  
  bg.velocityX=-5;
  


if(keyDown(UP_ARROW)){
  move(0,-5);
 
}

if(keyDown(DOWN_ARROW)){
  move(0,5)

}

if(keyDown(LEFT_ARROW)){
  move(-5,0)
  
}

if(keyDown(RIGHT_ARROW)){
  move(5,0)
  
}

if(turtle.x>displayWidth){
  turtle.x = 200;
}
  if(bg.x<100){
    bg.x = bg.width/2;
  }

spawnBottle();
spawnMessage();


  drawSprites();
}

function move(x,y){
  turtle.x = turtle.x+x;
  turtle.y = turtle.y+y;
}

function spawnBottle(){
  if(World.frameCount%100===0){
    var rand =  Math.round(random(200,800))
  var bottle = createSprite(rand,0,20,20);
  bottle.addImage("img",bottle_img);
  bottle.velocityY = 5;
  bottle.scale = 0.5;
  bottleGroup.add(bottle);
  
  }
}

function spawnMessage(){
  if(World.frameCount%500===0){
  var message1 = createSprite(displayWidth,100,50,50);
  message1.addImage("img",poster1_img);
  message1.velocityX = -1;
  message1.scale = 0.5;
  message1.lifetime = 400;
  
  }
}



