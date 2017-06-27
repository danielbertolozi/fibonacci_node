module.exports = function () {
	return {
		memoize: {
			errorAnonymous: "Memoize can't be executed because the target function is anonymous.",
			errorArguments: "Memoize can't be executed because no arguments were provided."
		},
		fib: {
			errorInvalidValue: "Invalid Value.",
			errorInternalError: "Internal Server Error."
		}
	}
}
