class MainSceneController extends Component {
    constructor(nextScene) {
        super()
        this.nextScene = nextScene
        this.gate = true
    }
    start() {
        
    }
    update() {
        let playerGameObject = Engine.currentScene.findGameObject("Player Game Object")
        let guardGameObjects = Engine.currentScene.findGameObjects("Guard Game Object")

        // for (let guardGameObject of guardGameObjects) {
        //     // Find BulletMovement1 component manually
        //     let bulletComponent1 = guardGameObject.components.find(c => c instanceof BulletMovement1)
        //     let bulletComponent2 = guardGameObject.components.find(c => c instanceof BulletMovement2)

        //     if (bulletComponent1) {
        //         // Horizontal bullet collision
        //         for (let bullet of bulletComponent1.bullet_count_X) {
        //             if (Collisions.inCollision(
        //                 playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r,
        //                 bullet.x, bullet.y, 15
        //             )) {
        //                 Engine.currentScene = new DeathScene()
        //                 Engine.currentScene.start()
        //                 return
        //             }
        //         }
        //     }
        //     if (bulletComponent2) {
        //         for (let bullet of bulletComponent2.bullet_count_Y) {
        //             if (Collisions.inCollision(
        //                 playerGameObject.transform.x, playerGameObject.transform.y, playerGameObject.transform.r,
        //                 bullet.x, bullet.y, 15
        //             )) {
        //                 Engine.currentScene = new DeathScene()
        //                 Engine.currentScene.start()
        //                 return
        //             }
        //         }
        //     }
        // }


        if (Globals.score >= 10 && this.gate == true) {
            Engine.nextScene = new this.nextScene() // do this if statement 2 times
            this.gate = false
            Globals.score = 0 // make a variable that gets the score cause this has to reset for some reason
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