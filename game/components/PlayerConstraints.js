class PlayerConstraints extends Component {
    update() {
        if (this.playerX < 100) this.playerX = 100
        if (this.playerX > 500) this.playerX = 500
        if (this.playerY < 100) this.playerY = 100
        if (this.playerY > 500) this.playerY = 500
    }
}