var cat,catRunning,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var garden,gardenImage;


function preload() {
   
    //load the images here
    gardenImg=loadImage("images/garden.png");
    
    // catImg4=loadImg("cat4.png")

     //mouseImg1=loadImg("mouse1.png");
     //mouseImg2=loadImg("mouse2.png");
     //mouseImg3=loadImage("mouse3.png");
     //mouseImg4=loadImage("mouse4.png");

     
     catImg1=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png") ;
     catImg2=loadAnimation("images/cat4.png")
     mouseImg1=loadAnimation("images/mouse1.png");
     mouseImg2=loadAnimation("images/mouse2.png","images/mouse2.png");
     mouseImg3=loadAnimation("images/mouse4.png");


     
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

//==mouse=createSprite(400,100,20,20);
garden=createSprite(500,400,1000,800)
garden.addImage(gardenImg);

cat=createSprite(800,700,40,40);
cat.addAnimation("sleeping",catImg1) 
cat.scale=0.3;
//catImg2=addImg(catImg2)
 //catImg3=addImg(catImg3)
 //catImg4=addImg(catImg4)

 mouse=createSprite(200,700,20,20,);
 mouse.addAnimation("standing",mouseImg1);
 mouse.scale=0.2;

 
 

}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

if(cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.velocityX=0;
    cat.addAnimation("escaping",catImg2);
    cat.scale=0.3;
    cat.changeAnimation(catImg2);

    mouse.addAnimation("running",mouseImg3)
    mouse.changeAnimation(mouseImg3);
    mouse.scale=0.1
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keydown === left_Arrow){
cat.velocityX=-5;
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning");

Text(mouseX + ','+mouseY,10,45)

}

}
