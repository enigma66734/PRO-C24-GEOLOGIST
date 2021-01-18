class rubber{
    constructor(x,y) {
        var options = {
            'restitution': 0.3,
            'friction': 5,
            'density': 1
        }
       this.body = Bodies.circle(x,y,50,options);
       this.diameter = 50;
       World.add(world,this.body);
    }
    display() 
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke('black');
    strokeWeight(4);
    fill('blue');
    circle(0,0,this.diameter);
    pop();
}
}