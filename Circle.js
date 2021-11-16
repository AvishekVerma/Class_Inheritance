var Shape = require ('./Shape' );

export class Circle extends Shape {
    constructor(radius) {
      this.radius = radius;
      
    }
    calculateArea() {
        return Math.PI*this.radius * this.radius;
      
    }
  }


  module.exports = Circle;