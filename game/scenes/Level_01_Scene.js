//Game-specific classes
class Level_01_Scene extends Scene {

    start(spawnerY, spawnerX2) {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 300, 300, 50)
        this.addGameObject(new GuardGameObject("Guard Game Object"), 30, spawnerY, 20)
        this.addGameObject(new GuardGameObject("Guard Game Object"), spawnerX2, 30, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"), 0, 45)
        this.addGameObject(new GameObject().addComponent(new Text("black", "30px Times New Roman", "Level: 1")), 0, 20)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level_02_Scene)))
    }
}