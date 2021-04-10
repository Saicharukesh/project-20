var thickness;
var speed, weight;
var bullet, wall;
function setup() {
  createCanvas(1600,400);
  
  thinkness = random(22,82);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "red";
  bullet.velocityX = speed;

}

function draw() {
  background(0);  
  
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    
    if(damge>10)
    {
      wall.shapeColor = color(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

    

  hasCollided();
  drawSprites();
}

function hasCollided(bullet, wall)
  {
    bulletRightEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
  }
