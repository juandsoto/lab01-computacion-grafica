import Vector from './Vector';
import { STEP_SIZE } from '../constants';

class R2 {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawAxes() {
    this.ctx.moveTo(0, this.canvas.height);
    this.ctx.lineTo(0, 0);
    this.ctx.moveTo(0, this.canvas.height);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.stroke();
  }

  draw(x: number, y: number) {
    const vector = new Vector(this.canvas, this.ctx);
    vector.draw(
      0,
      this.canvas.height,
      x * STEP_SIZE,
      this.canvas.height - y * STEP_SIZE,
    );
  }
}

export default R2;
