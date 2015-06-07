function Rectangle(a, b) {
	this._a = a;
	this._b = b;
}
Rectangle.prototype.area = function() {
	return this._a*this._b;
}

module.exports = Rectangle;
