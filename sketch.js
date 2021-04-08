var canvas;
var music;
var box1, box2, box3, box4;
var box;
var edge1, edge2 , edge3;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100,580,190,20);
    box1.shapeColor = ("green");  
    box2 = createSprite(300,580,190,20);
    box2.shapeColor = ("red");
    box3 = createSprite(500,580,190,20);
    box3.shapeColor = ("blue");
    box4 = createSprite(700,580,190,20);
    box4.shapeColor = ("orange");

   box = createSprite(random(100,700),200,40,40);
   box.shapeColor = ("white"); 
   box.velocityX = 5;
   box.velocityY = 6;

   edge1 = createSprite(0,300,10,600);
   edge1.visible = false;
   edge2 = createSprite(400,0,800,10);
   edge2.visible = false;
   edge3 = createSprite(800,300,10,600);
   edge3.visible = false;



}

function draw() {
    background(rgb(169,169,169));
   music.play();


    if(box1.isTouching(box) && box.bounceOff(box1)){
      box.shapeColor = "green"; 
    }

  if(box3.isTouching(box) && box.bounceOff(box3)){
    box.shapeColor = "blue"; 
  }

  if(box4.isTouching(box) && box.bounceOff(box4)){
    box.shapeColor = "orange"; 
  }

  if(box2.isTouching(box)){
    box.shapeColor = "red"; 
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
  }

  box.bounceOff(box1);
  
  box.bounceOff(box3);
  box.bounceOff(box4);
  box.bounceOff(edge1);
  box.bounceOff(edge2);
  box.bounceOff(edge3);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
