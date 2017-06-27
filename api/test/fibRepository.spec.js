const assert = require("assert");
const fibRepository = require("../repository/fibRepository")();
const expect = require("chai").expect;
const oFib = new fibRepository();

console.log(fibRepository.fibonacci);
describe("The Fibonacci Repository", function () {
	it ("should return 1 for entry value 1", function () {
		const iResult = oFib.fibonacci(1);
		assert.equal(iResult, 1);
	});	
	it ("should return 1 for entry value 2", function () {
		const iResult = oFib.fibonacci(2);
		assert.equal(iResult, 1);
	});
	it ("should return 0 for entry value 0", function () {
		const iResult = oFib.fibonacci(0);
		assert.equal(iResult, 0);
	});
});
