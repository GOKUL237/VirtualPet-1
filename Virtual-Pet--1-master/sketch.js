//Create variables here
var dog,happydog,database
var foodS,foodStock

function preload()
{
	//load images here
dog=loadImage("doglmg.png")
dog = createSprite(250,250,10,10);
dog.addImage("dogIMG1.png")

}

function setup() {
  createCanvas(500,500);
  foodStock=database.ref("FOOD");
foodStock.on("value",redStock)

}


function draw() {  

  drawSprites();
  //add styles here

}



