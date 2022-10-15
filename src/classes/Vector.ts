class Vector {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw(x1: number, y1: number, x2: number, y2: number) {
    // line
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    // triangle r2
    // this.ctx.moveTo(x2, y2);
    // this.ctx.lineTo(x2 - 10, y2 + 9);
    // this.ctx.moveTo(x2, y2);
    // this.ctx.lineTo(x2 - 15, y2 + 3);
    // TRIANGLE R3
    this.ctx.moveTo(x2, y2);
    this.ctx.lineTo(x2 - 5, y2 - 15);
    this.ctx.moveTo(x2, y2);
    this.ctx.lineTo(x2 - 15, y2 - 3);
    // 		canvas_arrow(ctx, 10, 30, 200, 150);
    // canvas_arrow(ctx, 100, 200, 400, 50);
    // canvas_arrow(ctx, 200, 30, 10, 150);
    // canvas_arrow(ctx, 400, 200, 100, 50);
    // ctx.stroke();

    // function canvas_arrow(context, fromx, fromy, tox, toy) {
    //   var headlen = 10; // length of head in pixels
    //   var dx = tox - fromx;
    //   var dy = toy - fromy;
    //   var angle = Math.atan2(dy, dx);
    //   context.moveTo(fromx, fromy);
    //   context.lineTo(tox, toy);
    //   context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    //   context.moveTo(tox, toy);
    //   context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    // }

    this.ctx.stroke();
  }
}

export default Vector;
