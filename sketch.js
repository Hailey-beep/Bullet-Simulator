var bullet, wall;

var weight, speed, thickness;

var severity;

function setup() {
  createCanvas(1600,400);

  //bullet's factors
  speed = random(223, 321);
  weight = random(30, 52);
  //wall's factors
  thickness = random(22, 83);

  //wall sprite
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);

  //bullet sprite
  bullet = createSprite(200, 200, 50, 15);
  bullet.shapeColor = "white";
  bullet.velocityX = speed; 
}

function draw() {
  background("black");

  textSize(30);
  fill("white");
  text("Bullets Damage", 450, 30);


  if(bullet.collide(wall)) {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    //green = good wall
    if(damage >= 10) {
      bullet.shapeColor = "green";
      severity = "Effective";
    }

    //Red = bad wall
    if(damage < 10) {
      bullet.shapeColor = "red"
      severity = "Not effective";
    }

    console.log("Damage: " + damage);
  }

  drawSprites();

  textSize(25);
    fill("white");
    text("Destruction: " + severity, 450, 75);
}