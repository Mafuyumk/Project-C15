
//Declare a variável para PLAY e END
var PLAY=1;
var END=0;
//inicialize o valor para a variável
//Atribua o valor de gameState como PLAY
var gameState=PLAY;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 redB= new Group();
 
  arrowGroup= new Group();

}

function draw() {
 background(0);
//Adicione a condição para gameState = PLAY
if (gameState==PLAY) {
  scene.velocityX = -3;
  
  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();
    
  }
  var select_balloon = Math.round(random(1,4));
  if (World.frameCount % 100 == 0) {
    switch(select_balloon){
      case 1: redBalloon();
      break;
      case 2: blueBalloon();
      break;
      case 3: pinkBalloon();
      break;
      case 4: greenBalloon();
      break;
      default:break;
    }
  }
  

}



 //escreva uma condição para o estado END
  else if (gameState===END) {
  background.velocityX = 0;

  if (bow.isTouching = redB || blueB || greenB || pinkB) {
    gameState = END
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();

  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();

  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();

  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();

  }

  }
  
 //defina a velocidade do fundo como 0


 
  drawSprites();
//Adicione a condição de texto para exibir a pontuação.
  text("Score: "+score, 340,20);
}


function redBalloon() {
  var redB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.lifetime = 150;
  redB.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blueB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.velocityX = 3;
  blueB.lifetime = 150;
  blueB.scale = 0.1;
}

function greenBalloon() {
  var greenB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.lifetime = 150;
  greenB.scale = 0.1;
}

function pinkBalloon() {
  var pinkB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.velocityX = 3;
  pinkB.lifetime = 150;
  pinkB.scale = 1

}

// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
