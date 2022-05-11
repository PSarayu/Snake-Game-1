var computer,player;
var top,bottom,left,right;


function setup(){
 createCanvas(600,600)

  top=new Wall(300,30,600,20)
  bottom=new Wall(200,580,600,20)
  left=new Wall(30,300,20,580)
  right=new Wall(580,300,20,580)

}

function draw(){
background("black")

top.display();
bottom.display();
left.display();
right.display();
}