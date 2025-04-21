//Game-specific classes
class Level_02_Scene extends Scene {

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 300, 300, 20)
        this.addGameObject(new GuardGameObject1("Guard Game Object", 50), 30, 250, 20)
        this.addGameObject(new GuardGameObject2("Guard Game Object", 50), 250, 30, 20)
        this.addGameObject(new BulletGameObject1("Bullet Game Object", 5, 5), 30, 250, 20)
        this.addGameObject(new BulletGameObject2("Bullet Game Object", 5, 5), 250, 30, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"), 0, 45)
        this.addGameObject(new GameObject().addComponent(new Text("black", "30px Times New Roman", "Level: 2")), 0, 20)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(WinScene)))
    }
}