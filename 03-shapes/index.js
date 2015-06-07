var shapes = require('./shapes');

var circle = new shapes.Circle(10);
var square = new shapes.Square(10);
var rectangle = new shapes.Rectangle(10, 20);

console.log('area of circle is : '+circle.area());
console.log('area of square is : '+square.area());
console.log('area of rectangle is : '+rectangle.area());
