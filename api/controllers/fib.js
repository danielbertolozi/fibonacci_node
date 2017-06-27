module.exports = function (app) {
	var oMemoize = new app.api.util.memoize();
	var oRepository = new app.api.repository.fibRepository();

	app.param("id", function (oRequest, oResponse, fnNext, iValue) {
		if (!Number.isInteger(iValue)) {
			oResponse.status(400).json("Error value");
		}
		oRequest.iValue = iValue;
		fnNext();
	});
	
	app.get("/fib/:id", function (oRequest, oResponse) {
		var iValue = oRequest.iValue;
		var sResult = oMemoize.call(oRepository.fibonacci, iValue);
		oResponse.status(200).json("success");
	});
}
