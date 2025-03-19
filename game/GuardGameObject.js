class GuardGameObject extends GameObject {
 

  start() {

  }

  update() {

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
