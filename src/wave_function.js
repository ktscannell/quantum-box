import util from './util';

export default class WaveFunction {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw() {
    this.renderMathFunction(this.ctx);
  }
  renderMathFunction(ctx, f) {
    let first = true;

    ctx.beginPath();
    for (let x = util.minimumX(); x <= util.maximumX(); x += util.xStep()) {
      // hardcode function for now
      
      const y = Math.sin(x);
      if (first) {
        ctx.moveTo(util.mapX(x), util.mapY(y));
        first = false;
      } else {
        ctx.lineTo(util.mapX(x), util.mapY(y));
      }
    }
    ctx.stroke();
  }
}