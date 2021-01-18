class iron
{
    constructor(x, y,angle) {
        var options = {
            'friction':6.0,
            'density':3
        }
        this.body = Bodies.rectangle(x, y, 150,150, options);
        this.width = 150;
        this.height = 150;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill('black');
        rect(0, 0, this.width, this.height);
        pop();
      }
}