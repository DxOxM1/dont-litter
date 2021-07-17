
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 1400);


	engine = Engine.create();
	world = engine.world;

	


	

	//Create the Bodies Here.

	
	

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
   }
   ball = Bodies. circle(200,200,50,ball_options)
   World.add(world,ball)

   ground = new Ground(800,900,1600,20);
    right = new Ground(1500,689,20,400);
	left = new Ground(1100,689,20,400);
	top_wall = new Ground(200,10,400,20);
  
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  right.show()
  left.show()
  top_wall.show()
  
 

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)
  drawSprites();

 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:400,y:-955})
}}




function hForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}) ;
}
function vForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}) ;
}