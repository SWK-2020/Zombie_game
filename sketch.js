var player,zombie,soldier,base,bullet,sktrooper,zsktrooper,mgunner,rifle,medic,zmedic,zombieGroup;
var playeri,zombiei,soldieri,basei,bulleti,sktrooperi,zsktrooperi,mgunneri,medici,zmedici;
var angle,pistol,pistoli,bonus,bonusi,hc,hci;
var gameState="play";
var hp=100;
var zombiehp=20;
var damage=20;
var zsktrooperhp=100;
var hchp=60;
var lw,rw,backGroundi;
var basehp=2000;


// z = zombie sk = shocktrooper i = image lw = left wall rw = right wall

function preload(){

  playeri=loadImage("images/player.png");
  zombiei=loadImage("images/Zombie0.png");  
  bulleti=loadImage("images/Bullet0.png");
  pistoli=loadImage("images/pistol.png");
  backGroundi=loadImage("images/BackGround.png")
  bonusi=loadImage("images/Bonus0.png");
  zsktrooperi=loadImage("images/zombiesktrooper0.png")
  hci=loadImage("images/Flyinghc0.png");
}

function setup(){
  createCanvas(1200,600);

  lw=createSprite(10,300,20,600);
  lw.shapeColor="red";
 
  rw=createSprite(1190,300,20,600);
  rw.shapeColor="red"; 



  player=createSprite(200,200,20,20);
  player.addImage("player",playeri)
  base=createSprite(600,600,1200,100)
  player.scale=3;
  player.bounceOff(lw);
  player.bounceOff(rw);
  player.collide(rw);
  player.collide(lw);


  pistolCreate();
 

  console.log("setup working")
    zombieGroup=new Group();
}

function draw(){
  background(backGroundi);
  if (gameState==="play"){
  playerai();



  bulletSpawn();
  spawnzsktrooper();
  spawnHc();
  spawnzombies();
  spawnBonus();
  console.log("Spawners working");
  bounceOffTroop();

  //if (bullet.isTouching(zombie)){
  //console.log("Working zombie")
  //bullet.destroy();
  //zombiehp=zombiehp-damage;

  //}

  if(zombiehp<=0){

    zombieGroup.destroyEach();
    
  }
  }
drawSprites();  
}

function playerai(){

  if (keyDown("w")) {
    player.y=player.y-5;
  }

  if (keyDown("a")) {
    player.x=player.x-5;
   
  }
  if (keyDown("d")) {
    player.x=player.x+5;
   
  }

  if (keyDown("s")) {
    player.y=player.y+5;
  }

  



}

function spawnzombies() {
 
  if (frameCount % 60 === 0) {
    var zombie = createSprite(0,0,30,30);
    zombie.x = Math.round(random(40,1160));
    zombie.addImage(zombiei);
    zombie.scale=0.7;
    zombie.velocityY = 2;
    zombie.setCollider("rectangle",0,0,30,30);    
    zombie.debug=true;
   // zombieGroup.add(zombie);
    console.log("Zombie working")
   
    
  }
  
}

function bulletSpawn(){
  if (keyDown("space") && frameCount % 25===0) {
    var bullet=createSprite(player.x,player.y-5,2,10);
    bullet.addImage(bulleti)
    bullet.velocityY=-9;
    bullet.scale=0.3;
    bullet.setCollider("rectangle",0,0,6,15);
 //   bullet.debug=true;
    bullet.lifetime=500;
  }
  if(frameCount % 30===0){
    bullet=createSprite(pistol.x,pistol.y-5,2,10);
    bullet.addImage(bulleti)
    bullet.velocityY=-9;
    bullet.scale=0.3;
    bullet.setCollider("rectangle",0,0,6,15);
   // bullet.debug=true;
    bullet.lifetime=1000;
  }
  
 




}

function pistolCreate(){
  pistol=createSprite(10,10,20,20);
  pistol.x=random(40,1160);
  pistol.y=500;
  pistol.scale=0.7;
  pistol.velocityX=0.5;
  pistol.addImage(pistoli);
  pistol.bounceOff(lw);
  pistol.bounceOff(rw);
  pistol.collide(rw);
  pistol.collide(lw);
  





  




}

function spawnBonus() {
 
  if (frameCount % 240 === 0) {
    bonus = createSprite(0,0);
    bonus.x = Math.round(random(40,1160));
    bonus.addImage(bonusi);
    bonus.scale=0.7;
    //zombieGroup.add(zombie);
    console.log("bonus working")
    bonus.velocityY = 2;
    
  }
  
}

function spawnzsktrooper() {
 
  if (frameCount % 300 === 0) {
    zsktrooper = createSprite(0,0);
    zsktrooper.x = Math.round(random(40,1160));
    zsktrooper.addImage(zsktrooperi);
    zsktrooper.scale=0.7;
   //zombieGroup.add(zombie);
    
   zsktrooper.velocityY = 1;
    
  }
  
}

function spawnHc() {
 
  if (frameCount % 600 === 0) {
    hc = createSprite(0,0);
    hc.x = Math.round(random(40,1160));
    hc.addImage(hci);
    hc.scale=5;
    //zombieGroup.add(zombie);
    console.log("hc working")
    hc.velocityY = 4;
    
  }
  
}

function bounceOffTroop(){

if(player.isTouching(lw)){

player.bounce(lw);

}





}