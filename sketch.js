var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redZone1,redZone2,redZone3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    redZone1 = createSprite(width/2, height-50, 200,20);
	 redZone1.shapeColor=color("red");
	 
	 redZone2 = createSprite(width/2+90, height-100, 20,100);
	 redZone2.shapeColor=color("red");
	 
	 redZone3 = createSprite(width/2-90, height-100, 20,100);
	 redZone3.shapeColor=color("red");
	 


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  packageSprite.collide(redZone1);
  keyDown();

  


  drawSprites();
 
}

function keyDown(){
	if (keyDown("space")) {
	packageBody.velocityY=2;
	packageBody.restitution=1.0;
	packageBody.collide(ground);
  }
}


 

