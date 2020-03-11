const X_DIMENSION = 1200;
const Y_DIMENSION = 800;

export default class Graph {
  constructor () {
    this.X_DIMENSION = X_DIMENSION;
    this.Y_DIMENSION = Y_DIMENSION;
  }

  draw (ctx) {
    // Sample code for testing
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, 500, 500);
  }
}