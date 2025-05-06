class DeathSceneController extends Component {

  timeSinceDeath

  start() {
    this.timeSinceDeath = 0
  }

  update() {
    this.timeSinceDeath += Time.deltaTime
    Camera.main.transform.w = 0
    Camera.main.transform.h = 0
    if (this.timeSinceDeath > 3) {
      Globals.score = 0
      Engine.nextScene = new Level_01_Scene()
    }
  }
}