class Raindrop{
    constructor(x, y){
    var options={
        'restitution': 1.1,
        'friction':0.1,
        'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height);
    this.height = height;
    this.width = width;
    World.add(world, this.body);
    }
function display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        this.body.shapecolor(0, 0, 255);
        pop();
}
}