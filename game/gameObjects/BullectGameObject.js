class BulletGameObject extends GameObject {
    constructor(name) {
        super(name)
    }
    start() {
        this.addComponent(new Circle("red", "red", 5))
        this.addComponent(new BulletMovement())
    }
}