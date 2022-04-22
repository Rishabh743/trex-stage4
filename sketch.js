var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImg



var score=0

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
// trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg=loadImage("cloud.png")
 cactusImg1=loadImage("obstacle1.png")
 cactusImg2=loadImage("obstacle2.png")
 cactusImg3=loadImage("obstacle3.png")
 cactusImg4=loadImage("obstacle4.png")
 cactusImg5=loadImage("obstacle5.png")
 cactusImg6=loadImage("obstacle6.png")
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
//  console.log(trex.y)
fill("black")  
text("score:"+score,500,15)
  score=Math.round(frameCount/60)
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnObstacles()
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
 if(frameCount%60==0){
 var cloud=createSprite(500,100,25,10)
 cloud.addImage("cloudPicture",cloudImg)
cloud.y=Math.round(random(10,100))
 cloud.velocityX=-2
 console.log(trex.depth)
 console.log(cloud.depth)
 trex.depth=cloud.depth+1
 cloud.lifetime=200 
cloud.scale=0.5
}
}

function spawnObstacles(){
  if(frameCount % 80==0){

var cactus=createSprite(500,170,10,50)  
cactus.velocityX=-4
var choice=Math.round(random(1,6))
switch(choice){
  case 1:cactus.addImage("obstacle1",cactusImg1)
  break
  case 2:cactus.addImage("obstacle2",cactusImg2)
  break
  case 3:cactus.addImage("obstacle3",cactusImg3)
 break
 case 4:cactus.addImage("obstacle4",cactusImg4)
 break
 case 5:cactus.addImage("obstacle5",cactusImg5)
 break
 case 6:cactus.addImage("obstacle6",cactusImg6)
 break
 default:break
}
cactus.scale=0.7
cactus.lifetime=200

}
}
