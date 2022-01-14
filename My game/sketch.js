

var s1, s2;
var s1i, s2i;
var cave, forest;
var ci, fi;
var goblin, gi;


function preload(){
  fi= loadImage("Images/forest.jpg");
  ci= loadImage("Images/cave.jpg");
  gi= loadImage("Images/goblin.png");
  s2i= loadImage("Images/s2.png");

}

function setup() {
  createCanvas(800,400);
  

  forest= createSprite(400, 200, 800, 400);
  forest.addImage(fi);
  forest.scale= 2;


  s2= createSprite(100, 350, 50, 120);
  s2.addImage(s2i);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
  spawnGoblins();

}



function spawnGoblins() 
{
      if(World.frameCount % 60 === 0) {
        goblin = createSprite(800,50,40,50);
    
    //obstacleTop.addImage(obsTop1);
    
    goblin.scale = 0.4;
    goblin.velocityX = -4;

    //random y positions for top obstacles
    goblin.y = Math.round(random(10,300));

    //generate random top obstacles
    var rand = Math.round(random(1,2));
    goblin.addImage(gi);
      

     //assign lifetime to the variable
   goblin.lifetime = 200;
    
   
   
      }
}