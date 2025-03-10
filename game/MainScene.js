//Game-specific classes
class MainScene extends Scene {
    

    start() {
        this.gameObjects.push(new PlayerGameObject("Player Game Object"))
        this.gameObjects.push(new GuardGameObject("Guard Game Object", 200))
        this.gameObjects.push(new ScoreGameObject("Score Game Object"))
        this.gameObjects.push(new ControllerGameObject("Controller Game Object"))

        for(let gameObject of this.gameObjects){
            gameObject.start()
        }
    }

    update() {
        
        // if (Collisions.inCollision(this.playerX, this.playerY, 50, this.circleX, this.circleY, 20)) {
        //     Engine.currentScene = new DeathScene()
        //     Engine.currentScene.start()
        // }

        // if (Collisions.inCollision(this.playerX, this.playerY, 50, this.circle2X, this.circle2Y, 20)) {
        //     Engine.currentScene = new DeathScene()
        //     Engine.currentScene.start()
        // }
        

        // if (this.playerY > 350) {
        //     Engine.currentScene = new WinScene()
        //     Engine.currentScene.start()
        // }

        for(let gameObject of this.gameObjects){
            gameObject.update()
        }


    }
    draw() {

        //Engine drawing code
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        for(let gameObject of this.gameObjects){
            gameObject.draw()
        }

    }
}