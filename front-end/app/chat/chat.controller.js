// pedido.controller.js
angular
    .module('app')
    .controller('ChatController', ChatController, ['$http']);

function ChatController($http) {
    vm = this
    vm.socket = io('http://localhost:3000/');
    vm.mensagem = ''
    vm.obterDataMensagem =
        function obterDataMensagem() {
            var data = new Date().toISOString().split('T')[0].split('-').reverse().toString().replace(/,/g, '-')
            var hora = new Date().toISOString().split('T')[1].split('.')[0].replace()
            return data + ':' + hora
        }

    vm.data = {
        id: Math.round((Math.random() * 1000000)),
        user: 'Mecanica ' + Math.round((Math.random() * 1000000)),
        mensagem: '',
        dataHora: vm.obterDataMensagem()
    }

    vm.enviarMensagem =
        function enviarMensagem() {
            vm.data.mensagem = vm.mensagem
            vm.data.dataHora = vm.obterDataMensagem()
            vm.socket.emit('chat', vm.data);
            montarMensagemRemetente()
        }

    function montarMensagemRemetente() {
        $('#messages').append('<dd class="pos-left clearfix">' +
            '<div class="circ"></div>' +
            '<div class="time">' + vm.data.dataHora + '</div>' +
            '<div class="events">' +
            '<div class="pull-left">' +
            '<img class="events-object img-rounded" src="../../imagens/unnamed.jpg">' +
            '</div>' +
            '<div class="events-body">' +
            '<h4 class="events-heading">' + vm.data.user + '</h4>' +
            '<p>' + vm.data.mensagem + '</p>' +
            '</div>' +
            '</div>' +
            '</dd>');
        vm.mensagem = ''
    }

    vm.socket.on('chat', function (data) {
        if (data.id !== vm.data.id) {
            montarMensagemDestinatario(data)
        }
    });

    vm.socket.on('load', function (data) {
        montarMensagemDestinatario(data)
    });

    vm.socket.on('login', function (data) {
        montarMensagemDestinatario(data)
    });

    vm.socket.emit('login', vm.data);

    function montarMensagemDestinatario(data) {
        $('#messages').append('<dd class="pos-right clearfix">' +
            '<div class="circ"></div>' +
            '<div class="time">' + data.dataHora + '</div>' +
            '<div class="events">' +
            '<div class="pull-left">' +
            '<img class="events-object img-rounded" src="../../imagens/unnamed.jpg">' +
            '</div>' +
            '<div class="events-body">' +
            '<h4 class="events-heading">' + data.user + '</h4>' +
            '<p>' + data.mensagem + '</p>' +
            '</div>' +
            '</div>' +
            '</dd>');
    }
}
