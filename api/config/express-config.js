var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");

module.exports = function () {
	var app = express();

	app.use(bodyParser.json());

	consign({
		ignore: [/.+spec.js/]	
	})
	.include("./api/controllers")
	.then("./api/repository")
	.then("./api/util")
	.into(app);

	return app;
}
