import { MyGraphicsPrimitive2D } from './myGraphicsPrimitive2D.js';

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  abstract area(): number
}
