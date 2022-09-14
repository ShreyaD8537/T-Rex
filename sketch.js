
var box


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,10,10)
}

function draw() 
{
  background(0);

if (keyIsDown(RIGHT_ARROW)){
  box.position.x += 1

}
if (keyIsDown(LEFT_ARROW)){
  box.position.x += -1
}

if (keyIsDown(UP_ARROW)){
  box.position.y += -1
}

if (keyIsDown(DOWN_ARROW)){
  box.position.y += 1
}
drawSprites()
}





