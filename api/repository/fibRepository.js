function fibRepository () {}

function _fibonacci (iValue) {
	if (iValue === 0) {
		return 0;
	}
	if (iValue === 1 || iValue === 2) {
		return 1;
	}
	return _fibonacci(iValue - 1) + _fibonacci(iValue - 2);
}

fibRepository.prototype.fibonacci = function fibonacci (iValue) {
	return _fibonacci(iValue);
};

module.exports = function () {
	return fibRepository;
}
