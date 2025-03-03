class PlayerGameObject extends GameObject {
  start() {
    this.addComponent(new Circle("yellow", "purple", 5))
    this.addComponent(new KeyboardMovement(50))
    this.addComponent(new PlayerConstraints())
    super.start()
  }
}