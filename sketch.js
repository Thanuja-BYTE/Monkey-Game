
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
  
}


function draw() {
   background(255);
  
  

  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/getFrameRate());
  text("Survival Time:"+ survivalTime, 100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
   
  spawnbananas();
  spawnObstacles();
 
  drawSprites();
  
}       

function spawnObstacles(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -5;
    obstacle.scale = 0.13;
   obstacle.addImage(obstacleImage);
    obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle);
   
 }
}
    
function spawnbananas() {
 
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    

   banana.lifetime = 200;
    
 bananasGroup.add(banana);
    
  }
}    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  