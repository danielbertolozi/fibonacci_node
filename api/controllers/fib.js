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
		oMemoize.call(oRepository.fibonacci, iValue).then(function (sResult) {
			oResponse.status(200).json(sResult);
		})
		.catch(function (oError) {
			oResponse.status(500).json("Internal Server Error");
			if (oError instanceof Error) {
				throw oError;
			} else {
				throw new Error(oError);
			}
		});
	});
};
