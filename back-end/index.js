var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var users = 0

app.get('/', function(req, res){
  res.sendfile('index.html');
});

dataChat = {}

var dadosUsuario = {}
var dadosVisitantes = {}

io.on('connection', function(socket){
  socket.on('chat', function(data){
   io.emit('chat', data);
  });

  socket.on('login', function(data){
    data.mensagem = 'usuario logado'
    io.emit('login', data)
  })

   socket.on('load', function(data){
    data.mensagem = 'usuario na sala de chat'
    io.emit('chat', data)
  })

  socket.on('disconnect', function(data) {
      io.emit('disconnect', data)
		});
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});