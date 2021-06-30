var trex,walk,ground,floor,ground2;
function preload(){
  walk = loadAnimation("trex1.png","trex3.png","trex4.png")
  floor = loadImage("ground2.png")
  cloud1 = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,180,50,50);
  trex.addAnimation("VOLK",walk)
  trex.scale = 0.5;
  ground =createSprite(300,180,600,20)
  ground.addImage(floor)
  ground2 = createSprite(300,190,600,20)
  ground2.visible=false
}
function draw(){
  background (180)
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground2)
  if (keyDown("space") && trex.y>=156){
    trex.velocityY = -8
  }
  drawSprites();
  ground.velocityX = -10
  if (ground.x < -500){
    ground.x = 300
  }
  if (frameCount%60===0){
    clouds();
  }
  
}

function clouds(){
  var cloud = createSprite(650,random(30,100),10,10);
  cloud.velocityX = -5;
  cloud.addImage(cloud1)
  cloud.scale = 0.75;
  trex.depth = cloud.depth + 1;
  cloud.lifetime = 150;
}

