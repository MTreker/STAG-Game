class GuardMovement extends Component {

    elapsedTime

    start() {
        this.elapsedTime = 0
    }
    
    update() {
        this.elapsedTime += Time.deltaTime
        this.transform.x = 100 + 100 * Math.sin(this.elapsedTime)
    }
}