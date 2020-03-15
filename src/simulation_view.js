import Simulation from './simulation';

// This class handles the animation and starting and stopping it

export default class SimulationView {
  constructor(ctx) {
    this.ctx = ctx;
    const simulation = new Simulation(ctx);
    this.simulation = simulation;
    this.n = 1
    this.bindEventListeners();
  }

  bindEventListeners() {
    const inputN = document.getElementById('input-n');
    inputN.addEventListener('input', (e) => {
      this.update('n', e.currentTarget.value);
    });
  }

  update(field, value) {
    this[field] = value;
  }

  start() {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    this.simulation.draw(time, this.n);
    this.lastTime = time;
    requestAnimationFrame(this.animate.bind(this));
  }
}
