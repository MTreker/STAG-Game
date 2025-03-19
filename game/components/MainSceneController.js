class MainSceneController extends Component {
    constructor(nextScene) {
        super()
        this.nextScene = nextScene
    }
    update() {
        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let guardGameObjects = Engine.currentScene.findGameObjects("Guard Game Object")

        for (let guardGameObject of guardGameObjects) {
            for (let guardGameObject of guardGameObjects) {
                // Check collision with horizontal bullets
                if (Array.isArray(guardGameObject.bullet_count_X)) {
                    for (let bullet of guardGameObject.bullet_count_X) {
                        if (Collisions.inCollision(playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r, bullet.transform.x, bullet.transform.y, bullet.transform.r)) {
                            Engine.currentScene = new DeathScene()
                            Engine.currentScene.start()
                        }
                    }
                }


                // Check collision with vertical bullets
                if (Array.isArray(guardGameObject.bullet_count_Y)) {
                    for (let bullet of guardGameObject.bullet_count_Y) {
                        if (Collisions.inCollision(playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r, bullet.transform.x, bullet.transform.y, bullet.transform.r)) {
                            Engine.currentScene = new DeathScene()
                            Engine.currentScene.start()
                        }
                    }
                }

                // if (Collisions.inCollision(playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r, bullet.transform.x, bullet.transform.y, bullet.transform.r)) {
                //     Engine.nextScene = new DeathScene()
                // }

            }

            if (Time.elapsedTime > 100) {
                Engine.nextScene = new this.nextScene()
            }

            if (Input.keysdown.includes("Space")) {
                Engine.nextScene = new DeathScene()
            }
            if (Input.keysdown.includes("Enter")) {
                Engine.nextScene = new this.nextScene()
            }
            if (Input.keysdown.includes("Tab")) {
                Engine.currentScene.findGameObjects("Guard Game Object").forEach(g => g.destroy())

            }
        }
    }
}