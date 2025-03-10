//Game Engine class
class Scene {
  gameObjects = []
  start() {

  }
  draw() {

  }
  update() {

  }
  
  findGameObject(name){
    for(let gameObject of this.gameObjects){
      if(gameObject.name == name){
        return gameObject
      }
    }
    return null
  }

  findGameObjects(name){
    let toReturn = []
    for(let gameObject of this.gameObjects){
      if(gameObject.name == name){
        toReturn.push(gameObject)
      }
    }
    return toReturn
  }
}