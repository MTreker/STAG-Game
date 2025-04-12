class BulletMovement1 extends Component {
    constructor(name, g_timer = 0) {
        super(name)
        this.g_timer = g_timer
        this.bullet_count_X = []
    }
    start() {
        this.lastY = 0

    }
    update() {
        this.g_timer -= 1
        if (this.g_timer == 0) {
            this.randomY = SharedState.randomY
            // this.randomX2 = getRandomNumber(150, 475)

            if (this.randomY !== this.lastY) {
                this.transform.y = this.randomY
                this.bullet_count_X.push({ x: this.transform.x, y: this.transform.y })
                this.lastY = this.randomY
            }

            this.g_timer = 50
        }
        // Move bullets
        for (let bullet of this.bullet_count_X) {
            bullet.x += 5
        }
        // Remove bullets if they go off-screen
        this.bullet_count_X = this.bullet_count_X.filter(b => b.x <= 520)
    }
    draw() {
        ctx.fillStyle = "red"
        ctx.strokeStyle = "red"
        // Draw all horizontal bullets
        this.bullet_count_X.forEach(b => {
            ctx.beginPath()
            ctx.arc(b.x, b.y, 15, 0, 2 * Math.PI)
            ctx.fill()
            ctx.stroke()
        })
    }
}