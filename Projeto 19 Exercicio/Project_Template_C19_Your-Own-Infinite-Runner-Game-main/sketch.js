var path,bee,flower1,flower2,flower3,flower4,badBee;
var pathImg,beeImg,flower1Img,flower2Img,flower3Img,flower4Img,badBeeImg;
var flower1Grp,flower2Grp,flower3Grp,flower4Grp,badBeeGrp;
var flowerCollection = 0;
var endImg;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    pathImg = loadImage("Road.png")
    beeImg = loadAnimation("abeille.png");
    flower1Img = loadImage("fleur1.png");
    flower2Img = loadImage("fleur2.png");
    flower3Img = loadImage("fleur3.png");
    flower4Img = loadImage("fleur4.png");
    endImg =loadAnimation("fimdejogo.png");

}

function setup() {
    createCanvas(400,600);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

bee = createSprite(110,580,20,20);
bee.addAnimation("bee",beeImg);
bee.scale=0.08;

bee.addAnimation("end", endImg);

    
flower1Grp=new Group();
flower2Grp=new Group();
flower3Grp=new Group();
flower4Grp=new Group();
badBeeGrp=new Group();

}




function draw() {
    
    background(0);
    if(gameState===PLAY){
    
    bee.x = World.mouseX;
    
    edges= createEdgeSprites();
    bee.collide(edges);
    
    
    if(path.y > 400 ){
      path.y = height/2;
    }
    
      createFlower1();
      createFlower2();
      createFlower3();
      createFlower4();
      createBadBee();
  
      if (flower1Grp.isTouching(bee)) {
        flower1Grp.destroyEach();
        flowerCollection=flowerCollection+50;
      }
      else if (flower2Grp.isTouching(bee)) {
        flower2Grp.destroyEach();
        flowerCollection=flowerCollection+100;
      
      }else if (flower3Grp.isTouching(bee)){
        flower3Grp.destroyEach();
        flowerCollection=flowerCollection+150;
        
      }else if(flower4Grp.isTouching(bee)) {
        flower4Grp.destroyEach();
        flowerCollection= flowerCollection+200;
        
      }else{
        if(badBeeGrp.isTouching(bee)) {
          gameState=END;
          bee.changeAnimation("end");
          
  
          bee.x=200;
          bee.y=300;
          bee.scale=0.6;
          
          flower1Grp.destroyEach();
          flower2Grp.destroyEach();
          flower3Grp.destroyEach();
          flower4Grp.destroyEach();
          badBeeGrp.destroyEach();
          
          
          
          flower1Grp.setVelocityYEach(0);
          flower2Grp.setVelocityYEach(0);
          flower3Img.setVelocityYEach(0);
          flower4Grp.setVelocityYEach(0);
          badBeeGrp.setVelocityYEach(0);
       
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Collect : "+ flowerCollection,10,30);
    }
  
  }
  
  function createFlower1() {
    
    var flower1 = createSprite(Math.round(random(50, 350),40, 10, 10));
    flower1.addImage(flower1Img);
    flower1.scale=0.12;
    flower1.velocityY = 3;
    flower1.lifetime = 150;
    flower1Grp.add(flower1);
    
  }
  
  function createFlower2() {
    
    var flower2 = createSprite(Math.round(random(50, 350),40, 10, 10));
    flower2.addImage(flower2Img);
    flower2.scale=0.03;
    flower2.velocityY = 3;
    flower2.lifetime = 150;
    flower2Grp.add(flower2);
  
  }
  
  function createFlower3(){
    
        var flower3 = createSprite(Math.round(random(50, 350),40, 10, 10));
        flower3.addImage(flower3Img);
        flower3.scale=0.03;
        flower3.velocityY = 3;
        flower3.lifetime = 150;
        flower3Grp.add(flower3);
       
  }
  
  function createFlower4(){
    
        var flower4 = createSprite(Math.round(random(50, 350),40, 10, 10));
        flower4.addImage(flower4Img);
        flower4.scale=0.03;
        flower4.velocityY = 3;
        flower4.lifetime = 150;
        flower4Grp.add(flower4);
      
  }
  
  function createBadBee(){
    
        var badBee = createSprite(Math.round(random(50, 350),40, 10, 10));
        badBee.addImage(badBeeImg);
        badBee.scale=0.03;
        badBee.velocityY = 3;
        badBee.lifetime = 150;
        badBeeGrp.add(badBee);
      
  }
  
  
 