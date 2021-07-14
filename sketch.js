const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var platform;
var slingShot;
var backgroundImg;

function preload(){
     getTime();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,500,320,20);
    platform = new Ground(900,300,320,20);

    box1 = new Shooter(100,320,40,40);
    box2 = new Box(450,480,30,40);
    box3 = new Box(415,480,30,40);
    box4 = new Box(380,480,30,40);
    box5 = new Box(485,480,30,40);
    box6 = new Box(520,480,30,40);
    
    box7 = new Box(345,480,30,40);
    box8 = new Box(555,480,30,40);
    box9 = new Box(450,440,30,40);
    box10 = new Box(520,440,30,40);
    box11= new Box(485,440,30,40);
    box12 = new Box(415,440,30,40);
   
    box13 = new Box(390,440,30,40);
    box14 = new Box(415,400,30,40);
    box15 = new Box(445,400,30,40);
    box16 = new Box(485,400,30,40);
    box17= new Box(450,360,30,40);
    box18 = new Box(900,280,30,40);
   

    
    box19 = new Box(865,280,30,40);
    box20= new Box(830,280,30,40);
    box21 = new Box(935,280,30,40);
    box22= new Box(970,280,30,40);
    box23= new Box(900,240,30,40);
    box24= new Box(935,240,30,40);
    box25= new Box(865,240,30,40);
    box26= new Box(900,200,30,40);
   

    slingshot = new SlingShot(box1.body,{x:100, y:300});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);


    text(mouseX +","+ mouseY,50,50);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    
    
    ground.display();
  
platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(box1.body);
    }
}
async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseType=await response.json();
console.log(responseType)
    var dt=responseType.datetime;
    console.log(dt);
    var hr=dt.slice(11,13);
    console.log(hr);
    if(hr>=06 && hr<18){
       bg="bg.png" 
    }
    else{
        bg="bg2.jpg" 
    }
    backgroundImg=loadImage(bg);
}