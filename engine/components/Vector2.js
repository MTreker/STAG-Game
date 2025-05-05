class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static Zero = new Vector2(0, 0)

    equals(other){
        return this.x === other.x && this.y == other.y
      }
    static fromGameObject(gameObject) {
        return new Vector2(gameObject.transform.x, gameObject.transform.y)
    }
    length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    normalized(){
        if(this.x == 0 && this.y == 0)
          return new Vector2(this.x, this.y)
        let length = this.length()
        return new Vector2(this.x/length, this.y/length)
      }
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y)
    }
    minus(other) {
        return new Vector2(this.x - other.x, this.y - other.y)
    }
    dot(other) {
        return this.x * other.x + this.y * other.y
    }
    scaled(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar)
    }
    negate() {
        return new Vector2(-this.x, -this.y)
    }
    perp() {
        return new Vector2(this.y, -this.x)
    }
    get dom() {
        return new DOMPoint(this.x, this.y)
    }
}

console.assert(new Vector2(1, 2).x == 1)
console.assert(new Vector2(1, 2).y == 2)

console.assert(Vector2.Zero.x == 0)
console.assert(Vector2.Zero.y == 0)

console.assert(new Vector2(1, 2) != new Vector2(1, 2))
console.assert(new Vector2(1, 2).equals(new Vector2(1, 2)))
console.assert(!new Vector2(1, 2).equals(new Vector2(1, 3)))
console.assert(!new Vector2(1, 2).equals(new Vector2(3, 2)))

let gameObject = new GameObject()
gameObject.transform.position = new Vector2(3, 4)
console.assert(Vector2.fromGameObject(gameObject).equals(new Vector2(3,4)))

console.assert(new Vector2(3, 4).length() == 5)

console.assert(new Vector2(3, 4).normalized().equals(new Vector2(3 / 5, 4 / 5)))

console.assert(new Vector2(1, 2).add(new Vector2(3, 4).equals(new Vector2(4, 6))))

console.assert(new Vector2(1, 2).minus(new Vector2(3, 4).equals(new Vector2(-2, -2))))

console.assert(new Vector2(1, 2).dot(new Vector2(3, 4)) == 11)

console.assert(new Vector2(1, 2).scaled(2).equals(new Vector2(2, 4)))

console.assert(new Vector2(1, 2).negate().equals(new Vector2(-1, -2)))

console.assert(new Vector2(1, 2).perp().equals(new Vector2(2, -1)) || new Vector2(1, 2).perp().equals(new Vector2(-2, 1)))

console.assert(new Vector2(1, 2).dom instanceof DOMPoint)