class leaves {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.width = 100;
        this.height = 100;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke('black');
        strokeWeight(4);
        fill('green');
        rect(0,0,this.width,this.height);
        pop();
    }
}