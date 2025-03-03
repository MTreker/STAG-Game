class ControllerGameObject extends GameObject {
  start() {
    this.addComponent(new MainSceneController())
    super.start()
  }
}