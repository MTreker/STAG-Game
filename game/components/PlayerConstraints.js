class PlayerConstraints extends Component {
    update() {
        console.log(Collisions.circleLine)
        if (Collisions.circleLine == true) {
            if (this.transform.x < 100) this.transform.x = 100
            if (this.transform.x > 500) this.transform.x = 500
            if (this.transform.y < 100) this.transform.y = 100
            if (this.transform.y > 500) this.transform.y = 500
        }
    }
}