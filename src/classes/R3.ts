import Vector from './Vector';
import { STEP_SIZE } from '../constants/index';

class R3 {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawAxes() {
    const xCenter = STEP_SIZE * (this.canvas.width / STEP_SIZE / 2);
    const yCenter = STEP_SIZE * (this.canvas.height / STEP_SIZE / 2);
    this.ctx.moveTo(xCenter, yCenter);
    this.ctx.arc(xCenter, yCenter, 4, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.moveTo(xCenter, yCenter);
    this.ctx.lineTo(xCenter, 0);
    this.ctx.moveTo(xCenter, yCenter);
    this.ctx.lineTo(this.canvas.width, yCenter);
    this.ctx.moveTo(xCenter, yCenter);
    this.ctx.lineTo(STEP_SIZE * 3, STEP_SIZE * 8);
    this.ctx.stroke();
  }

  draw(x: number, y: number, z: number) {
    const xCenter = this.canvas.width / 2;
    const yCenter = this.canvas.height / 2;
    const vector = new Vector(this.canvas, this.ctx);
    const calcZ = {
      x: xCenter - STEP_SIZE * z,
      y: yCenter + STEP_SIZE * z,
    };
    const calcX = {
      x: calcZ.x + STEP_SIZE * x,
      y: calcZ.y,
    };
    const calcY = {
      x: calcX.x,
      y: calcX.y - y * STEP_SIZE,
    };

    vector.draw(xCenter, yCenter, calcY.x, calcY.y);
  }
}

export default R3;
