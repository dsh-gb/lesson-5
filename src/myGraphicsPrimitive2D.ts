import { Point } from './type.js';

// M1(x, y)           M3(x, y)
// *------------------*    
// |                  |
// *------------------*
// M4(x, y)           M2(x, y) 
// M1 и M2 - две точки прямоугольной области, по которым опред остальные две точки M3 и M4
export abstract class MyGraphicsPrimitive2D {
  readonly pointM1: Point
  readonly pointM2: Point
  readonly pointM3: Point
  readonly pointM4: Point

  constructor(pointM1: Point, pointM2: Point) {
    // если М1 и М2 не валидны, то выбрасываем исключение
    if (!this._validatePoint(pointM1, pointM2)) {
      throw new Error('Некорректные координаты точек прямоугольной области')
    }
    this.pointM1 = pointM1
    this.pointM2 = pointM2
    this.pointM3 = {
      x: pointM2.x,
      y: pointM1.y
    }
    this.pointM4 = {
      x: pointM1.x,
      y: pointM2.y
    }
  }

  // метод перемещения по координате Х
  moveX(distanceX: number) {
    this.pointM1.x += distanceX
    this.pointM2.x += distanceX
    this.pointM3.x += distanceX
    this.pointM4.x += distanceX
  }

  // метод перемещения по координате Y
  moveY(distanceY: number) {
    this.pointM1.y += distanceY
    this.pointM2.y += distanceY
    this.pointM3.y += distanceY
    this.pointM4.y += distanceY
  }

  // приватный метод валидации точек M1 и M2
  // M1 - должна быть левой верхней точкой прямоугольной области
  // M2 - должна быть правой нижней точкой прямоугольной области
  private _validatePoint(pointM1: Point, pointM2: Point): boolean {
    return pointM1.x < pointM2.x && pointM1.y > pointM2.y
  }
}
