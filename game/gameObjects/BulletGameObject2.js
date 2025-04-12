class BulletGameObject2 extends GameObject {
    constructor(name, g_timer = 0) {
        super(name)
        this.g_timer = g_timer
      }
    start() {
        // this.addComponent(new Circle("transparent", "pink", 5))
        this.addComponent(new BulletMovement2(this.g_timer))
    }
}