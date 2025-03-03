class GuardGameObject extends GameObject {
  bullet_count_X = [] // Stores {x, y} of bullets moving right
  bullet_count_Y = [] // Stores {x, y} of bullets moving down

  spawnerX
  spawnerY
  spawnerX2
  spawnerY2

  timer

  randomX
  randomY
  lastX
  lastY

  start() {
    this.spawnerX = 30
    this.spawnerY = 250
    this.spawnerX2 = 250
    this.spawnerY2 = 30
    this.timer = 20

    this.lastX = 0
    this.lastY = 0
  }

  update() {
    this.timer -= 1

    // Spawner movement
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    if (this.timer == 0) {
      this.randomY = getRandomNumber(150, 475)
      this.randomX2 = getRandomNumber(150, 475)

      if (this.randomY !== this.lastY) {
        this.spawnerY = this.randomY
        this.bullet_count_X.push({ x: this.spawnerX, y: this.spawnerY })
        this.lastY = this.randomY
      }

      if (this.randomX2 !== this.lastX) {
        this.spawnerX2 = this.randomX2
        this.bullet_count_Y.push({ x: this.spawnerX2, y: this.spawnerY2 })
        this.lastX = this.randomX2
      }

      this.timer = 20
    }

    // Move bullets
    for (let bullet of this.bullet_count_X) {
      bullet.x += 5
    }
    for (let bullet of this.bullet_count_Y) {
      bullet.y += 5
    }

    // Remove bullets if they go off-screen
    this.bullet_count_X = this.bullet_count_X.filter(b => b.x <= 520)
    this.bullet_count_Y = this.bullet_count_Y.filter(b => b.y <= 520)
  }

  draw() {
    ctx.fillStyle = "black"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 5

    // Draw spawners
    ctx.beginPath()
    ctx.arc(this.spawnerX, this.spawnerY, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(this.spawnerX2, this.spawnerY2, 20, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()

    // Draw arena walls
    ctx.beginPath()
    ctx.moveTo(80, 80)
    ctx.lineTo(80, 520)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(80, 80)
    ctx.lineTo(520, 80)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(80, 520)
    ctx.lineTo(520, 520)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(520, 520)
    ctx.lineTo(520, 80)
    ctx.stroke()

    // Draw bullets
    ctx.fillStyle = "red"
    ctx.strokeStyle = "red"

    // Draw all horizontal bullets
    this.bullet_count_X.forEach(b => {
      ctx.beginPath()
      ctx.arc(b.x, b.y, 15, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    })

    // Draw all vertical bullets
    this.bullet_count_Y.forEach(b => {
      ctx.beginPath()
      ctx.arc(b.x, b.y, 15, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
    })
  }
}
