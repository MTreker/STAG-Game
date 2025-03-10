class PlayerGameObject extends GameObject {
  playerX
  playerY
  playerSpeed


  constructor(name) {
    super(name)
  }

  start() {
    this.playerX = 300
    this.playerY = 300
    this.playerSpeed = 100
  }

  update() {
    if (Input.keysdown.includes("ArrowUp")) {
      this.playerY -= this.playerSpeed * Time.deltaTime
    }
    if (Input.keysdown.includes("ArrowDown")) {
      this.playerY += this.playerSpeed * Time.deltaTime
    }
    if (Input.keysdown.includes("ArrowLeft")) {
      this.playerX -= this.playerSpeed * Time.deltaTime
    }
    if (Input.keysdown.includes("ArrowRight")) {
      this.playerX += this.playerSpeed * Time.deltaTime
    }

    if (this.playerX < 100) this.playerX = 100
    if (this.playerX > 500) this.playerX = 500
    if (this.playerY < 100) this.playerY = 100
    if (this.playerY > 500) this.playerY = 500

  }
  draw() {
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.arc(this.playerX, this.playerY, 20, 0, Math.PI * 2)

    ctx.fill()
    ctx.stroke()
  }
}