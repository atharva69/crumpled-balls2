
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,dustbinIMG;
var ball,ground2,ground3;
var line1,line2,line3;
function preload()
{
	dustbinIMG=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	dustbin=createSprite(650,600,10,10);
	dustbin.addImage(dustbinIMG)
	dustbin.scale=0.6
	
	ground2 = new Ground(400,680,800,10);
	ground3 = new Ground(750,680,10,10000);

	//ground=createSprite(50,685,10000,20,{isStatic:true});
	
	ball = new Paper(200,200,20,20);

	line1 = new Ground(651,600,10,50);
	line2 = new Ground(681,600,10,50);

	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(134);
  ball.display();
  dustbin.display();
  ground2.display();
  ground3.display();
  line1.display();
  line2.display();
  drawSprites();
 
}
function keyPressed() {
    if(keyCode === 39){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-50});
	}
	
  }
  


