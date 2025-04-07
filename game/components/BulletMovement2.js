class BulletMovement2 extends Component {
    constructor(name, g_timer = 50) {
        super(name)
        this.g_timer = g_timer
        this.bullet_count_Y = [] // Stores {x, y} of bullets moving right
    }
    start() {
        this.lastX2 = 0
    }
    update() {
        this.g_timer -= 1
        if (this.g_timer == 0) {
            this.randomX2 = SharedState.randomX2
            // this.randomX2 = getRandomNumber(150, 475)

            if (this.randomX2 !== this.lastX) {
                this.transform.x = this.randomX2
                this.bullet_count_Y.push({ x: this.transform.x, y: this.transform.y })
                this.lastX = this.randomX2
            }

            this.g_timer = 50
        }
        // Move bullets
        for (let bullet of this.bullet_count_Y) {
            bullet.y += 5
        }
        // Remove bullets if they go off-screen
        this.bullet_count_Y = this.bullet_count_Y.filter(b => b.y <= 520)
    }
    draw() {
        ctx.fillStyle = "red"
        ctx.strokeStyle = "red"
        // Draw all vertical bullets
        this.bullet_count_Y.forEach(b => {
            ctx.beginPath()
            ctx.arc(b.x, b.y, 15, 0, 2 * Math.PI)
            ctx.fill()
            ctx.stroke()
        })
    }
}