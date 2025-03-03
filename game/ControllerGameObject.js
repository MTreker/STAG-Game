class ControllerGameObject extends GameObject {
  constructor(name) {
    super(name)
  }

  start() {}

  update() {
    let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
    let guardGameObjects = Engine.currentScene.findGameObjects("Guard Game Object")
    let scoreGameObject = Engine.currentScene.findGameObject("Score Game Object")

    for (let guardGameObject of guardGameObjects) {
      // Check collision with horizontal bullets
      for (let bullet of guardGameObject.bullet_count_X) {
        if (Collisions.inCollision(playerGameObject.playerX, playerGameObject.playerY, 20, bullet.x, bullet.y, 15)) {
          Engine.currentScene = new DeathScene()
          Engine.currentScene.start()
        }
      }

      // Check collision with vertical bullets
      for (let bullet of guardGameObject.bullet_count_Y) {
        if (Collisions.inCollision(playerGameObject.playerX, playerGameObject.playerY, 20, bullet.x, bullet.y, 15)) {
          Engine.currentScene = new DeathScene()
          Engine.currentScene.start()
        }
      }
    }

    if (scoreGameObject.elapsedTime > 100) {
      Engine.currentScene = new WinScene()
      Engine.currentScene.start()
    }
  }
}
