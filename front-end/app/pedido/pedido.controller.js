/* recommended */

// pedido.controller.js
angular
    .module('app')
    .controller('PedidoController', PedidoController, ['$http']);

function PedidoController($http) {
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
    vm.servicos = [{
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

vm.parceiros = [
            {
                "id": "260761",
                "nome": "ALDIAM",
                "endereco": "AV SANTA CATARINA, 190",
                "bairro": "VILA ALEXANDRIA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04635-000",
                "telefone": "(11) 5543 5012",
                "email": "aldiam@aldiam.com.br",
                "site": "",
                "Latitude": "-23.638836",
                "Longitude": "-46.670160099999976",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260745",
                "nome": "ALPHA CAR",
                "endereco": "R AUGUSTA, 1245",
                "bairro": "CONSOLACAO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "01305-100",
                "telefone": "(11) 3255 2519",
                "email": "sac@alphacarservice.com.br",
                "site": "",
                "Latitude": "-23.5550279",
                "Longitude": "-46.65676029999997",
                "servicos": "\n4128^4130^4133^4137^4141^4147^4149^4150^4151^4152^4156\n",
                "guincho": "1"
            },
            {
                "id": "261183",
                "nome": "AP AUTO CENTER",
                "endereco": "AV CONCEIÇÃO, 2934 ,",
                "bairro": "V. MARIA ALTO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02135-000",
                "telefone": "(11) 2951 1349",
                "email": "ap_boschcar@hotmail.com",
                "site": "www.injetronicautomotivo.com.br",
                "Latitude": "-23.498132200000008",
                "Longitude": "-46.58779519999996",
                "servicos": "\n4128^4129^4132^4134^4135^4136^4137^4141^4147^4148^4149^4150^4151^4152^4154^4155^4156^4158\n",
                "guincho": "0"
            },
            {
                "id": "260430",
                "nome": "AUTO CENTER KOGA",
                "endereco": "R BRIGADEIRO HENRIQUE FONTENELLE, 715",
                "bairro": "SAO DOMINGOS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05125-000",
                "telefone": "(11) 3832 2807",
                "email": "centerkoga@uol.com.br",
                "site": "",
                "Latitude": "-23.5013766",
                "Longitude": "-46.73906599999998",
                "servicos": "\n4129^4130^4133^4135^4137^4141^4147^4149^4151^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "260520",
                "nome": "AUTO ELÉTRICA E PEÇAS IGARAPAVA",
                "endereco": "R ALFREDO GUEDES, 205",
                "bairro": "SANTANA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02034-010",
                "telefone": "(11) 2979 7462",
                "email": "igarapava@uol.com.br",
                "site": "",
                "Latitude": "-23.5062489",
                "Longitude": "-46.62429410000004",
                "servicos": "4128^4133^4137^4147^4149^4154^4156",
                "guincho": "0"
            },
            {
                "id": "261410",
                "nome": "AUTO MECANICA DE CASTRO",
                "endereco": "CONSELHEIRO MOREIRA DE BARROS ,625",
                "bairro": "SANTANA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02018-012",
                "telefone": "(11) 2950 0990",
                "email": "decastro.prog@gmail.com",
                "site": "",
                "Latitude": "-23.4948354",
                "Longitude": "-46.63095320000002",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260746",
                "nome": "AUTO MECAR",
                "endereco": "R BRIGIDA ROSSI, 1206",
                "bairro": "CENTRO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "13520-000",
                "telefone": "(19) 3481 2276",
                "email": "automecar@yahoo.com.br",
                "site": "",
                "Latitude": "-22.5523046",
                "Longitude": "-47.918549600000006",
                "servicos": "4129^4130^4133^4141^4147^4152^4153",
                "guincho": "1"
            },
            {
                "id": "260774",
                "nome": "AUTO VILA",
                "endereco": "R HENRIQUE SHAUMANN, 1152",
                "bairro": "JARDIM AMERICA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05413-011",
                "telefone": "(11) 3088 3338",
                "email": "autovila@yahoo.com.br",
                "site": "",
                "Latitude": "-23.5552955",
                "Longitude": "-46.683744299999944",
                "servicos": "4128^4129^4133^4135^4137^4147^4149^4150^4154^4156",
                "guincho": "0"
            },
            {
                "id": "260586",
                "nome": "AUTOBAN",
                "endereco": "AV WASHINGTON LUIZ, 1107",
                "bairro": "SANTO AMARO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04662-002",
                "telefone": "(11) 5522 3618",
                "email": "autobancar@autobancar.com.br",
                "site": "www.autobancar.com.br",
                "Latitude": "-23.6564604",
                "Longitude": "-46.69494640000005",
                "servicos": "\n4128^4129^4133^4135^4137^4147^4148^4149^4150^4151^4152^4154^4156^4158\n",
                "guincho": "0"
            },
            {
                "id": "260423",
                "nome": "AUTOHAZ BOSCH CAR SERVICE",
                "endereco": "AV DAS NAÇÕES UNIDAS, 22540",
                "bairro": "VILA ALMEIDA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04795-000",
                "telefone": "(11) 5523 4274",
                "email": "jsmauro@autohaz.com.br",
                "site": "www.autohaz.com.br",
                "Latitude": "-23.6780233",
                "Longitude": "-46.69800789999999",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260469",
                "nome": "AUTOLAPA",
                "endereco": "R JOÃO PEREIRA, 172/178",
                "bairro": "LAPA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05074-070",
                "telefone": "(11) 3837 9422",
                "email": "autolapa@autolapa.com.br",
                "site": "www.autolapa.com.br",
                "Latitude": "-23.5188305",
                "Longitude": "-46.706146800000056",
                "servicos": "\n4128^4133^4135^4137^4147^4148^4149^4150^4151^4152^4154^4156\n",
                "guincho": "0"
            },
            {
                "id": "261060",
                "nome": "BALANCAR",
                "endereco": "R MARGARIDA , 269",
                "bairro": "PACAEMBU",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "01154-030",
                "telefone": "(11) 3826 0080",
                "email": "balancar.bosch@hotmail.com",
                "site": "",
                "Latitude": "-23.530058399999994",
                "Longitude": "-46.66134950000003",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261203",
                "nome": "BENTO SERVIÇOS",
                "endereco": "R SANTA ROSA DO VITERBO, 395",
                "bairro": "FREGUESIA DO O",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02738-090",
                "telefone": "(11) 3932 6060",
                "email": "m.bentoautomotivo@ig.com.br",
                "site": "",
                "Latitude": "-23.4886685",
                "Longitude": "-46.68786950000003",
                "servicos": "\n4128^4129^4130^4132^4133^4134^4135^4136^4137^4141^4147^4149^4151^4152^4153^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "261253",
                "nome": "BEST CAR SERVICOS AUTOMOTIVOS",
                "endereco": "AV SAPOPEMBA ,10284",
                "bairro": "JD PLANALTO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03988-000",
                "telefone": "(11) 2036 2694",
                "email": "best-car@outlook.com",
                "site": "www.terenceservauto.com.br",
                "Latitude": "-23.60917445",
                "Longitude": "-46.50550295000005",
                "servicos": "\n4128^4129^4130^4132^4133^4134^4135^4137^4147^4148^4149^4150^4151^4152^4153^4154^4156^4158\n",
                "guincho": "1"
            },
            {
                "id": "260793",
                "nome": "BOSCH CAR SERVICE - GIGIO'S",
                "endereco": "AV DR GENTIL DE MOURA, 379",
                "bairro": "IPIRANGA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04278-000",
                "telefone": "(11) 5061 5062",
                "email": "gigios@gigiosboschservice.com.br",
                "site": "",
                "Latitude": "-23.6021838",
                "Longitude": "-46.611194299999966",
                "servicos": "\n4128^4129^4133^4135^4137^4147^4149^4150^4151^4152^4154^4156\n",
                "guincho": "0"
            },
            {
                "id": "261044",
                "nome": "CANAÃ SERVIÇOS AUTOMOTIVOS",
                "endereco": "R CARDEAL ARCOVERDE, 479",
                "bairro": "PINHEIROS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05407-000",
                "telefone": "(11) 3891 2339",
                "email": "kiko@canaaservicos.com.br",
                "site": "",
                "Latitude": "-23.5554142",
                "Longitude": "-46.67760750000002",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261139",
                "nome": "CENTRO AUTOMOTIVO AAC LEITE LTDA",
                "endereco": "R CAPITÃO FAUSTINO DE LIMA, 139",
                "bairro": "BRAS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03040-030",
                "telefone": "(11) 3209 1322",
                "email": "acleite@centroautomotivoacleite.com.br",
                "site": "",
                "Latitude": "-23.548535599999994",
                "Longitude": "-46.62458409999999",
                "servicos": "\n4128^4129^4130^4132^4133^4134^4135^4136^4137^4139^4140^4147^4148^4149^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "260546",
                "nome": "CENTRO AUTOMOTIVO HÉLIO",
                "endereco": "AL NOTHMANN, 621",
                "bairro": "CAMPOS ELISEOS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "01216-000",
                "telefone": "(11) 3221 1599",
                "email": "autohelio@autohelio.com.br",
                "site": "",
                "Latitude": "-23.5332481",
                "Longitude": "-46.64705200000003",
                "servicos": "\n4128^4129^4130^4133^4135^4137^4141^4147^4149^4150^4151^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "261414",
                "nome": "CENTRO AUTOMOTIVO PEREIRA BARRETO",
                "endereco": "AV PEREIRA BARRETO ,290",
                "bairro": "PARAISO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "09190-210",
                "telefone": "(11) 4990 8541",
                "email": "flavio.sandreschi@hotmail.com",
                "site": "",
                "Latitude": "-23.66964565",
                "Longitude": "-46.53579835000005",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261457",
                "nome": "DURAN CAR",
                "endereco": "AV DEP. EMILIIO CARLOS ,514",
                "bairro": "LIMAO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02721-100",
                "telefone": "(11) 3935 6104",
                "email": "duran-car@superig.com.br",
                "site": "",
                "Latitude": "-23.5002412",
                "Longitude": "-46.67398490000005",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260730",
                "nome": "ENGE FUEL",
                "endereco": "R CONSELHEIRO MOREIRA BARROS, 3428",
                "bairro": "LAUZANE PAULISTA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02430-002",
                "telefone": "(11) 2236 0994",
                "email": "engefuel@engefuel.com.br",
                "site": "www.engefuel.com.br",
                "Latitude": "-23.4793352",
                "Longitude": "-46.650130099999956",
                "servicos": "4129^4133^4135^4137^4147^4148^4149^4152^4154^4156",
                "guincho": "0"
            },
            {
                "id": "260773",
                "nome": "ENGECAR",
                "endereco": "R SÃO JOSÉ, 67",
                "bairro": "SANTO AMARO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04739-001",
                "telefone": "(11) 5524 8176",
                "email": "engecar.oficina@terra.com.br",
                "site": "www.engecar.com.br",
                "Latitude": "-23.6450572",
                "Longitude": "-46.702364800000055",
                "servicos": "\n4130^4133^4135^4137^4139^4141^4147^4149^4151^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "260524",
                "nome": "FOXCAR",
                "endereco": "PÇ ADOLFO CAVALCANTE, 01",
                "bairro": "VILA PRUDENTE",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03158-010",
                "telefone": "(11) 2965 0632",
                "email": "foxcar@foxcar.com.br",
                "site": "www.foxcar.com.br",
                "Latitude": "-23.573813899999998",
                "Longitude": "-46.57017970000004",
                "servicos": "\n4128^4129^4130^4133^4135^4137^4141^4147^4148^4149^4150^4151^4152^4154^4158\n",
                "guincho": "1"
            },
            {
                "id": "261643",
                "nome": "HIBRIDO AUTO CENTER",
                "endereco": "AV ENGENHEIRO CAETANO ALVARES ,3868",
                "bairro": "IMIRIM",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02413-000",
                "telefone": "(11) 2236 1958",
                "email": "domingos@hibridoautocenter.com.br",
                "site": "",
                "Latitude": "-23.488796500000007",
                "Longitude": "-46.650285800000006",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261132",
                "nome": "INJETRONIC",
                "endereco": "RUA ARTIA, 338 E 332",
                "bairro": "JARDIM INDEPENDÊNCIA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03223-120",
                "telefone": "(11) 2046 3845",
                "email": "sac@grupoinjetronic.com.br",
                "site": "www.injetronicautomotivo.com.br",
                "Latitude": "-23.5922567",
                "Longitude": "-46.55704854999999",
                "servicos": "\n4128^4129^4130^4132^4133^4134^4135^4136^4137^4139^4140^4141^4147^4149^4150^4151^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "260706",
                "nome": "JAGUARAUTO",
                "endereco": "AV CASA VERDE, 2164",
                "bairro": "CASA VERDE",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02522-000",
                "telefone": "(11) 3858 4788",
                "email": "jaguarauto@uol.com.br",
                "site": "www.jaguarauto.com.br",
                "Latitude": "-23.5035602",
                "Longitude": "-46.66166999999996",
                "servicos": "\n4128^4133^4135^4137^4139^4147^4149^4150^4151^4152^4153^4154^4156\n",
                "guincho": "0"
            },
            {
                "id": "260695",
                "nome": "JARAGUÁ BOSCH CAR SERVICE",
                "endereco": "AV CONCEIÇÃO, 2367",
                "bairro": "VILA MARIA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02072-002",
                "telefone": "(11) 2901 5656",
                "email": "pneusjaragua@superig.com.br",
                "site": "",
                "Latitude": "-23.5001389",
                "Longitude": "-46.59234900000001",
                "servicos": "\n4128^4129^4130^4133^4135^4137^4139^4140^4141^4147^4148^4149^4150^4151^4152^4153^4154^4156^4158\n",
                "guincho": "1"
            },
            {
                "id": "261610",
                "nome": "JOHNNY CAR",
                "endereco": "AV. AMADOR BUENO DA VEIGA ,2283",
                "bairro": "PENHA DE FRANÇA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03635-001",
                "telefone": "!11) 3798 5090",
                "email": "johnnycar_zonaleste@hotmail.com",
                "site": "",
                "Latitude": "-23.52271015",
                "Longitude": "-46.52387180000005",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260698",
                "nome": "MAX POWER",
                "endereco": "AV GAL ATALIBA LEONEL, 3509",
                "bairro": "PARADA INGLESA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02242-000",
                "telefone": "(11) 3294 2936",
                "email": "maxpoweer@terra.com.br",
                "site": "",
                "Latitude": "-23.4863636",
                "Longitude": "-46.605471400000056",
                "servicos": "\n4128^4133^4135^4137^4147^4148^4149^4151^4152^4153^4154^4156\n",
                "guincho": "0"
            },
            {
                "id": "260675",
                "nome": "MCD - AUTO TÉCNICO",
                "endereco": "AV DAS CEREJEIRAS, 1651",
                "bairro": "JARDIM JAPAO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02124-001",
                "telefone": "(11) 2983 3715",
                "email": "mcd.autotecnico@terra.com.br",
                "site": "",
                "Latitude": "-23.503055",
                "Longitude": "-46.576495799999975",
                "servicos": "4129^4133^4137^4147^4149^4152^4154^4156",
                "guincho": "0"
            },
            {
                "id": "260330",
                "nome": "MECÂNICA DO GATO",
                "endereco": "R BIXIRA, 233",
                "bairro": "MOOCA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03119-020",
                "telefone": "(11) 2028 2811",
                "email": "mecanicadogato@mecanicadogato.com.br",
                "site": "www.mecanicadogato.com.br",
                "Latitude": "-23.5667509",
                "Longitude": "-46.590595399999984",
                "servicos": "4128^4133^4137^4147^4149^4150^4154",
                "guincho": "0"
            },
            {
                "id": "260599",
                "nome": "MECÂNICA GARÇA",
                "endereco": "R BARTOLOMEU PAES, 698",
                "bairro": "VILA ANASTACIO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05092-000",
                "telefone": "(11) 3834 4250",
                "email": "paulo-nobrega@uol.com.br",
                "site": "",
                "Latitude": "-23.51400345",
                "Longitude": "-46.72004885000001",
                "servicos": "4133^4137^4147^4149^4151^4154^4156",
                "guincho": "0"
            },
            {
                "id": "261526",
                "nome": "MECÂNICA GT BOX",
                "endereco": "R BAQUIA ,199",
                "bairro": "VILA CARRAO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03443-000",
                "telefone": "(11) 2092 9005",
                "email": "contato@mecanicagtbox.com.br",
                "site": "",
                "Latitude": "-23.546071700000006",
                "Longitude": "-46.53873650000003",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261353",
                "nome": "MECANICA HERMES",
                "endereco": "R NOVA TIMBOTEUA, 215",
                "bairro": "PQ SAO LUCAS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03267-110",
                "telefone": "(11) 2703 0752",
                "email": "hermes-car@hotmail.com",
                "site": "www.mecanicahermescar.com.br",
                "Latitude": "-23.599867",
                "Longitude": "-46.530370999999946",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261645",
                "nome": "MECÂNICA MAGNUM",
                "endereco": "RUA PRESIDENTE VARGAS ,112",
                "bairro": "PERUS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05207-000",
                "telefone": "(11) 3917 5377",
                "email": "mecanica.magnum@gmail.com",
                "site": "",
                "Latitude": "-23.40156735",
                "Longitude": "-46.748158500000045",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261159",
                "nome": "MINAMI SERVIÇOS AUTOMOTIVOS",
                "endereco": "R CONDE MOREIRA LIMA ,93",
                "bairro": "JARDIM JABAQUARA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04384-030",
                "telefone": "(11) 5564 8112",
                "email": "contato.minami@uol.com.br",
                "site": "www.minami.com.br",
                "Latitude": "-23.65989335",
                "Longitude": "-46.65737249999995",
                "servicos": "\n4129^4133^4134^4136^4137^4147^4148^4149^4151^4152^4154^4156\n",
                "guincho": "0"
            },
            {
                "id": "261370",
                "nome": "MONTANA",
                "endereco": "R ELIAS MONTEIRO CARDOSO ,270",
                "bairro": "ITAIM PAULISTA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "08022-130",
                "telefone": "(11) 2585 3728",
                "email": "osvaldo@montanaautopecas.com.br",
                "site": "www.montanaautopecas.com.br",
                "Latitude": "-23.4948087",
                "Longitude": "-46.420213200000035",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260629",
                "nome": "MORELLI FERRARI",
                "endereco": "AV SERAFIM GONÇALVES PEREIRA, 409",
                "bairro": "PQ NOVO MUNDO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "02179-000",
                "telefone": "(11) 2954 0707",
                "email": "morelliferrari@terra.com.br",
                "site": "",
                "Latitude": "-23.521006999999997",
                "Longitude": "-46.56846729999995",
                "servicos": "\n4129^4130^4133^4137^4141^4147^4149^4152^4153^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "261408",
                "nome": "NEW CAR",
                "endereco": "RODRAPOSO TAVARES,7201",
                "bairro": "JARDIM CAMBARA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05577-000",
                "telefone": "(11) 3782 3314",
                "email": "llt.pecasautomotivas@gmail.com",
                "site": "",
                "Latitude": "-23.6054909",
                "Longitude": "-47.02361289999999",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261298",
                "nome": "NEW CAR",
                "endereco": "AV PIRES DO RIO ,396",
                "bairro": "SAO MIGUEL PAULISTA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "08020-000",
                "telefone": "(11) 2037 0474",
                "email": "newcarboschservice@hotmail.com",
                "site": "",
                "Latitude": "-23.4996849",
                "Longitude": "-46.442516400000045",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261118",
                "nome": "NZ CENTRO AUTOMOTIVO",
                "endereco": "AV LINS DE VASCONCELO ,2484",
                "bairro": "VILA MARIANA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04112-001",
                "telefone": "(11) 5572 6306",
                "email": "zelao@nzca.com.br",
                "site": "",
                "Latitude": "-23.583945",
                "Longitude": "-46.6277159",
                "servicos": "\n4129^4130^4132^4133^4134^4135^4136^4137^4138^4139^4141^4147^4148^4149^4150^4151^4152^4153^4154^4155^4156^4158\n",
                "guincho": "1"
            },
            {
                "id": "261409",
                "nome": "OFICINA CAR 360",
                "endereco": "AV VILA EMA, 3275",
                "bairro": "VILA EMA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03281-000",
                "telefone": "(11) 2115 6011",
                "email": "oficina@car360.com.br",
                "site": "www.oficinacar360.com.br",
                "Latitude": "-23.5851005",
                "Longitude": "-46.54580199999998",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261062",
                "nome": "PITININ SERVICE",
                "endereco": "R ALMIRANTE BRASIL, 570",
                "bairro": "MOOCA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03162-010",
                "telefone": "(11) 3533 2376",
                "email": "pablo@bit9.com.br",
                "site": "",
                "Latitude": "-23.551527099999994",
                "Longitude": "-46.60684260000005",
                "servicos": "\n4128^4129^4132^4133^4135^4137^4141^4147^4148^4149^4150^4151^4152^4154^4156^4158\n",
                "guincho": "0"
            },
            {
                "id": "261646",
                "nome": "PIU AUTO CENTER",
                "endereco": "RUA 13 DE MAIO 1300 ,",
                "bairro": "CENTRO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "17024 472",
                "telefone": "(14) 3652 2359",
                "email": "oficinadopiu@yahoo.com.br",
                "site": "",
                "Latitude": "-22.37109385",
                "Longitude": "-48.38892450000003",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261599",
                "nome": "PNEUS BELEM",
                "endereco": "R HERVAL ,70",
                "bairro": "BELENZINHO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03062-000",
                "telefone": "(11) 2693 9274",
                "email": "pneusdgp@gmail.com",
                "site": "",
                "Latitude": "-23.542718999999998",
                "Longitude": "-46.59436960000005",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261302",
                "nome": "PREMYER MECÂNICA ESPECIALIZADA",
                "endereco": "AV GUARAPIRANGA ,1921",
                "bairro": "PQ ALVES DE LIMA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04902-005",
                "telefone": "(11) 5515 2020",
                "email": "roberto@premyer.com",
                "site": "www.premyer.com",
                "Latitude": "-23.6678597",
                "Longitude": "-46.73103260000005",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260734",
                "nome": "PSP - PRUDÊNCIA",
                "endereco": "R CARLO CARRA, 266",
                "bairro": "VILA MASCOTE",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04367-000",
                "telefone": "(11) 5563 7313",
                "email": "pspvendas2@terra.com.br",
                "site": "",
                "Latitude": "-23.6514766",
                "Longitude": "-46.66594859999998",
                "servicos": "4133^4135^4137^4147^4148^4149^4151^4152^4154^4156",
                "guincho": "0"
            },
            {
                "id": "261085",
                "nome": "R F SERVIÇOS MECANICOS",
                "endereco": "R MAURO BONAFÉ PAULLETE, 20",
                "bairro": "JD TRES MARIAS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "08331-090",
                "telefone": "(11) 2019 6332",
                "email": "paulamancilia@ig.com.br",
                "site": "",
                "Latitude": "-23.6064902",
                "Longitude": "-46.47121960000004",
                "servicos": "\n4130^4132^4133^4134^4135^4136^4137^4138^4147^4149^4151^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "261162",
                "nome": "R. MOTORS",
                "endereco": "AV ARICANDUVA ,5034",
                "bairro": "VILA CALIFORNIA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03490-000",
                "telefone": "(11) 2722-3773",
                "email": "rafael.rmotors@bol.com.br",
                "site": "",
                "Latitude": "-23.5637274",
                "Longitude": "-46.50896069999999",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261109",
                "nome": "RAFFU CENTRO AUTOMOTIVO",
                "endereco": "AV 19 DE JANEIRO, 749",
                "bairro": "V. CARRAO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03449-000",
                "telefone": "(11) 2781 2363",
                "email": "raffupneus@bol.com.br",
                "site": "",
                "Latitude": "-23.557736300000002",
                "Longitude": "-46.52298284999995",
                "servicos": "\n4128^4130^4132^4133^4134^4135^4137^4147^4149^4150^4151^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "260964",
                "nome": "REDE 47",
                "endereco": "R DA PAZ, 931",
                "bairro": "CHACARA SANTO ANTONIO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04713-001",
                "telefone": "(11) 5181 6999",
                "email": "daniel@rede47.com.br",
                "site": "www.rede47.com.br",
                "Latitude": "-23.6320303",
                "Longitude": "-46.69784619999996",
                "servicos": "4128^4135^4139^4147^4148^4149^4150^4152",
                "guincho": "0"
            },
            {
                "id": "261499",
                "nome": "REDE 47",
                "endereco": "R BAUMANN ,1467",
                "bairro": "VILA LEOPOLDINA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "05318-000",
                "telefone": "(11) 3644 5123",
                "email": "rosalvo@rede47.com.br",
                "site": "",
                "Latitude": "-23.5386122",
                "Longitude": "-46.72807320000004",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260595",
                "nome": "REVISE CAR",
                "endereco": "R DR MÁRIO VICENTE, 131",
                "bairro": "IPIRANGA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04270-000",
                "telefone": "(11) 2274 1463",
                "email": "ipiranga@revisecar.com.br",
                "site": "www.revisecar.com.br",
                "Latitude": "-23.586019",
                "Longitude": "-46.617015700000024",
                "servicos": "\n4128^4130^4133^4135^4137^4141^4147^4148^4149^4150^4151^4152^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "260547",
                "nome": "REVISE CAR",
                "endereco": "AV LINS DE VASCONCELOS, 443",
                "bairro": "ACLIMACAO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "01537-000",
                "telefone": "(11) 3209 2219",
                "email": "cambuci@revisecar.com.br",
                "site": "www.revisecar.com.br",
                "Latitude": "-23.5672153",
                "Longitude": "-46.62137759999996",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260736",
                "nome": "SOLMAR AUTO MECÂNICA",
                "endereco": "R JUSTINO NIGRO, 106",
                "bairro": "INTERLAGOS",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04815-030",
                "telefone": "(11) 5666 1796",
                "email": "jmarciomec@gmail.com>",
                "site": "www.solmarauto.com",
                "Latitude": "-23.7073884",
                "Longitude": "-46.69424819999995",
                "servicos": "4128^4133^4137^4147^4149^4152^4154^4156",
                "guincho": "0"
            },
            {
                "id": "261113",
                "nome": "SW INJEÇÃO ELETRONICA",
                "endereco": "AV OLIVEIRA FREIRE, 678",
                "bairro": "SAO MIGUEL PAULISTA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "08080-570",
                "telefone": "(11) 2581 3724",
                "email": "swinjecao@hotmail.com",
                "site": "",
                "Latitude": "-23.484871",
                "Longitude": "-46.429056100000025",
                "servicos": "\n4128^4132^4133^4134^4135^4136^4137^4147^4149^4152^4154^4155^4156\n",
                "guincho": "0"
            },
            {
                "id": "260728",
                "nome": "TECNICAR",
                "endereco": "R PADRE ADELINO, 1059",
                "bairro": "BELENZINHO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "03303-000",
                "telefone": "(11) 2605 5171",
                "email": "tecnicar@tecnicarreparos.com.br",
                "site": "www.tecnicarreparos.com.br",
                "Latitude": "-23.54380195",
                "Longitude": "-46.58392739999999",
                "servicos": "\n4128^4129^4130^4133^4135^4137^4141^4147^4148^4149^4150^4152^4154^4156^4158\n",
                "guincho": "1"
            },
            {
                "id": "261303",
                "nome": "TOKIO CAR",
                "endereco": "R PATRICIOS ,32",
                "bairro": "VILA BRASILIO MACHADO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04133-000",
                "telefone": "(11) 2577 8983",
                "email": "rekuboyama@hotmail.com",
                "site": "www.tokiocarservice.com.br",
                "Latitude": "-23.608766499999994",
                "Longitude": "-46.61672859999999",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "261114",
                "nome": "TOP TYRE",
                "endereco": "R AUGUSTO CARLOS BAUMANN, 716",
                "bairro": "ITAQUERA",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "08210-590",
                "telefone": "(11) 2944 4084",
                "email": "alexandre@toptyre.com.br",
                "site": "www.toptyre.com.br",
                "Latitude": "-23.532486849999998",
                "Longitude": "-46.44780894999997",
                "servicos": "\n4128^4133^4134^4135^4136^4137^4147^4148^4149^4150^4151^4152^4154^4156\n",
                "guincho": "0"
            },
            {
                "id": "260742",
                "nome": "TYRE EXPRESS",
                "endereco": "R BRITO PEIXOTO, 29",
                "bairro": "VILA CORDEIRO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04582-020",
                "telefone": "(11) 5535 3422",
                "email": "tyre@tyreexpress.com.br",
                "site": "www.tyreexpress.com.br",
                "Latitude": "-23.620624799999995",
                "Longitude": "-46.69116299999996",
                "servicos": "\n4128^4129^4130^4133^4135^4137^4139^4141^4147^4149^4150^4151^4154^4156\n",
                "guincho": "1"
            },
            {
                "id": "261568",
                "nome": "VARGA SERVIÇOS",
                "endereco": "R VIEIRA DE MORAIS ,1205",
                "bairro": "CAMPO BELO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "04617-014",
                "telefone": "(11) 5543 2623",
                "email": "paulo.forlin@uol.com.br",
                "site": "",
                "Latitude": "-23.62280995",
                "Longitude": "-46.670659",
                "servicos": "",
                "guincho": "0"
            },
            {
                "id": "260779",
                "nome": "WBR CONSULTORIA AUTOMOTIVA",
                "endereco": "R DR LEONARDO PINTO, 38",
                "bairro": "BOM RETIRO",
                "cidade": "SÃO PAULO",
                "uf": "SP",
                "cep": "01125-010",
                "telefone": "(11) 3331 7302",
                "email": "leandro@wbrautomotivo.com.br",
                "site": "www.wbrautomotivo.com.br",
                "Latitude": "-23.5243343",
                "Longitude": "-46.64058650000004",
                "servicos": "",
                "guincho": "0"
            }
        ]


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

    vm.geolocate = function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
    });
      autocomplete.setBounds(circle.getBounds());
  });
}
}

    vm.buscarMontadoras()
}
