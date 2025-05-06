class Boundary extends GameObject {
    constructor(name){
        super(name)
        this.addComponent(new PhysicsStatic())
        this.addComponent(new Line("black", 5))
    }
}