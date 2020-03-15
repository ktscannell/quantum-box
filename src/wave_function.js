import util from './util';

export default class WaveFunction {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw(time, n) {
    const t = time / 1000;
    this.renderRealWaveFunction(t, n);
    this.renderImaginaryWaveFunction(t, n);
  }

  // This part of the wave equation is the same for both the real and 
  // imaginary parts
  timeIndependentWaveEquation(n, x) {
    return util.maximumY() * Math.sin((n * Math.PI * x) / util.maximumX());
  }

  // given a value for time and energy level, render the real part of 
  // the wave function
  renderRealWaveFunction(t, n) {
    // this is the real part of the solution to the time dependent schrodinger's
    // equation for the particle in a box in 1-d, normalized to fit the graph
    const f = x => (
      Math.cos(t) * this.timeIndependentWaveEquation(n, x)
    );

    this.renderMathFunction(f, 'red');
  }

  // this is identical to above, but it renders the imaginary part of the func
  renderImaginaryWaveFunction(t, n) {
    const f = x => (
      -1 * Math.sin(t) * this.timeIndependentWaveEquation(n, x)
    );
    
    this.renderMathFunction(f, 'blue');
  }
  
  renderMathFunction(f, color) {
    // const t = time/1000;
    let first = true;

    this.ctx.beginPath();
    for (let x = util.minimumX(); x <= util.maximumX(); x += util.xStep()) {
      const y = f(x);

      if (first) {
        this.ctx.moveTo(util.mapX(x), util.mapY(y));
        first = false;
      } else {
        this.ctx.lineTo(util.mapX(x), util.mapY(y));
      }
    }
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
  }
}