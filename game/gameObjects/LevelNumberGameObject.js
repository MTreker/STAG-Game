class LevelNumberGameObject extends GameObject {
  start() {
    this.addComponent(new Text("black", "30px Times New Roman", "Level: 1"))
    super.start()
  }
}