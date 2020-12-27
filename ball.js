class Ball{
    constructor(x,y, radius){
        var options = {
            'friction': 1,
            'restitution': 0.01,
            'density': 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x, pos.y, this.radius);
    }
}