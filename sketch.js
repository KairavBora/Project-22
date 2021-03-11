const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;



function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 fairyVoice.play();

	fairy = createSprite(130, 480);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

 var options = {
          isStatic: true}

    var options1 = {
          isStatic: false}       

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, options});
	World.add(world, starBody);
	
	Engine.run(engine);

	star.x=starBody.position.x
	star.y=starBody.position.y

}


function draw() {
  background(bgImg);

//fairyVoice.play();
Engine.update(engine);




	
if(star.y>=470){
	star.velocityY=0
	
}

  drawSprites();

}

function keyPressed() {
	//write code here
if(keyCode === LEFT_ARROW){
        fairy.x=fairy.x-16 ; 
}

if (keyCode===RIGHT_ARROW){
	fairy.x=fairy.x+16
}

if (keyCode===DOWN_ARROW){
	star.velocityY=5
	
}
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x <object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true
  }
  else {
    return false
 } 
}
