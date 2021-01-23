class Polygon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.5
        }
        this.polygon=Bodies.circle(x,y,radius,options);
        World.add(world,this.polygon);
        this.image = loadImage("polygon.png");
        
      }
      display(){
        
        imageMode(CENTER);
        image(this.image, this.polygon.position.x,this.polygon.position.y,50,50);
        
      }
}