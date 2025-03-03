class GuardGameObject extends GameObject {
  start() {
    this.addComponent(new Circle("blue", "purple", 5))
    this.addComponent(new GuardMovement())
    super.start()
  }
}