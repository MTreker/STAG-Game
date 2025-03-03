//Game-specific classes
class MainScene extends Scene {

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 125, 90, 50)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 200, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 100, 250, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"), 0, 45)
        this.addGameObject(new LevelNumberGameObject("Level Number Game Object"), 0, 20)
        this.addGameObject(new ControllerGameObject("Controller Game Object"))

        super.start()
    }

    draw() {
        //Engine drawing code
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        super.draw()
    }
}