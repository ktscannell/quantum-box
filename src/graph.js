import util from './util';

export default class Graph {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw() {
    this.drawAxes(this.ctx);
  }

  // Returns the distance between ticks on the X axis:
  xTickDelta() {
    return 0.5;
  }

  // Returns the distance between ticks on the Y axis:
  yTickDelta() {
    return 1;
  }

  // DrawAxes draws the X ad Y axes, with tick marks.
  drawAxes() {
    this.ctx.save();
    this.ctx.lineWidth = 2;
    // +Y axis
    this.ctx.beginPath();
    this.ctx.moveTo(util.mapX(0), util.mapY(0));
    this.ctx.lineTo(util.mapX(0), util.mapY(util.maximumY()));
    this.ctx.stroke();

    // -Y axis
    this.ctx.beginPath();
    this.ctx.moveTo(util.mapX(0), util.mapY(0));
    this.ctx.lineTo(util.mapX(0), util.mapY(util.minimumY()));
    this.ctx.stroke();

    // Y axis tick marks
    const yDelta = this.yTickDelta();
    for (let i = 1; (i * yDelta) < util.maximumY(); i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(util.mapX(0) - 5, util.mapY(i * yDelta));
      this.ctx.lineTo(util.mapX(0) + 5, util.mapY(i * yDelta));
      this.ctx.stroke();
    }

    for (let i = 1; (i * yDelta) > util.minimumY(); i--) {
      this.ctx.beginPath();
      this.ctx.moveTo(util.mapX(0) - 5, util.mapY(i * yDelta));
      this.ctx.lineTo(util.mapX(0) + 5, util.mapY(i * yDelta));
      this.ctx.stroke();
    }

    // +X axis
    this.ctx.beginPath();
    this.ctx.moveTo(util.mapX(0), util.mapY(0));
    this.ctx.lineTo(util.mapX(util.maximumX()), util.mapY(0));
    this.ctx.stroke();

    // -X axis
    this.ctx.beginPath();
    this.ctx.moveTo(util.mapX(0), util.mapY(0));
    this.ctx.lineTo(util.mapX(util.minimumX()), util.mapY(0));
    this.ctx.stroke();

    // X tick marks
    const xDelta = this.xTickDelta();
    for (let i = 1; (i * xDelta) < util.maximumX(); i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(util.mapX(i * xDelta), util.mapY(0) - 5);
      this.ctx.lineTo(util.mapX(i * xDelta), util.mapY(0) + 5);
      this.ctx.stroke();
    }

    for (let i = 1; (i * xDelta) > util.minimumX(); i--) {
      this.ctx.beginPath();
      this.ctx.moveTo(util.mapX(i * xDelta), util.mapY(0) - 5);
      this.ctx.lineTo(util.mapX(i * xDelta), util.mapY(0) + 5);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
}
