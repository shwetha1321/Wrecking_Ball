const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world

ground = new Ground(400,600,1000,10);
ball = new Ball(300,590,70);
chain = new Chain(ball.body,{x:300,y:100})
box1 = new Building(550,580,70,70);
box2 = new Building(550,500,70,70);
box3 = new Building(550,450,70,70);
box4 = new Building(550,390,70,70);
box5 = new Building(550,300,70,70);
box6 = new Building(550,290,70,70);
box7 = new Building(550,200,70,70);

}

function mouseDragged(){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  
  ground.display();
  ball.display();
  chain.display();
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
}