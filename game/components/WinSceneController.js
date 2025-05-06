class WinSceneController extends Component {

  timeSinceWin

  start() {
    this.timeSinceWin = 0
  }

  update() {
    this.timeSinceWin += Time.deltaTime
    Camera.main.transform.w = 0
    Camera.main.transform.h = 0
    if (this.timeSinceWin > 3) {
      Globals.scores = 0
      Engine.nextScene = new Level_01_Scene() // issue, maybe?

    }
  }
}