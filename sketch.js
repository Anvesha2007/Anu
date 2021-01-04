var ms,fs;
function setup() {
createCanvas(800,500);
fs=createSprite(600, 400, 50, 80);
fs.shapeColor="green"
fs.debug=true
ms=createSprite(400, 200, 80, 30);
ms.shapeColor="blue"
ms.debug=true
}
function draw() {
  background("pink"); 
  ms.x=World.mouseX
  ms.y=World.mouseY

if (ms.x-fs.x<ms.width/2+fs.width/2
  && fs.x-ms.x<ms.width/2+fs.width/2
  &&  ms.y-fs.y<ms.height/2+fs.height/2
  &&  fs.y-ms.y<ms.height/2+fs.height/2

  
  )

{
  ms.shapeColor="orange"
  fs.shapeColor="yellow"
}
else{
  fs.shapeColor="green"
  ms.shapeColor="blue"
}
 




  drawSprites();
}












