class GuardMovement1 extends Component {
    constructor() {
        super()
        this.bullet_count_X = [] // Stores {x, y} of bullets moving right
        // this.bullet_count_Y = [] // Stores {x, y} of bullets moving down
    }
    timer

    randomX
    randomY

    lastX
    lastY

    start() {
        // this.spawnerX = 30
        // this.spawnerY = 250
        // this.spawnerX2 = 250
        // this.spawnerY2 = 30
        this.timer = 50

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
            // this.randomX2 = getRandomNumber(150, 475)

            if (this.randomY !== this.lastY) {
                this.transform.y = this.randomY
                this.bullet_count_X.push({ x: this.transform.x, y: this.transform.y })
                this.lastY = this.randomY
            }

            // if (this.randomX2 !== this.lastX) {
            //     this.spawnerX2 = this.randomX2
            //     this.bullet_count_Y.push({ x: this.spawnerX2, y: this.spawnerY2 })
            //     this.lastX = this.randomX2
            // }

            this.timer = 50
        }
    }
}