class ScoreGameObject extends GameObject {
  start() {
    this.addComponent(new Text("black", "30px Times New Roman", "Score: "))
    this.addComponent(new ScoreUpdater())
    super.start()
  }
}