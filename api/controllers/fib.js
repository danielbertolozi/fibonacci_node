module.exports = function (app) {

	app.param("id", function (oRequest, oResponse, fnNext, iValue) {
		try {
			iValue = Number(iValue);
		} catch (e) {
			oResponse.status(400).json("Error value");
		}
		oRequest.iValue = iValue;
		fnNext();
	});
	
	app.get("/fib/:id", function (oRequest, oResponse) {
		var oRepository = new app.api.repository.fibRepository();
		var oMemoize = new app.api.util.memoize();

		var iValue = oRequest.iValue;
		var sResult = oMemoize.call(oRepository.fibonacci, iValue);

		oResponse.status(200).json(sResult);
	});
};
