import Simulation from './simulation';

// This class handles the animation and starting and stopping it

export default class SimulationView {
  constructor(ctx) {
    this.ctx = ctx;
    const simulation = new Simulation(ctx);
    this.simulation = simulation;
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.simulation.draw(time);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}
