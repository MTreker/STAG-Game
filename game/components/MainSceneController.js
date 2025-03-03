class MainSceneController extends Component{
    update() {
        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let guardGameObjects = Engine.currentScene.findGameObjects("Guard Game Object")

        for (let guardGameObject of guardGameObjects) {
            if (Collisions.inCollision(playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r, guardGameObject.transform.x, guardGameObject.transform.y, guardGameObject.transform.r)) {
                Engine.currentScene = new DeathScene()
                Engine.currentScene.start()
            }
        }

        if (playerGameObject.transform.y > 350) {
            Engine.currentScene = new WinScene()
            Engine.currentScene.start()
        }
    }
}