class GuardMovement2 extends Component {
    constructor(g_timer = 0, b_speed = 0) {
        super()
        this.g_timer = g_timer
        this.b_speed = b_speed
        this.bullet_count_Y = []
    }
    lastX

    start() {
        this.lastX = 0

        this.g_restart = this.g_timer
    }

    update() {
        this.g_timer -= 1
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // Spawner movement
        if (this.g_timer == 0) {
            this.randomX2 = getRandomNumber(150, 475)

            if (this.randomX2 !== this.lastX) {
                this.transform.x = this.randomX2
                this.bullet_count_Y.push({ x: this.transform.x, y: this.transform.y, vx: 0, vy: this.b_speed })
                this.lastX = this.randomX2
            }

            this.g_timer = this.g_restart
        }
        // Move bullets
        for (let bullet of this.bullet_count_Y) {
            bullet.y += this.b_speed
        }
        // Remove bullets if they go off-screen
        this.bullet_count_Y = this.bullet_count_Y.filter(b => b.y <= 500)


    }
    draw() {
        ctx.fillStyle = "red"
        ctx.strokeStyle = "black"
        // Draw all vertical bullets
        this.bullet_count_Y.forEach(b => {
            ctx.beginPath()
            ctx.arc(b.x, b.y, 15, 0, 2 * Math.PI)
            ctx.fill()
            ctx.stroke()
        })
    }
}