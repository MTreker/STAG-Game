class Engine{
  static currentScene
  static nextScene

  //Game loop (engine code)
  static tick() {
    if(Engine.nextScene){
      Engine.currentScene = Engine.nextScene
      Engine.nextScene = null
    }
    Engine.currentScene.update() // Update the engine
    Engine.currentScene.draw() // Draw the engine
  }

  static setup() {
      window.addEventListener("keydown", Input.keydown) // Listen for key down events and send them to the Input class
      window.addEventListener("keyup", Input.keyup)     // Listen for key up events and send them to the Input class

      canvas = document.getElementById("canv")  // Get the canvas element
      ctx = canvas.getContext("2d")             // Get the 2d drawing context
  }

  static start(){
    Engine.setup()
    setInterval(Engine.tick, Time.msBetweenFrames) //Start the game loop (engine code)
  }
}