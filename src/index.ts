import { MyCircle, MyRectangle } from './myFigure.js'
import { Point } from './type.js'

const firstPoint: Point = { x: 5, y: 15 }
const secondPoint: Point = { x: 10, y: 10 }
const center: Point = { x: 6, y: 12 }
const radius = 2
const width = 4
const height = 2

const circle = new MyCircle(firstPoint, secondPoint, center, radius) // создаем новый обьект класса MyCircle

let oldFigur = JSON.parse(JSON.stringify(circle)) // используем для сохранения старых св-в фигуры
console.log('circle: ', oldFigur);

// используем метод area класса MyCircle
console.log(`area circle radius ${circle.radius} `, circle.area())

// используем метод moveX родительского класса MyGraphicsPrimitive2D
circle.moveX(1)
oldFigur = JSON.parse(JSON.stringify(circle))
console.log('cirlce after moveX=1: ', oldFigur)

// используем метод moveY родительского класса MyGraphicsPrimitive2D
circle.moveY(-1)
oldFigur = JSON.parse(JSON.stringify(circle))
console.log('cirlce after moveY=-1: ', oldFigur)

// как тут можно защитить от записи внутреннии св-ва обьекта pointerM1, но оставить доступ для чтения этих св-в? 
// если он обьявлен как private, то доступ для чтения остается только в родительском классе
// если он обьявлен как protected, то доступ для чтения остается только в родительском классе и его подклассах
// если он обьявлен как readonly, то доступ для записи его св-в остался
console.log('circle M1(x, y): ', circle.pointM1) // {x: 6, y: 14}
// circle.pointM1 = {x: 0, y: 14} тут имеем ошибку от TS так как pointM1 обьявлен как readonly
circle.pointM1.x = 0 // но тут ошибки от TS нету мы можем менять св-во х
console.log('circle M1(x, y): ', circle.pointM1) // {x: 0, y: 14}


const rectangle = new MyRectangle(firstPoint, secondPoint, width, height)

oldFigur = JSON.parse(JSON.stringify(rectangle))
console.log('rectangle: ', oldFigur);

// используем метод area класса MyRectangle
console.log(`area rectangle width ${rectangle.width} and height ${rectangle.height}`, rectangle.area())

// используем метод moveX родительского класса MyGraphicsPrimitive2D
rectangle.moveX(1)
oldFigur = JSON.parse(JSON.stringify(rectangle))
console.log('rectangle after moveX=1: ', oldFigur)

// используем метод moveY родительского класса MyGraphicsPrimitive2D
rectangle.moveY(-1)
console.log('rectangle after moveY=-1: ', rectangle)
