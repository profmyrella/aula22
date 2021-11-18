const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, objeto;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  objeto = Bodies.rectangle(200, 100, 50, 50);
  World.add(world, objeto);
  console.log(objeto);
  console.log(objeto.type);
  console.log(objeto.position.x);
  console.log(objeto.position.y);
}

function draw() {
  background("green");
  rectMode(CENTER);
  rect(200, 200, 50, 50);
  drawSprites();
}