var vir1,vir2,vir3,vir4,vir5,vir6,vir7,vir8;
var virus;
var doctor;
var doctorimg;
var virusGroup;
var immunity=5;
var posX;
var posY;
var gameState="play";
var fruits;
var fruitGroup;
var fruit1_img;
var fruit2_img;
var fruit3_img;
var fruit4_img;
var fruit5_img;
var backgroundImg;
var score=0;
var immunitySnd;
var virusSnd;

function preload(){

  doctorimg=loadImage("images/doctor.png");
 
  vir1=loadImage("images/virus images/virus1.png");
  vir2=loadImage("images/virus images/virus2.png");
  vir3=loadImage("images/virus images/virus3.png");
  vir4=loadImage("images/virus images/virus4.png");
  vir5=loadImage("images/virus images/virus5.png");
  vir6=loadImage("images/virus images/virus6.png");
  vir7=loadImage("images/virus images/virus7.png");
  vir8=loadImage("images/virus images/virus8.png");

  fruit1_img=loadImage("images/fruits images/apple2.png");
  fruit2_img=loadImage("images/fruits images/banana2.png");
  fruit3_img=loadImage("images/fruits images/melon2.png");
  fruit4_img=loadImage("images/fruits images/orange2.png");
  fruit5_img=loadImage("images/fruits images/pineapple2.png");

  backgroundImg=loadImage("images/background1.jpg");

  immunitySnd=loadSound("sounds/sounds.mp3");
  virusSnd=loadSound("sounds/sound 1.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  posX=width/2;
  posY=height/2;

  //apple=createSprite(200,200,20,20);

  

  doctor= new Doctor();
  

  virusGroup=new Group();
  fruitGroup=new Group();
  
}

function draw() {
  background(backgroundImg);
  
  

  
textSize(35);
text("score:"+score,150,50) ;

 
  doctor.showImmunity();
  
  

  if(gameState==="play"){
    if(virusGroup.isTouching(doctor.doc)){
      doctor.checkImmunity();
      virusSnd.play();
   }
  
   if(fruitGroup.isTouching(doctor.doc)){
     doctor.increaseImmunity();

  }
    spawnFruits();
    fruitLife();
    spawnVirus();
    doctor.move();
  }

  if(gameState==="end"){
    textSize(35);
    fill("red");
    text("farmer is infected  ",width/2-75,height/2);
    fruitGroup.destroyEach();
    virusGroup.destroyEach();
  }

  if(gameState==="won"){
    textSize(35);
    fill("red");
    text("farmer is safe you win ",width/2-75,height/2);
    fruitGroup.destroyEach();
    virusGroup.destroyEach();
  }
  
  
  drawSprites();
}

function spawnVirus() {
  if(frameCount % 60 === 0) {
    var virus = createSprite(random(0,width),-10,10,40);
    //obstacle.debug = true;
    //virus.velocityY = 3;
    
    //generate random obstacles
    var rand = Math.round(random(1,8));
    switch(rand) {
      case 1: virus.addImage(vir1);
              break;
      case 2: virus.addImage(vir2);
              break;
      case 3: virus.addImage(vir3);
              break;
      case 4: virus.addImage(vir4);
              break;
      case 5: virus.addImage(vir5);
              break;
      case 6: virus.addImage(vir6);
              break;
      case 7: virus.addImage(vir7);
      break;
      case 8: virus.addImage(vir8);
      break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    virus.scale = 0.05;
    virus.lifetime = height/3;
    //add each obstacle to the group
    virusGroup.add(virus);
  }
}


function spawnFruits() {
if (frameCount % 80 === 0) {
  fruits = createSprite(random(50,width-50), random(50,height-50), 100, 100);
  //fruits.velocityY = 6;
  fruits.scale=0.7;
  var rand = Math.round(random(1,5));
  switch(rand){
      case 1: fruits.addImage("fruit1",fruit1_img);
      break;
      case 2: fruits.addImage("fruit1", fruit2_img);
      break;
      case 3: fruits.addImage("fruit1", fruit3_img);
      break;
      case 4: fruits.addImage("fruit1", fruit4_img);
      break;
      case 5: fruits.addImage("fruit1", fruit5_img);
      break;
  }
  fruits.lifetime =100 ;
  fruitGroup.add(fruits);
  
}
}

function mouseReleased(){
  posX=mouseX;
  posY=mouseY;
}




function fruitLife(){
  for (var k = 0; k < fruitGroup.length; k++) {
    if ( fruitGroup.contains( fruitGroup.get(k))) {
      var fl=fruitGroup.get(k).lifetime;
      if(fl<50){
    fruitGroup.get(k).tint="rgba(255,255,255,0.5)";
      }
    //console.log(fruitGroup.get(k).lifetime);
  }
}
}