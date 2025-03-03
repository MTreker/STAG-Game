class ScoreGameObject extends GameObject {
  elapsedTime

  constructor(name) {
    super(name)
    
  }
  start() {
    this.elapsedTime = 0
  }
  update() {
    this.elapsedTime += Time.deltaTime

  }
  draw() {
    ctx.fillStyle = "black"
    ctx.font = "30px Times New Roman"
    let roundedTime = Math.floor(this.elapsedTime * 100) / 100
    ctx.fillText("Score: " + roundedTime, 0, 20)

  }
}