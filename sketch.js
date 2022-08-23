
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

block1 = bodies.circle(220,10,10,block1_options);
World.add(world,block1);

block2 = bodies.rectangle(110,50,10,10,block2_options);
World.add(world,block2);

block3 = bodies.rectangle(110,50,10,10,block3_options);
World.add(world,block3);

var block1_options = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}
var block2_options = {
	restitution:0.5,
	friction:0.01,
	frictionAir:0.1
}
var block3_options = {
	restitution:0.1,
	friction:1,
	frictionAir:0.3
}


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



