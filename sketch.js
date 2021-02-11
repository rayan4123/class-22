
var myengine,myearth,ball,ground
function setup() {
  createCanvas(800,400);
  myengine=Matter.Engine.create() 
  myearth=myengine.world;
  var balloptions={
    restitution: 1
  }

  
ball=Matter.Bodies.circle(400,150,25,balloptions)
Matter.World.add(myearth,ball)

var groundoptions={
  isStatic: true
}


ground=Matter.Bodies.rectangle(400,370,800,20,groundoptions)
Matter.World.add(myearth,ground)
console.log(ball)
}

function draw() {
  background(0,205,125);  
Matter.Engine.update(myengine)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10)
}