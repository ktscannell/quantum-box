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

  We'll refer to the mathematics coordinate system as the "logical"
  coordinate system, and the coordinate system for the canvas as the
  "physical" coordinate system.

  The functions just below set up a mapping between the two coordinate
  systems.

  They're defined as functions, so that one wanted to, they could read
  ther values from a from instead of having them hard-coded.
 
 */

  HEIGHT: 800,
  WIDTH: 1200,

  // Returns the right boundary of the logical viewport:
  maximumX() {
    return 12;
  },

  // Returns the left boundary of the logical viewport:
  minimumX() {
    return -12;
  },

  // Returns the top boundary of the logical viewport:
  maximumY() {
    return (this.maximumX() * this.HEIGHT) / this.WIDTH;
  },

  // Returns the bottom boundary of the logical viewport:
  minimumY() {
    return (this.minimumX() * this.HEIGHT) / this.WIDTH;
  },

  // Returns the physical x-coordinate of a logical x-coordinate:
  mapX(x) {
    return ((x - this.minimumX()) /
      (this.maximumX() - this.minimumX())) * this.WIDTH;
  },

  // Returns the physical y-coordinate of a logical y-coordinate:
  mapY(y) {
    return this.HEIGHT - ((y - this.minimumY()) /
      (this.maximumX() - this.minimumY())) * this.HEIGHT;
  }
}

export default util;