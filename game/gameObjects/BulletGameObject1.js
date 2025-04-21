class BulletGameObject1 extends GameObject {
    constructor(name, g_timer = 0, b_speed = 0) {
        super(name)
        this.g_timer = g_timer
        this.b_speed = b_speed
      }
    start() {
        // this.addComponent(new Circle("transparent", "pink", 5))
        this.addComponent(new BulletMovement1(this.g_timer, this.b_speed))
    }
}