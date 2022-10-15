import { STEP_SIZE } from '../constants';

type DrawReturn = { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D };

class Canvas {
  constructor() {}

  public draw(htmlElement: HTMLElement | null): DrawReturn {
    const canvas = htmlElement as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.lineWidth = 2;
    ctx.fillStyle = '#aaa';

    for (let x = 0; x < canvas.width; x += STEP_SIZE) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = canvas.height; y > 0; y -= STEP_SIZE) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }

    return { canvas, ctx };
  }
}

export default Canvas;
