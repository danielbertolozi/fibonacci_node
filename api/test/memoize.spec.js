const assert = require("assert");
const constants = require("../util/constants")();
const memoize = require("../util/memoize")();
const expect = require("chai").expect;

describe("Memoize", function () {

	beforeEach(function () {
		this.oMemoize = new memoize();
	});

	it ("should keep new function results", function () {
		var fnTestFunction = function (iValue) {
			return 60 + iValue;
		};
		this.oMemoize.call(fnTestFunction, 4).then(function (iResult) {
			this.oMemoize.oMemo.should.have.property("testFunction", iValue);
			this.oMemoize.oMemo.testFunction.should.have.property(iValue, iResult);
		})
		.catch(function (oError) {
			if (oError instanceof Error) {
				throw oError;
			}
			throw new Error(oError);
		});
	});

	it ("should not memo if no parameters were given", function (fnDone) {
		var fnTestFunction = function (iValue) {
			return 60 + iValue;
		};
		this.oMemoize.call(fnTestFunction, undefined).then(function (iResult) {
			throw new error("it should not have success if no arguments are provided.");
			fnDone();
		})
		.catch(function (oError) {
			assert.equal(oError, constants.memoize.errorArguments);
			fnDone();
		});
	});

	it ("should error if function is anonymous", function (fnDone) {
		var oTestObject = {};
		oTestObject.fnTestFunction = function (iValue) {
			return 60 + iValue;
		};
		this.oMemoize.call(oTestObject.fnTestFunction, 4).then(function (iResult) {
			throw new error("it should not have success if the given function is anonymous");
			fnDone();
		})
		.catch(function (oError) {
			assert.equal(oError, constants.memoize.errorAnonymous);
			fnDone();
		});
	});
});
