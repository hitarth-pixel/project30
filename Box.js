class Box {
  constructor(x, y, width, height,color) {
    var options = {
        
        density:1.5,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color=color;
    this.X=x;
    this.Y=y;
    
    World.add(world, this.body);

    this.visibility=255;
  }


  


  display(){
    var p=this.body.position ;
    push ();
    if(this.body.speed<=3){
    rectMode(CENTER);
    fill (this.color)
    rect(p.x,p.y,  this.width, this.height);

    }

    else{

        World.remove(world,this.body);
        tint (255,this.visibility);

    } pop ();
  }

};


