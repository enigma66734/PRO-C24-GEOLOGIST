class plane{
    constructor()
    {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(0,600,3000,40,options);
        this.x = 0;
        this.y = 600;
        this.width = 3000;
        this.height = 40;
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        pos.x = this.body.position.x;
        pos.y = this.body.position.y;
        push();
         fill('brown');
         rect(this.x,this.y,this.width,this.height);
         pop();
    }
}