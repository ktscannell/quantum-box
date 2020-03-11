import '../assets/stylesheets/reset.css';
import '../assets/stylesheets/main.css';
import Graph from "./graph";
import Simulation from "./simulation";
import SimulationView from "./simulation_view";

document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementById("myCanvas");
  const graph = new Graph();
  canvasElement.width = graph.X_DIMENSION;
  canvasElement.height = graph.Y_DIMENSION;

  const ctx = canvasElement.getContext("2d");
  const simulation = new Simulation();
  new SimulationView(simulation, ctx).start();
});


