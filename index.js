const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static('public'));


app.get('/', function(req, res) {
        res.sendFile(__dirname + '/index.html');
});
http.listen(3001, function(){
        console.log('listening port 3001');
});
io.on('connection', function(socket){
    console.log('a user connected');
   socket.on('disconnect', function() {
       console.log('user disconnected');
    });
    socket.on('chat messages', function(msg){
       console.log(msg);
        io.emit('chat messages', msg);
   });
});
