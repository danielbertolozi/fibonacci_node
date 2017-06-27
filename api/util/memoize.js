function memoize () {}

memoize.prototype.oMemo = {};

memoize.prototype.call = function (oFunction, iArgs) {
	return new Promise(function (fnResolve, fnReject) {
		if (!oFunction.name) {
			fnReject("Memoize can't be executed because the target function is anonymous.");
		}
		var oFunctionMemo;
		if (!this.oMemo[oFunction.name]) {
			this.oMemo[oFunction.name] = {};
		}
		oFunctionMemo = this.oMemo[oFunction.name];
		if (oFunctionMemo[iArgs]) {
			fnResolve(oFunctionMemo[iArgs]);
		}
		oFunctionMemo[iArgs] = oFunction.apply(this, [iArgs]);
		fnResolve(oFunctionMemo[iArgs]);
	}.bind(this));
}

module.exports = function () {
	return memoize;
}
