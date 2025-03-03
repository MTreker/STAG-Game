class DeathScene extends Scene {

  start() {
    this.addGameObject(new DeathController())
    this.addGameObject(new DeathTextGameObject(), 0, 20)

    super.start()
  }

  draw() {
    //Engine drawing code
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "black"
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    super.draw()
  }
}