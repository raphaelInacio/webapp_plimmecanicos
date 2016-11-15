/* recommended */

// app.module.js
var app = angular
    .module('app', ['ngRoute']);

app.config(function($routeProvider)
{
   // remove o # da url
 
   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
//    .when('/test', {
//       templateUrl : 'app/home/home.html',
//       controller     : 'HomeController',
//       controllerAs : 'vm'
//    })
 
   .when('/', {
      templateUrl : 'app/pedido/pedido.html',
      controller  : 'PedidoController',
      controllerAs : 'vm' 
   })

   .when('/chat/:id', {
      templateUrl : 'app/chat/chat.html',
      controller  : 'ChatController',
      controllerAs : 'vm' 
   })
 
   .when('/chat', {
      templateUrl : 'app/chat/chat.html',
      controller  : 'ChatController',
      controllerAs : 'vm' 
   })

   .otherwise ({ redirectTo: '/' });
});