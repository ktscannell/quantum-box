import Graph from './graph';
import WaveFunction from './wave_function';
import util from './util';

// This class holds the wavefunction and graph and is in charge of drawing 
// everything that is stationary for each frame of the animation

export default class Simulation {
  constructor(ctx) {
    this.ctx = ctx;
    this.graph = new Graph(ctx);
    this.waveFunction = new WaveFunction(ctx);
  }

  draw(time) {
    this.ctx.clearRect(0, 0, util.WIDTH, util.HEIGHT);
    this.graph.draw();
    this.waveFunction.draw(time);
  }
}