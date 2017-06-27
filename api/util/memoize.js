function memoize () {}

memoize.oMemo = {};

memoize.prototype.call = function (oFunction, iArgs) {
	if (!oFunction.name) {
		throw new Error("Memoize can't be executed because the target function is anonymous.");
	}
	var oFunctionMemo = this.oMemo[oFunction.name];
	if (oFunctionMemo[oValue]) {
		return oFunctionMemo[oValue];
	}
	return oFunctionMemo[oValue] = oFunction.apply(this, oValue);
}

module.exports = function () {
	return memoize;
}
