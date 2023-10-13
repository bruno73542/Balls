var block1, block2;
var rotator1, rotator2, rotator3;
var angle1=60,angle2=60,angle3=60;
var particle1, particle2, particle3, particle4, particle5, particle6, particle7, particle8, particle9, particle10;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 800);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isStatic: true
	}
	
	plane = Bodies.rectangles(600,height,1200,20,plane_optios);
	World.add(world,plane);

	block1 = Bodies.rectangles(100,400,150,20,plane_options);
	World.add(world,block1);
	block2 = Bodies.rectangles(100,400,150,20,plane_options);
	World.add(world,block2);

	Engine.update(engine);
  
    fill('brown');
	rectMode(center);
	ellipseMode(radius);

	var rotator_options = {
		isStatic: true
	}

	rotator1 = Bodies.rectangles(250,200,150,20,rotator_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangles(250,200,150,20,rotator_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangles(250,200,150,20,rotator_options);
	World.add(world,rotator3);

	var particle_options ={
		restitution:0.4,
		friction:0.02
	}

	particle1 = Bodies.rectangles(220,10,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.rectangles(220,10,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.rectangles(225,10,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.rectangles(230,10,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.rectangles(230,10,10,particle_options);
	World.add(world,particle5);
}


function draw() {
  rectMode(CENTER);
  background('black');

  rect(plane.position.x,plane.position.y,1200,20);

  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);
  Matter.Body.rotate(rotator1,angle1);
  push();
  Translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;
  Matter.Body.rotate(rotator2,angle2);
  push();
  Translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;
  Matter.Body.rotate(rotator3,angle3);
  push();
  Translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;


  drawSprites();
  

}



