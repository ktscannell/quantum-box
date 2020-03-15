import util from './util';

export default class WaveFunction {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw(time) {
    this.renderMathFunction(time);
  }
  
  renderMathFunction(time) {
    const t = time/1000;
    const n = parseInt(document.getElementById("input-n").value);
    let first = true;

    this.ctx.beginPath();
    for (let x = util.minimumX(); x <= util.maximumX(); x += util.xStep()) {
      
      // non-time dependent function f(x)
      const f = util.maximumY() * Math.sin((n * Math.PI * x) / util.maximumX());
      
      // add time dependency
      const y = Math.cos(t) * f;

      if (first) {
        this.ctx.moveTo(util.mapX(x), util.mapY(y));
        first = false;
      } else {
        this.ctx.lineTo(util.mapX(x), util.mapY(y));
      }
    }
    this.ctx.stroke();
  }
}