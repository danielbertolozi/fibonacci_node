const constants = require("./constants")();

function memoize () {}

memoize.prototype.oMemo = {};

memoize.prototype.call = function (oFunction, iArgs) {
	return new Promise(function (fnResolve, fnReject) {
		var sFunctionName = oFunction.name;
		if (!sFunctionName) {
			fnReject(constants.memoize.errorAnonymous);
		} else if (iArgs === undefined) {
			fnReject(constants.memoize.errorArguments);
		}
		var oFunctionMemo;
		if (!this.oMemo[sFunctionName]) {
			this.oMemo[sFunctionName] = {};
		}
		oFunctionMemo = this.oMemo[sFunctionName];
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
