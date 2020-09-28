const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var ground_option = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,390,50,50,ground_option);
  World.add(world,ground);
  
  var ball_option= {
    restitution: 1.0
  }

  ball = Bodies.circle(400,300,20,ball_option);
  World.add(world,ball);

  

  

}

function draw() {
  background(0);

 
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,15);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  
  
}