import { MyAreaPrimitive2D } from './myAreaPrimitive2D.js';
import { Point } from './type.js';

export class MyCircle extends MyAreaPrimitive2D {
  constructor(
    pointM1: Point,
    pointM2: Point,
    readonly center: Point, // параметризованные свойства, не требуется обьявление в сво-х класса
    readonly radius: number
  ) {
    super(pointM1, pointM2)
  }

  area() {
    const PI = 3.14
    return PI * Math.pow(this.radius, 2)
  }
}

export class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    pointM1: Point,
    pointM2: Point,
    readonly width: number, // параметризованные свойства, не требуется обьявление в сво-х класса
    readonly height: number
  ) {
    super(pointM1, pointM2)
  }

  area() {
    return this.width * this.height
  }
}
