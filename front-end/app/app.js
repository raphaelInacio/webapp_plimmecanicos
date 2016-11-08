/* recommended */

// app.module.js
var app = angular
    .module('app', ['ngRoute']);

app.config(function($routeProvider)
{
   // remove o # da url
 
   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/test', {
      templateUrl : 'app/home/home.html',
      controller     : 'HomeController',
      controllerAs : 'vm'
   })
 
   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/', {
      templateUrl : 'app/pedido/pedido.html',
      controller  : 'PedidoController',
      controllerAs : 'vm' 
   })

   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/agendamento', {
      templateUrl : 'app/agendamento/agendamento.html',
      controller  : 'AgendamentoController',
      controllerAs : 'vm' 
   })
 
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});