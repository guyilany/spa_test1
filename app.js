const http = require('http');
const express = require('express');
const port = process.env.PORT || 3030;
var app = express();
app.use(express.static('./'))
const server = http.createServer(app);
server.listen(port)






