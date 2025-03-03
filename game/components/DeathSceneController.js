class DeathSceneController extends Component{
  
  timeSinceDeath

  start(){
    this.timeSinceDeath = 0
  }
  
  update(){
    this.timeSinceDeath += Time.deltaTime
    if (this.timeSinceDeath > 3) {
      //Start main scene
      Engine.currentScene = new MainScene()
      Engine.currentScene.start()
    }
  }
}