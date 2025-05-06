class ReflectLine extends ReflectMain {
    constructor(gravity = 0) {
        super(gravity)
        this.lastCollision
    }
    update() {
        this.lastCollision = undefined

        let originalTransform = new Vector2(this.transform.x, this.transform.y)

        this.transform.x += this.vx * Time.deltaTime
        this.vy += this.gravity * Time.deltaTime
        this.transform.y += this.vy * Time.deltaTime

        let physicsStatics = Engine.currentScene.gameObjects.filter(go => go.findComponent(physicsStatics))
        for (let physicsStatic of physicsStatics) {
            if (Physics.resolvePrecise(originalTransform, this.parent, physicsStatic))
                this.lastCollision = physicsStatic
        }
        if (this.lastCollision) {
            let N = Line2.fromGameObject(this.lastCollision).normal()
            let speed = new Vector2(this.vx, this.vy).length()
            let V = new Vector2(this.vx, this.vy).normalized()
            if (V.dot(N) >= 1) N = N.scaled(-1)
            let R = V.minus(N.scaled(2 * V.dot(N)))
            this.vx = R.x * speed * .9
            this.vy = R.y * speed * .9
        }
    }
}