const should = require("should");
const chai = require("chai");
const request = require("supertest");

describe("Fibonacci Controller", function () {
	it("should return error when trying to input invalid values", function (fnDone) {
		const sInvalidValue = "Hello, I'm Invalid!";
		const sUrl = "http://localhost:9090";

		request(sUrl)
			.get("/fib/" + sInvalidValue)
			.send()
			.end(function (oError, oResponse) {
				if (oError) {
					throw oError;
				}
				oResponse.should.have.property("status", 500);
				fnDone();
		});
	});

	it("should return the correct output (Value used: 9 => 34)", function (fnDone) {
		const iValue = 9;
		const sUrl = "http://localhost:9090";

		request(sUrl)
			.get("/fib/" + iValue)
			.send()
			.end(function (oError, oResponse) {
				if (oError) {
					throw oError;
				}
				oResponse.body.should.equal(34);
				fnDone();
		});
	});
});
