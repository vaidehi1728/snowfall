var bg, flakeImg, flake;

snowflakes = []
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload(){
  bg = loadImage("snow1.jpg");
  flakeImg = loadImage("snow5.webp")
 
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;






	


	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine);	
  background(bg);  
  if (frameCount%10==0 && snowflakes.length<100){
    snowflakes.push(new Flake(Math.round(random(50,750)),50))
  }
  
  for (var i=0;i<snowflakes.length;i++){
    snowflakes[i].display();
  }

 


 
}






