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
  users++
 
  dadosUsuario.mensagem = 'Voce está conectado'
  dadosVisitantes.mensagem = 'Existem '+ users + ' usuários conectados com você neste momento'

  socket.emit('chat message', dadosUsuario)
  socket.broadcast.emit('chat message', dadosVisitantes)

  socket.on('chat message', function(data){
   io.emit('chat message', data);
  //  io.emit('broadcast', data);
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});