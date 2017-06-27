function memoize () {}

memoize.prototype.oMemo = {};

memoize.prototype.call = function (oFunction, iArgs) {
	if (!oFunction.name) {
		throw new Error("Memoize can't be executed because the target function is anonymous.");
	}
	var oFunctionMemo;
	if (!this.oMemo[oFunction.name]) {
		this.oMemo[oFunction.name] = {};
	}
	oFunctionMemo = this.oMemo[oFunction.name];
	if (oFunctionMemo[iArgs]) {
		return oFunctionMemo[iArgs];
	}
	return oFunctionMemo[iArgs] = oFunction.apply(this, [iArgs]);
}

module.exports = function () {
	return memoize;
}
