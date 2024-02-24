var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup= new Group()

  ghost= createSprite(300,300);
  ghost.addImage("ghost", ghostImg);
  ghost.scale=0.5

  
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites()

    spawnDoors()

    if(keyDown("right_arrow")){
    ghost.x=ghost.x+2
    }

    if(keyDown("left_arrow")){
      ghost.x=ghost.x-2 
    }

    if(keyDown("space")){
      ghost.velocityY= -5 
    }

       ghost.velocityY = ghost.velocityY + 0.1
}

function spawnDoors() {
    if (frameCount % 120 === 0) {
    var door = createSprite(300,0,40,10);
    var climber = createSprite(300,40,40,10);
    door.x = Math.round(random(80,520)); 
    climber.x= door.x
    climber.addImage(climberImg);
    climber.velocityY= 3;
    door.addImage(doorImg);
    door.scale = 0.9;
    door.velocityY = 3;
    
     //assign lifetime to the variable
    door.lifetime = 200;
    
    //adjust the depth
    //door.depth = trex.depth;
    //door.depth = trex.depth + 1;
    
    //add each cloud to the group
    doorsGroup.add(door); 
  }
}

