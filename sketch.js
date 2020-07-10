const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var rect;
var box1;
var box2;
var box3;

function setup(){
    var canvas = createCanvas(400,400);

   
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

var ball_options = 
{
    restitution : 1.0
}
    ball = Bodies.circle(200,100,20,ball_options)

World.add(world,ball)

    console.log(ground);

    box3 = createSprite(150,367,15,50);
    box3.shapeColor =  "red" ;

    box2 = createSprite(200,385,100,15);
    box2.shapeColor =  "red" ;

    box1 = createSprite(250,367,15,50);
    box1.shapeColor =  "red" ;
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)

    drawSprites();
}