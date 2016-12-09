// pedido.controller.js
angular
.module('app')
.controller('PedidoController', PedidoController);

PedidoController.$inject = ['$http', 'PedidoService', 'ServicosFactory']

function PedidoController($http, PedidoService, ServicosFactory) {
    var vm = this
    vm.veiculo = {
        montadora: '',
        modelo: '',
        ano: ''
    }
    vm.servico = {
        servico: '',
        detalhes: '',
        preco: '',
        pecas: ''
    }
    vm.show = {
        montadora: true,
        ano: false,
        modelo: false,
        filter: true,
        filterServico: true,
        servicos: true,
        servico: false,
        veiculo: true
    }

    vm.montadoras = []
    vm.modelos = []
    vm.anos = []
    vm.buscarMontadoras =
        function buscarMontadoras() {
            // Simple GET request example:
            $http({
                method: 'GET',
                url: 'https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas'
            }).then(function successCallback(response) {
                vm.montadoras = response.data
            }, function errorCallback(response) {
                console.log(response.data)
            });

        }
    vm.servicos = function carregarServicos() {
        return ServicosFactory.getServicos()
    } ();

    vm.buscarModelos =
        function buscarModelos(montadora) {
            vm.veiculo.montadora = montadora.nome
            vm.show.montadora = false
            vm.show.modelo = true
            $http({
                method: 'GET',
                url: 'https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas/' + montadora.codigo + '/modelos'
            }).then(function successCallback(response) {
                vm.modelos = response.data.modelos
                vm.anos = response.data.anos
            }, function errorCallback(response) {
                console.log(response.data)
            });
        }


    vm.buscarAno =
        function buscarAno(modelo) {
            vm.veiculo.modelo = modelo.nome
            vm.show.modelo = false
            vm.show.ano = true
        }

    vm.selecionarAno =
        function selecionarAno(ano) {
            vm.veiculo.ano = ano.nome
            vm.show.modelo = false
            vm.show.ano = false
            vm.show.filter = false
            vm.show.servicos = true

        }

    vm.selecionarSevico =
        function selecionarSevico(servico) {
            vm.servico.servico = servico.servico
            vm.servico.preco = servico.preco
            vm.show.filterServico = false
        }

    vm.buscarMontadoras()
}
