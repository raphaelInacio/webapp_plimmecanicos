angular
.module('app')
.factory('ServicosFactory', ServicosFactory);

function ServicosFactory() {
   var _getServicos = function getServicos() {
        var servicos = [{
            id: '01',
            servico: 'Avaliação técnica (Inspeção e Diagnóstico de problemas) ',
            descricao: 'Visita técnica (Inspeção e Diagnóstico de problemas) ',
            preco: 'R$ 80,00'
        }, {
            id: '02',
            servico: 'Detecção e reparo de vazamentos',
            descricao: 'Detecção e reparo de vazamentos ',
            preco: 'R$ 90,00'
        }, {
            id: '03',
            servico: 'Vistoria para compra e venda',
            descricao: 'Vistoria para compra e venda',
            preco: 'R$ 90,00'
        }, {
            id: '04',
            servico: 'Bomba de combustível ',
            descricao: 'Bomba de combustível ',
            preco: 'R$ 120,00'
        }, {
            id: '05',
            servico: 'Limpeza de bico',
            descricao: 'Limpeza de bico',
            preco: 'R$ 80,00'
        }, {
            id: '06',
            servico: 'Análise e diagnóstico do sistema de Ar Condicionado',
            descricao: 'Análise e diagnóstico do sistema de Ar Condicionado',
            preco: 'R$ 80,00'
        }, {
            id: '06',
            servico: 'Rodizio/Troca de Pneus',
            descricao: 'Rodizio/Troca de Pneus',
            preco: 'R$ 80,00'
        }, {
            id: '06',
            servico: 'Recarga de Bateria',
            descricao: 'Recarga de Bateria',
            preco: 'R$ 40,00'
        }, {
            id: '06',
            servico: 'Recarga de Bateria',
            descricao: 'Recarga de Bateria',
            preco: 'R$ 40,00'
        }, {
            id: '07',
            servico: 'Substituição de Bateria',
            descricao: 'Substituição de Bateria',
            preco: 'R$ 80,00'
        }, {
            id: '08',
            servico: 'Disgnóstico de injeção eletrônica',
            descricao: 'Disgnóstico de injeção eletrônica',
            preco: 'R$ 80,00'
        }, {
            id: '09',
            servico: 'Correia dentada',
            descricao: 'Correia dentada',
            preco: 'R$ 360,00'
        }, {
            id: '10',
            servico: 'Filtro de ar ',
            descricao: 'Filtro de ar ',
            preco: 'R$ 80,00'
        }, {
            id: '11',
            servico: 'Filtro de combustível',
            descricao: 'Filtro de combustível',
            preco: 'R$ 80,00'
        }, {
            id: '12',
            servico: 'Filtro de óleo',
            descricao: 'Filtro de óleo',
            preco: 'R$ 80,00'
        }, {
            id: '14',
            servico: 'Instalação Palhetas do limpador',
            descricao: 'Instalação Palhetas do limpador',
            preco: 'R$ 80,00'
        }, {
            id: '15',
            servico: 'Instalação de acessórios',
            descricao: 'Instalação de acessórios ',
            preco: 'R$ 80,00'
        }, {
            id: '16',
            servico: 'Troca de rolamentos',
            descricao: 'Troca de rolamentos ',
            preco: 'R$ 80,00'
        }, {
            id: '16',
            servico: 'Troca de rolamentos',
            descricao: 'Troca de rolamentos ',
            preco: 'R$ 80,00'
        }]
        return servicos
    }

    return {
        getServicos : _getServicos
    }
}



