class PlayerConstraints extends Component {
    update() {
        let nline = Engine.currentScene.findGameObject("North Wall Game Object")
        let eline = Engine.currentScene.findGameObject("East Wall Game Object")
        let sline = Engine.currentScene.findGameObject("South Wall Game Object")
        let wline = Engine.currentScene.findGameObject("West Wall Game Object")
        let circle = Engine.currentScene.findGameObject("Player Game Object")
        
        if (Collisions.circleLine(circle, nline) == true) {
            if(circle.transform.y < 100) this.transform.y = 100
        }
        if (Collisions.circleLine(circle, eline) == true) {
            if(circle.transform.x > 500) this.transform.x = 500
        }
        if (Collisions.circleLine(circle, sline) == true) {
            if(circle.transform.y > 500) this.transform.y = 500
        }
        if (Collisions.circleLine(circle, wline) == true) {
            if(circle.transform.x < 100) this.transform.x = 100
        }
    }
}