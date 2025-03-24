class BulletMovement extends Component {
    constructor(name) {
        super(name)
    }
    update() {
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
}