class PlayerConstraints extends Component {
    update() {
        if (this.transform.x < 100) this.transform.x = 100
        if (this.transform.x > 500) this.transform.x = 500
        if (this.transform.y < 100) this.transform.y = 100
        if (this.transform.y > 500) this.transform.y = 500
    }
    draw() {
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
    }
}