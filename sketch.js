
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,plane1,stone1,rubber1,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,iron1,tree1,leaves1,leaves2,leaves3,leaves4;
var leaves5,leaves6,leaves7;
function preload()
{
	
}

function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new hammer(80,30);
	stone1 = new stones(250,500,-PI/2);
	rubber1 = new rubber(600,590);
	sand1 = new sand(650,590);
	sand2 = new sand(720,590);
	sand3 = new sand(800,590);
	sand4 = new sand(350,590);
	sand5 = new sand(420,590);
	sand6 = new sand(500,590);
	sand7 = new sand(530,590);
	sand8 = new sand(550,590);
	iron1 = new iron(800,570);
	tree1 = new tree();
	leaves1 = new leaves(1100,100);
	leaves2 = new leaves(1200,70);
	leaves3 = new leaves(1000,70);
	leaves4 = new leaves(1100,30);
	leaves5 = new leaves(1000,173);
	leaves6 = new leaves(1200,173);
	leaves7 = new leaves(1100,200);
	plane1 = new plane();

	edge = createEdgeSprites();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('cyan');
  createEdgeSprites();

  hammer1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  iron1.display();
  tree1.display();
  leaves1.display();
  leaves2.display();
  leaves3.display();
  leaves4.display();
  leaves5.display();
  leaves6.display();
  leaves7.display();
  plane1.display();

  drawSprites();
 
}



