const Engine=Matter.Engine;
const Body=Matter.Body
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const World = Matter.World;

var engine , world;

function setup(){
var canvas =createCanvas(1200,650);


engine = Engine.create();
world = engine.world;

groundObject1=new Ground(800,200,200,20);
groundObject2=new Ground(600,400,200,20);
groundObject3=new Ground(600,600,1200,20);

hexagon=new Polygon(100,200,40,40);
slingShot=new SlingShot(hexagon.polygon,{x:100,y:300});


//groundObject1
//row 1

box1=new Box(740,170,40,40,"yellow")
box2=new Box(780,170,40,40,"pink")
box3=new Box(820,170,40,40,"lightblue")
box4=new Box(860,170,40,40,"lightgreen")
//row2
box5=new Box(760,130,40,40,"lightgreen")
box6=new Box(800,130,40,40,"red")
box7=new Box(840,130,40,40,"lightblue")
//row3
box8=new Box(800,90,40,40,"orange")

//groundObject2
//row 1
box9=new Box(540,370,40,40,"yellow")
box10=new Box(580,370,40,40,"pink")
box11=new Box(620,370,40,40,"lightblue")
box12=new Box(660,370,40,40,"lightgreen")
//row2
box13=new Box(560,330,40,40,"lightgreen")
box14=new Box(600,330,40,40,"red")
box15=new Box(640,330,40,40,"lightblue")
//row3
box16=new Box(600,290,40,40,"orange")


}

function draw(){
background("blue")
Engine.update(engine)

groundObject1.display();
groundObject2.display();
groundObject3.display();


//groundObject1 boxes
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();

//groundObject2 boxes
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();

//movingObject
hexagon.display();
slingShot.display();

drawSprites();

}

function mouseDragged (){

    Matter.Body.setPosition(hexagon.polygon, {x:mouseX, y:mouseY}) 


}

function mouseReleased(){

        slingShot.fly();

}

function keyPressed(){

        if(keyCode===13){

            Matter.Body.setPosition(hexagon.polygon, {x:100, y:200}) 
            slingShot.attach(hexagon.polygon);

           

        }

}

