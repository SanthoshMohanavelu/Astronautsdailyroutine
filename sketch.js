
var bg, sleep, brush, gym, eat, drink, move, bath;
var astronaut;

function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  eat = loadAnimation("eat1.png", "eat2.png");  
  drink = loadAnimation("drink1.png", "drink2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  move = loadAnimation("move.png", "move1.png");
}

function setup() {
  createCanvas(600,500);


  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(bg);


  textSize(20)
  fill("white")
  text("Instructions:", 21, 37)
  textSize(15);
  text("Up Arrow = Brushing", 21, 56)
  text("Down Arrow = Gymming", 21, 71)
  text("Right Arrow = Bathing", 21, 86)
  text("Left Arrow = Eating", 21, 101)
  text("m key = Move", 21, 116)
  

  edges = createEdgeSprites();
  astronaut.bounceOff(edges)

  if(keyDown("UP_ARROW")) {
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing")
  astronaut.y = 350
  astronaut.velocityY = 0;
  astronaut.velocityX = 0;
  }
  
  if(keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gymming", gym);
  astronaut.changeAnimation("gymming");
  astronaut.x = 300;
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.x = 150
  astronaut.y = 350;
  eat.velocityX = 0.5;
  eat.velocityY = 0.5;  

  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath)  
    astronaut.changeAnimation("bathing")
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }

    if(keyDown("m")){
      astronaut.addAnimation("moving", move)
      astronaut.changeAnimation("moving")
      astronaut.velocityX = 1;
      astronaut.velocityY = 1;
      }


  drawSprites();
}