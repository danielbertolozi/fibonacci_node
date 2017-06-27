module.exports = function (app) {
	app.get("/fib/{}", function (oRequest, oResponse) {
		var oRepository = new app.api.repository.fibRepository();
		
		oResponse.status(200).json("success");
	});
}
