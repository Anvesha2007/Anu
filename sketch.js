var tomImg1
var tomImg2
var bg
var  tomImg3
var  jerryImg1
var  jerryImg2
var  jerryImg3
var tom,jerry
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600,100,100)
jerry=createSprite(200,600,100,100)
tom.addAnimation("tomSleeping",tomImg1)
jerry.addAnimation("jerryStanding",jerryImg1)
tom.scale=0.2
jerry.scale=0.2

}

function draw() {
    
    
    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
}
