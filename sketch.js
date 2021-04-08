const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var thunder1,thunder2,thunder3,thunder4,walking;
var man,umberlla,drop= [];
var created;
function preload(){
thunder1 = loadImage("images/1.png");
thunder2 = loadImage("images/2.png");
thunder3 = loadImage("images/3.png");
thunder4 = loadImage("images/4.png");
walking = loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png")
}

function setup(){
    var canvas = createCanvas(600,700);
    engine = Engine.create();
    world = engine.world;
   man = createSprite(300,500,150,200);
   man.addAnimation("walk",walking);
   u = new Umberlla(300,500);
   if(frameCount%150 == 0 ){
       for(var i = 0; i<200; i++ ){
           drop.push(new Rain(random(0,600),random(0,400)));

       }
   }
}

function draw(){
    background(0);
    Engine.update(engine);
   var rand = Math.round(random(1,4));
   if(frameCount%200 == 0){
       created = frameCount;
       thunder=createSprite(random(10,570),random(0,30),20,20);
       switch(rand){
           case 1 : thunder.addImage(thunder1);
           break;
           case 2 : thunder.addImage(thunder2);
           break;
           case 3 : thunder.addImage(thunder3);
           break;
           case 4 : thunder.addImage(thunder4);
           break;
           default:break;

       }
       thunder.scale = random(0.2,0.5)
   }
   if(created+10 == frameCount && thunder){
       thunder.destroy();

   }
   for(var i =0; i<200; i ++ ){
       drop[i].display();
       drop[i].repeatrain();

   }
   drawSprites();
}