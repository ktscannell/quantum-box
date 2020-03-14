import Graph from './graph';
import WaveFunction from './wave_function';

export default class Simulation {
  constructor(ctx) {
    this.graph = new Graph(ctx);
    this.waveFunction = new WaveFunction(ctx);
  }

  draw(ctx) {
    this.graph.draw(ctx);
    this.waveFunction.draw(ctx);
  }
}