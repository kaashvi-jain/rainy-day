class Rain {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,3, options);
      this.width = 3;
      this.height =5;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var  angle = this.body.angle;
     push ();
     translate (pos.x,pos.y);
     rotate (angle);
      ellipseMode(RADIUS);
      fill("aqua");
      ellipse(0,0, this.width, this.height);
      pop();
    }
    repeatrain(){
      if(this.body.position.y>this.height){
        Matter.Body.setPosition(this.body,{x:random (0,600),y:random(0,600)})
      }
    }
  };
  