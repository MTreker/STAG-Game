class WinScene extends Scene {
  //Variables for the win scene
  
  start() {
    this.addGameObject(new WinController())
    this.addGameObject(new WinTextGameObject(), 0, 20)

    super.start()
  }
 
  draw() {
    //Engine drawing code
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)


    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fill()

    super.draw()
  }
}