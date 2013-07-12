/*global require, __dirname*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    cons = require('consolidate');

io.sockets.on('connection', function (socket) {
    'use strict';
    socket.emit('send test', { msg : 'socket.io connected' });
});

app.configure(function() {
    'use strict';
    app.use(express.static(__dirname + '/public'));
    app.engine('html', cons.handlebars);
});

app.get('/', function(req, res) {
    'use strict';
    res.render('index.html', {
        msgPart1: 'handlebars',
        msgPart2: 'is working'
    });
});

server.listen(3000);

