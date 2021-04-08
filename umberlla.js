class Umberlla {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,100, options);
    this.width = 150;
    this.height =200;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   var  angle = this.body.angle;
   push ();
   translate (pos.x,pos.y);
   rotate (angle);
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(0,0, this.width, this.height);
    pop();
  }
};
