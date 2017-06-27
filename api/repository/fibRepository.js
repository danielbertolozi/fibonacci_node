function fibRepository () {}

function _fibonacci (iValue) {

}

fibRepository.prototype.fibonacci = function (iValue) {
	return _fibonacci(iValue);
};

module.exports = function () {
	return fibRepository;
}
