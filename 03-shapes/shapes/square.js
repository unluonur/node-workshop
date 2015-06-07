function Square(a) {
	this._a = a;
};
Square.prototype.area = function() {
	return this._a*this._a;
};

module.exports = Square;
