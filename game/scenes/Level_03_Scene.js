//Game-specific classes
class Level_03_Scene extends Scene {

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 300, 300, 20)
        this.addGameObject(new GuardGameObject1("Guard Game Object", 50, 15), 30, 250, 20)
        this.addGameObject(new GuardGameObject2("Guard Game Object", 50, 15), 250, 30, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"), 0, 45)
        this.addGameObject(new GameObject().addComponent(new Text("black", "30px Times New Roman", "Level: 3")), 0, 20)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level_04_Scene)))
    }
}