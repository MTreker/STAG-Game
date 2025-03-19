class PlayerGameObject extends GameObject {
  playerX
  playerY
  playerSpeed


  constructor(name) {
    super(name)
  }

  start() {
    this.playerX = 300
    this.playerY = 300
    this.playerSpeed = 100
  }

  update() {

  }
  draw() {

  }
}