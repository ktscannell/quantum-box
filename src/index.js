import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/main.css';
import util from './util';
import Simulation from './simulation';
import SimulationView from './simulation_view';

document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('myCanvas');
  canvasElement.width = util.WIDTH;
  canvasElement.height = util.HEIGHT;

  const ctx = canvasElement.getContext('2d');
  const simulation = new Simulation();
  new SimulationView(simulation, ctx).start();
});


