class GuardMovement2 extends Component {
    constructor(g_timer = 0) {
        super()
        this.g_timer = g_timer
    }

    randomX
    randomY

    lastX
    lastY

    start() {
        // this.spawnerX = 30
        // this.spawnerY = 250
        // this.spawnerX2 = 250
        // this.spawnerY2 = 30

        this.lastX = 0
        this.lastY = 0

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
                SharedState.randomX2 = this.randomX2
                this.transform.x = this.randomX2
                this.lastX = this.randomX2
            }

            this.g_timer = this.g_restart
        }


    }
}