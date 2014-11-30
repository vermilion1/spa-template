var config = require('./config');
var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

app.use(serveStatic('./'));
app.listen(config.server.port || 9001);
