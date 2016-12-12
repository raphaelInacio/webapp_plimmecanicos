
angular
.module('app')
.service('PedidoService', PedidoService);

PedidoService.$inject = ['$http', 'ServicosFactory'];

function PedidoService($http) {
    var _buscarMontadorasAPI  = function buscarMontadorasAPI() {
        return $http.get('https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas')
    }

    var _buscarModelosAPI = function buscarModelosAPI(montadora) {
        return $http.get('https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas/' + montadora.codigo + '/modelos')
    }

    var _buscarServicosAPI = function buscarServicosAPI(){
        return ServicosFactory.getServicos()
    }

    return {
        buscarModelosAPI : _buscarModelosAPI,
        buscarMontadorasAPI : _buscarMontadorasAPI,
        buscarServicosAPI : _buscarServicosAPI

    }
}