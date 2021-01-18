class sand{
    constructor(x,y){
        var options = {
            'restitution': 1.3,
            'friction': 5,
             'denstity': 1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.diameter = 10;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke('black');
        strokeWeight(4);
        fill('brown');
        circle(0,0,this.diameter);
        pop();
    }
}