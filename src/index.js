import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/main.css';
import '../assets/stylesheets/sidebar.css';
import util from './util';
import Simulation from './simulation';
import SimulationView from './simulation_view';

document.addEventListener('DOMContentLoaded', () => {
  const canvasElement = document.getElementById('myCanvas');
  canvasElement.width = util.WIDTH;
  canvasElement.height = util.HEIGHT;

  const ctx = canvasElement.getContext('2d');
  new SimulationView(ctx).start();
});


