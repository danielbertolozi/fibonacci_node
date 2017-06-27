const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

module.exports = function () {
	var app = express();

	app.use(bodyParser.json());

	consign()
		.include("./api/controllers")
		.then("./api/repository")
		.then("./api/util")
		.into(app);

	return app;
}
