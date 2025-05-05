class Collisions {
  static inCollisionCircle(x1, y1, r1, x2, y2, r2) {
    let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    return distance < r1 + r2
  }
  static inCollision(gameObject1, gameObject2) {
    if (gameObject1.findComponent(Circle) && gameObject2.findComponent(Circle)) return Collisions.circleCircle(gameObject1, gameObject2)
    if (gameObject1.findComponent(Circle) && gameObject2.findComponent(Line)) return Collisions.circleLine(gameObject1, gameObject2)
      if (gameObject1.findComponent(Line) && gameObject2.findComponent(Circle)) return Collisions.lineCircle(gameObject1, gameObject2)
  }
  static circleCircle(one, two) {
    return Vector2.fromGameObject(one).minus(Vector2.fromGameObject(two)).length() < one.transform.r + two.transform.r
  }
  static circleLine(one, two) {
    let circleCenter = Vector2.fromGameObject(one)
    let radius = one.transform.r
    let [point1, point2] = Collisions.getEndsOfLine(two)

    return Collisions.isCircleIntersectingLineSegment(circleCenter, radius, point1, point2)
  }
  static lineCircle(one, two) {
    return Collisions.circleLine(two, one)
  }
  static getEndsOfLine(gameObject) {
    let point1 = new Vector2(gameObject.transform.x, gameObject.transform.y)
    let point2 = new Vector2(gameObject.transform.x2, gameObject.transform.y2)

    return [point1, point2]
  }
  static findClosestPointOnInfiniteLine(point, point1, point2) {
    let pointMinusOne = point.minus(point1)
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let pointOnInfiniteLine = point1.add(tangentNormalized.scaled(tangentNormalized.dot(pointMinusOne)))

    return pointOnInfiniteLine
  }
  static findClosestPointOnLineSegment(point, point1, point2) {
    let pointOnLine = this.findClosestPointOnInfiniteLine(point, point1, point2)
    let tangent = point2.minus(point1)
    let tangentNormalized = tangent.normalized()
    let lengthOfLine = point2.minus(point1).length()
    let toPoint = pointOnLine.minus(point1)
    let toPointLength = tangentNormalized.dot(toPoint)

    if (toPointLength < 0) return point1
    if (toPointLength > lengthOfLine) return point2
    return pointOnLine
  }
  static isCircleIntersectingLineSegment(circleCenter, radius, point1, point2) {
    let closestPoint = this.findClosestPointOnLineSegment(circleCenter, point1, point2)
    let difference = circleCenter.minus(closestPoint)
    let length = difference.length()
    if (length < radius) return true
    return false
  }

}