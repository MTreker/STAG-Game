class BulletGameObject1 extends GameObject {
    constructor(name, g_timer = 50) {
        super(name)
        this.g_timer = g_timer
    }
    start() {
        // this.addComponent(new Circle("transparent", "pink", 5))
        this.addComponent(new BulletMovement1(this.g_timer))
    }
}