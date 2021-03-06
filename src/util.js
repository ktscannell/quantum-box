const util = {
  /*
  The origin (0,0) of the canvas is the upper left:

  (0,0)
    --------- +X
   |
   |
   |
   |
   +Y

  Positive x coordinates go to the right, and positive y coordinates go down.

  The origin in mathematics is the "center," and positive y goes *up*.

  We'll refer to the mathematics coordinate system as the "math"
  coordinate system, and the coordinate system for the canvas as the
  "canvas" coordinate system.

  The functions just below set up a mapping between the two coordinate
  systems.

  They're defined as functions, so that one wanted to, they could read
  ther values from a from instead of having them hard-coded.
 
 */

  HEIGHT: 600,
  WIDTH: 1000,

  // Returns the right boundary of the math viewport:
  maximumX() {
    return 10;
  },

  // Returns the left boundary of the math viewport:
  minimumX() {
    return 0;
  },

  // Returns the top boundary of the math viewport:
  maximumY() {
    return (this.maximumX() * this.HEIGHT) / this.WIDTH;
  },

  // Returns the bottom boundary of the math viewport:
  minimumY() {
    return (-1 * this.maximumX() * this.HEIGHT) / this.WIDTH;
  },

  xStep() {
    return (this.maximumX() - this.minimumX()) / this.WIDTH; 
  },

  // Returns the canvas x-coordinate of a math x-coordinate:
  mapX(x) {
    return ((x - this.minimumX()) /
      (this.maximumX() - this.minimumX())) * this.WIDTH;
  },

  // Returns the canvas y-coordinate of a math y-coordinate:
  mapY(y) {
    return this.HEIGHT - ((y - this.minimumY()) /
      (this.maximumY() - this.minimumY())) * (this.HEIGHT - 5);
  }
}

export default util;