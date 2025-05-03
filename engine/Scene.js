//Game Engine class
class Scene {
  started
  constructor(backgroundColor = "white") {
    this.backgroundColor = backgroundColor
    this.started = false

    if (typeof Camera !== "undefined")
      this.addGameObject(new GameObject("Camera"))
  }

  gameObjects = []

  start() {
    // for (let gameObject of this.gameObjects) {
    //   gameObject.start()
    // }
    this.gameObjects.forEach(g => g.start())
  }

  // canvas.width = window.innerWidth
  // canvas.height = window.innerHeight
  // ctx.clearRect(0, 0, canvas.width, canvas.height)

  // ctx.fillStyle = this.backgroundColor
  // ctx.beginPath()
  // ctx.rect(0, 0, canvas.width, canvas.height)
  // ctx.fill()

  // // for (let gameObject of this.gameObjects) {
  // //   gameObject.draw()
  // // }
  // this.gameObjects.forEach(g=>g.draw())

  draw() {
    ctx.save()
    {
      //If the camera class is defined, then respond to the camera
      if (typeof Camera !== "undefined") {
        ctx.setTransform(Camera.getTransform())
      }

      //Sort the game objects based on their layer number
      //Note that we use toSorted since it is non-mutating
      let sorted = this.gameObjects.toSorted((a, b) => a.layer - b.layer)
      sorted.forEach(g => g.draw())


    }
    ctx.restore()

    let xRatio = canvas.width / Camera.main.transform.w
    let yRatio = canvas.height / Camera.main.transform.h
    let ratio = Math.min(xRatio, yRatio)

    ctx.fillStyle = "gray"
    ctx.beginPath()
    //Add letterboxes
    if (xRatio > yRatio) { //If xRatio > yRatio
      //Vertical bars
      let size = (canvas.width - Camera.main.transform.w * ratio) / 4
      ctx.rect(0, 0, size, canvas.height)
      ctx.rect(canvas.width - size, 0, size, canvas.height)
    }
    else { //If yRatio > xRatio
      //Horizontal bars
      let size = (canvas.height - Camera.main.transform.h * ratio) / 2
      ctx.rect(0, 0, canvas.width, size)
      ctx.rect(0, canvas.height - size, canvas.width, size)
    }
    ctx.fill()

    //Once we are back in screen space, draw the sorted UI game objects
    this.gameObjects.toSorted((a, b) => a.layer - b.layer).forEach(g => g.drawUI())
  }

  update() {
    if (!this.started) {
      this.started = true
      this.start()
    }

    // for(let gameObject of this.gameObjects){
    //   if(!gameObject.started){
    //     gameObject.started = true
    //     gameObject.start()
    //   }
    // }
    this.gameObjects.filter(g => !g.started).forEach(g => { g.start(); g.started = true; })
    this.gameObjects.forEach(g => g.update())

    this.gameObjects = this.gameObjects.filter(g => !g.markForDelete)
  }

  addGameObject(gameObject, x = 0, y = 0, r = 1, h = 1) {
    this.gameObjects.push(gameObject)
    gameObject.transform.x = x
    gameObject.transform.y = y
    gameObject.transform.r = r
    gameObject.transform.h = h
  }

  findGameObject(name) {
    for (let gameObject of this.gameObjects) {
      if (gameObject.name == name) {
        return gameObject
      }
    }
    return null
  }

  findGameObjects(name) {
    let toReturn = []
    for (let gameObject of this.gameObjects) {
      if (gameObject.name == name) {
        toReturn.push(gameObject)
      }
    }
    return toReturn
  }
}