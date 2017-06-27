const assert = require("assert");
const memoize = require("../util/memoize")();
const expect = require("chai").expect;

describe("Memoize", function () {
	it ("should keep new function results", function () {
		var oMemoize = new memoize();
		var fnTestFunction = function testFunction (iValue) {
			return 60 + iValue;
		};
		oMemoize.call(fnTestFunction, 4).then(function (iResult) {
			oMemoize.oMemo.should.have.property("testFunction", iValue);
			oMemoize.oMemo.testFunction.should.have.property(iValue, iResult);
		})
		.catch(function (oError) {
			if (oError instanceof Error) {
				throw oError;
			}
			throw new Error(oError);
		});
	});

	it ("should error if function is anonymous", function (fnDone) {
		var oMemoize = new memoize();
		var fnTestFunction = function (iValue) {
			return 60 + iValue;
		};
		oMemoize.call(fnTestFunction, 4).then(function (iResult) {
			throw new error("it should not have success if the given function is anonymous");
		})
		.catch(function (oError) {
			assert.equal(oError.message, "Memoize can't be executed because the target function is anonymous.");
			fnDone();
		});
	});

	it ("should not memo if no parameters were given", function (fnDone) {
		var oMemoize = new memoize();
		var fnTestFunction = function (iValue) {
			return 60 + iValue;
		}
		oMemoize.call(fnTestFunction).then(function (iResult) {
			throw new error("it should not have success if no arguments are provided.");
		})
		.catch(function (oError) {
			assert.equal(oError.message, "Memoize can't be executed because no arguments were provided.");
			fnDone();
		});
	});
});
