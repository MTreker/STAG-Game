//Game-specific classes
class Level_04_Scene extends Scene {

    start() {
        this.addGameObject(new PlayerGameObject("Player Game Object"), 300, 300, 20)
        this.addGameObject(new GuardGameObject1("Guard Game Object", 50, 20), 30, 250, 20)
        this.addGameObject(new GuardGameObject2("Guard Game Object", 20, 5), 250, 30, 20)
        this.addGameObject(new ScoreGameObject("Score Game Object"), 78, -45)
        this.addGameObject(new Boundary("North Wall Game Object"), 80, 80, 520, 80)
        this.addGameObject(new Boundary("East Wall Game Object"), 520, 520, 520, 80)
        this.addGameObject(new Boundary("South Wall Game Object"), 80, 520, 520, 520)
        this.addGameObject(new Boundary("West Wall Game Object"), 80, 80, 80, 520)
        this.addGameObject(new GameObject().addComponent(new Text("black", "30px Times New Roman", "Level: 4")), 79,-20)
        this.addGameObject(new GameObject().addComponent(new MainSceneController(Level_05_Scene)))
    }
}