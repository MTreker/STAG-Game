class GuardGameObject1 extends GameObject {
  constructor(name) {
    super(name)
  }
  start() {
    this.addComponent(new Circle("black", "black", 5))
    this.addComponent(new GuardMovement1())
  }
}