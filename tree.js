class tree {
    constructor()
    {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(550,250,50,700,options);
        this.x = 550;
        this.y = 250;
        this.width = 50;
        this.height = 700;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke('black');
        strokeWeight(4);
        fill('brown');
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}