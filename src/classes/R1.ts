import { STEP_SIZE } from '../constants';
import Vector from './Vector';

class R1 {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw(x: number) {
    const vector = new Vector(this.canvas, this.ctx);
    vector.draw(
      0,
      this.canvas.height / 2 + STEP_SIZE / 2,
      x * STEP_SIZE,
      this.canvas.height / 2 + STEP_SIZE / 2,
    );
  }
}

export default R1;
