
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(400,400)
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  obstaclesGroup= new Group();
  foodGroup=new Group(); 
  ground.visible=false

}


function draw() {
  background("white");
  if(ground.x<0){ 
    ground.x=ground.width/2
  }
  
  
  
  
  
  
  
  
  
  
  
  if(keyDown("space")){ 
    monkey.velocityY= -12 
  }
  if (monkey.isTouching(foodGroup)){
     foodGroup.destroyEach();
    score=score+2
 
  }
  monkey.velocityY = monkey.velocityY+0.8  ;
  monkey.collide(ground);
  
   //if(obsta)
 
  if(obstaclesGroup.isTouching(monkey)){
    monkey.VelocityY=0;
    ground.VelocityX=0;
    foodGroup.setVelocityXEach(0)
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
    
  switch(score){
      case 10:monkey.scale=0.12;
              break;
      case 20:monkey.scale=0.14;
              break;
      case 30:monkey.scale=0.16;
             break;
      case 40:monkey.scale=0.18;
               break;
      default:break;
  }
    
  spawnObstacles();
  food();
 
 drawSprites() ;
  
   stroke("white")
  textSize(20)
  fill("white")
  text("SCORE:" + score,500,50)
  stroke("black");
  textSize(20); 
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,20,40);


  
  
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(400,200,20,20);
  banana.addAnimation("flying",bananaImage)
  banana.scale=0.1 
  banana.velocityX=-4
    banana.addGroup=foodGroup
   
 
    var rand=Math.round(random(120,220))
    banana.y=rand
    foodGroup.add(banana)
  banana.lifetime=100;
  
  }
 
}
function spawnObstacles(){
if(frameCount%300===0){
  obstacle =  createSprite(400,310,20,30)
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-4
   obstaclesGroup.add(obstacle)
  obstacle.lifetime=100;
 
}
}






  












