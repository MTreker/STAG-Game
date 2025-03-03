class ScoreUpdater extends Component{

  elapsedTime

  start(){
    this.elapsedTime = 0
  }
  
  update() {
    this.elapsedTime += Time.deltaTime
    let roundedTime = Math.floor(this.elapsedTime * 100) / 100
    this.parent.components[1].text = "Score: " + roundedTime
  }
}