export default class SimulationView {
  constructor(simulation, ctx) {
    this.ctx = ctx;
    this.simulation = simulation;
  }

  start() {
    this.simulation.draw(this.ctx);
  }
}