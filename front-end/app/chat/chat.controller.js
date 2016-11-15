// pedido.controller.js
angular
    .module('app')
    .controller('ChatController', ChatController, ['$http']);

function ChatController($http) {
    vm = this
    vm.socket = io('http://localhost:3000/');
    vm.mensagem = ''
    vm.msgChat = ''
    vm.user = 'Raphael'
    vm.obterDataMensagem = 
        function obterDataMensagem(){
            var data = new Date();
            
            var dia     = data.getDate();           // 1-31
            var dia_sem = data.getDay();            // 0-6 (zero=domingo)
            var mes     = data.getMonth();          // 0-11 (zero=janeiro)
            var ano2    = data.getYear();           // 2 dígitos
            var ano4    = data.getFullYear();       // 4 dígitos
            var hora    = data.getHours();          // 0-23
            var min     = data.getMinutes();        // 0-59
            var seg     = data.getSeconds();        // 0-59
            var mseg    = data.getMilliseconds();   // 0-999
            var tz      = data.getTimezoneOffset(); // em minutos

            // Formata a data e a hora (note o mês + 1)
            var str_data = dia + '/' + (mes+1) + '/' + ano4;
            var str_hora = hora + ':' + min + ':' + seg;

            var data =  str_data + ' ' + str_hora 
            return data
        }
    vm.enviarMensagem =
        function enviarMensagem() {
            vm.socket.emit('chat message', vm.mensagem);
            vm.mensagem = ''
        }

    vm.socket.on('chat message', function (msg) {

    $('#messages').append( '<dd class="pos-left clearfix">' +
        '<div class="circ"></div>' +
        '<div class="time">'+ vm.obterDataMensagem() + '</div>' +
        '<div class="events">' +
            '<div class="pull-left">' +
                '<img class="events-object img-rounded" src="http://bootflat.github.io/img/photo-2.jpg">' +
            '</div>' +
            '<div class="events-body">' +
                '<h4 class="events-heading">'+ vm.user +'</h4>' +
                '<p>'+ msg + '</p>' +
            '</div>' +
        '</div>' +
    '</dd>' );

   
    });
}
