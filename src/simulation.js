import Graph from "./graph";

export default class Simulation {
  constructor() {
    this.graph = new Graph();
  }

  draw(ctx) {
    this.graph.draw(ctx);
  }
}