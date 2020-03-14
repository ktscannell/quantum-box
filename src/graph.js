import util from './util';

export default class Graph {
  constructor() {
  }

  draw(ctx) {
    // Sample code for testing
    this.drawAxes(ctx);
  }

  // Returns the distance between ticks on the X axis:
  xTickDelta() {
    return 1;
  }

  // Returns the distance between ticks on the Y axis:
  yTickDelta() {
    return 1;
  }


  // DrawAxes draws the X ad Y axes, with tick marks.
  drawAxes(ctx) {
    ctx.save();
    ctx.lineWidth = 2;
    // +Y axis
    ctx.beginPath();
    ctx.moveTo(util.mapX(0), util.mapY(0));
    ctx.lineTo(util.mapX(0), util.mapY(util.maximumY()));
    ctx.stroke();

    // -Y axis
    ctx.beginPath();
    ctx.moveTo(util.mapX(0), util.mapY(0));
    ctx.lineTo(util.mapX(0), util.mapY(util.minimumY()));
    ctx.stroke();

    // Y axis tick marks
    const yDelta = this.yTickDelta();
    for (let i = 1; (i * yDelta) < util.maximumY(); i++) {
      ctx.beginPath();
      ctx.moveTo(util.mapX(0) - 5, util.mapY(i * yDelta));
      ctx.lineTo(util.mapX(0) + 5, util.mapY(i * yDelta));
      ctx.stroke();
    }

    for (let i = 1; (i * yDelta) > util.minimumY(); i--) {
      ctx.beginPath();
      ctx.moveTo(util.mapX(0) - 5, util.mapY(i * yDelta));
      ctx.lineTo(util.mapX(0) + 5, util.mapY(i * yDelta));
      ctx.stroke();
    }

    // +X axis
    ctx.beginPath();
    ctx.moveTo(util.mapX(0), util.mapY(0));
    ctx.lineTo(util.mapX(util.maximumX()), util.mapY(0));
    ctx.stroke();

    // -X axis
    ctx.beginPath();
    ctx.moveTo(util.mapX(0), util.mapY(0));
    ctx.lineTo(util.mapX(util.minimumX()), util.mapY(0));
    ctx.stroke();

    // X tick marks
    const xDelta = this.xTickDelta();
    for (let i = 1; (i * xDelta) < util.maximumX(); i++) {
      ctx.beginPath();
      ctx.moveTo(util.mapX(i * xDelta), util.mapY(0) - 5);
      ctx.lineTo(util.mapX(i * xDelta), util.mapY(0) + 5);
      ctx.stroke();
    }

    for (let i = 1; (i * xDelta) > util.minimumX(); i--) {
      ctx.beginPath();
      ctx.moveTo(util.mapX(i * xDelta), util.mapY(0) - 5);
      ctx.lineTo(util.mapX(i * xDelta), util.mapY(0) + 5);
      ctx.stroke();
    }
    ctx.restore();
  }
}