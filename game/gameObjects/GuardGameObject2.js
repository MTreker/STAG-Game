class GuardGameObject2 extends GameObject {
    constructor(name, g_timer = 50) {
      super(name)
      this.g_timer = g_timer
    }
    start() {
      this.addComponent(new Circle("black", "black", 5))
      this.addComponent(new GuardMovement2(this.g_timer))
    }
  }