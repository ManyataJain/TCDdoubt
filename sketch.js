var dog,dogRunning;
var obstacle;
var backgroundimg,backgroundimg2;
var bg1,bg2;
var portalimg;
var portal;
var obstaclesGroup;
var portalGroup;
var gameState="play";


function preload(){
  dogRunning=loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png");
  portalimg=loadImage("portal4.png");
  backgroundimg=loadImage("bg1.jpg");
  backgroundimg2=loadImage("bg2.jpg");

obstacle1 = loadImage("barrel.png");
obstacle2 = loadAnimation("fire1.png","fire2.png","fire3.png","fire4.png","fire5.png","fire6.png","fire7.png","fire8.png","fire9.png","fire10.png","fire11.png");
obstacle3 = loadImage("snail.png");

}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
 bg1=createSprite(displayWidth/2+50,displayHeight/2-200);
 bg1.addImage("background",backgroundimg);
 bg1.addImage("background2",backgroundimg2);
 bg1.scale=2.5;

 dog=createSprite(600, 520, 50, 50);
 dog.addAnimation("running",dogRunning)
 dog.scale=3;

 obstaclesGroup = new Group();

  
}

function draw() {
  background(255); 

  if(gameState==="play"){
    bg1.velocityX=-3;
    if(keyDown(UP_ARROW)){
      dog.x=dog.x+0.8;
      
    }
    if(keyDown(RIGHT_ARROW)){
      dog.x=dog.x+3;
    }
    if(bg1.x<0){
      bg1.x=displayWidth/2;
    }
    dog.x=camera.position.x-600;

  spanObstacles();
  drawSprites();
}}

function spanObstacles() {
  if(frameCount%60===0){
    var randy=Math.round(random(200,520))
    obstacle = createSprite(0,randy,10,40);
      
      //generate random obstacles
      var rand = Math.round(random(1,3));
      obstacle.velocityX=3;
      //obstacle.scale=0.5;
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
       
        default: break;

        
      }
      
  obstaclesGroup.add(obstacle);
}}