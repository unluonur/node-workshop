function Circle(r) {
	this._r = r;
};
Circle.prototype.area = function() {
	return Math.PI*this._r*this._r;
};

module.exports = Circle;
