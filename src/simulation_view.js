import Simulation from './simulation';

export default class SimulationView {
  constructor(ctx) {
    this.ctx = ctx;
    const simulation = new Simulation(ctx);
    this.simulation = simulation;
  }

  start() {
    this.simulation.draw(this.ctx);
  }
}
