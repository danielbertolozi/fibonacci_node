var app = require("./api/config/express-config")();

var port = process.env.PORT || 9090;

app.listen(port, function () {
	console.log("API listening @ http://localhost:9090/");	
});
