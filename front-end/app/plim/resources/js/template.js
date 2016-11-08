    var email = "",
    tipoAtendimento = "",
    escolha = "",
    escolhaAgendamento = "",
    dadosCarro = "0",
    cep = {
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
        logradouro: "",
        tipoDeLogradouro: ""
    },
    pedido = {
        tipo: " ",
        nome: " ",
        email: "",
        telefone: "",
        problema: " ",
        endereco: " ",
        bairro: "",
        cidade: "",
        veiculo: "",
        montadora: "",
        ano: "",
        enderecoFornecedor: "",
        emailOficina:""
    },
    endereco;

    jQuery(document).ready(function ($) {
         $("[data-toggle='tooltip']").tooltip();
         $('[data-toggle="popover"]').popover();
        $(".headroom").headroom({
            "tolerance": 20,
            "offset": 50,
            "classes": {
                "initial": "animated",
                "pinned": "slideDown",
                "unpinned": "slideUp"
            }
        });


    });

    function selecionarOficina(emailOficina){
        pedido.emailOficina += emailOficina + ", ";
        $(".emailOficina").text(pedido.emailOficina);
        console.log(emailOficina);
    }

    function preencherHidden() {
        //$("#hidden_email").val();
        endereco = cep.tipoDeLogradouro + " " + cep.logradouro;
        $("#hidden_endereco").val(endereco.replace("%20", " "));
        $("#hidden_bairro").val(cep.bairro.replace("%20", " ").replace("%20", " "));
        $("#hidden_cidade").val(cep.cidade);
        $("#hidden_estado").val(cep.estado);
        $("#hidden_email").val(email);
    }

    var countDomicilio = "0", countOficina = "0", countLevaTraz = "0";

    function tipoDomicilio(){
        if(countDomicilio == "0"){
            tipoAtendimento += $("#tipoDomicilio").val() + ", "
            $(".tipo").text(tipoAtendimento);
            countDomicilio = "1"
        }else{
         tipoAtendimento = tipoAtendimento.replace("Atendimento em domicilio,", " ");
         $(".tipo").text(tipoAtendimento);
         countDomicilio = "0"
     }
 }

 function tipoOficina(){
    if(countOficina == "0"){
        tipoAtendimento += $("#tipoOficina").val() + ", "
        $(".tipo").text(tipoAtendimento);
        countOficina = "1";
    }else{
     tipoAtendimento = tipoAtendimento.replace("Atendimento em oficina,", " ");
     $(".tipo").text(tipoAtendimento);
     countOficina = "0"
 }
}

function tipoLevaTraz(){
 if(countLevaTraz == "0"){
    tipoAtendimento += $("#tipoLevaTraz").val() + ", "
    $(".tipo").text(tipoAtendimento);
    countLevaTraz = "1"
}else{
    tipoAtendimento = tipoAtendimento.replace("Serviço leva e traz,", " ");
    $(".tipo").text(tipoAtendimento);
    countLevaTraz = "0"
}

}

function preencherPedido() {

    if (location.href.length < 50) {
        $(".pedido_montadora").text(montadora.options[montadora.selectedIndex].text);
        $(".pedido_veiculo").text(veiculo.options[veiculo.selectedIndex].text);
        $(".pedido_ano").text(ano.options[ano.selectedIndex].text);
    }

    $("#hidden_montadora").val(montadora.options[montadora.selectedIndex].text);
    $(".pedido_nome").text($("#nome").val());
    $(".pedido_telefone").text($("#tel").val());
    $(".pedido_email").text($("#email").val());
    $("#hidden_veiculo").val(veiculo.options[veiculo.selectedIndex].text);
    $(".pedido_servico").text(servico.options[servico.selectedIndex].text);
    $("#hidden_ano").val(ano.options[ano.selectedIndex].text);
    $(".pedido_detalhes").text($("#detalhes").val());
    $(".pedido_horas").text($("#horas").val());

        //$(".pedido_email").text(email);
        
        if ($("#horas").val() != "") {
            $(".pedido_total").text("R$" + 60 * Math.ceil(parseFloat($("#horas").val())) + ",00");
        }

        $(".numero").text($("#numero").val());
        $(".complemento").text($("#complemento").val());
        var endereco = cep.tipoDeLogradouro + " " + cep.logradouro;

        $(".pedido_endereco").text($("#autocomplete").val());

        // $(".pedido_endereco").text(endereco.replace("%20", " "));
        // endereco = cep.bairro;
        // $(".pedido_bairro").text(endereco.replace("%20", " ").replace("%20", " "));
        // endereco = cep.cidade;
        // $(".pedido_cidade").text(endereco.replace("%20", " ").replace("%20", " "));

        preencherHidden();
    }


    function preencherEndereco(param, posicao) {
        if (posicao == 0) {
            cep.tipoDeLogradouro = param.replace("%20", " ");
        }
        if (posicao == 1) {
            cep.logradouro = param.replace("%20", " ");
        }
        if (posicao == 2) {
            cep.bairro = param.replace("%20", " ");
        }
        if (posicao == 3) {
            cep.cidade = param.replace("%20", " ");
        }
        if (posicao == 4) {
            cep.estado = param.replace("%20", " ");
        }
        if (posicao == 5) {
            email = param;
        }
    }

    function removeSpecialCharSimple(strToReplace) {
        strSChar = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
        strNoSChars = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
        var newStr = "";
        for (var i = 0; i < strToReplace.length; i++) {
            if (strSChar.indexOf(strToReplace.charAt(i)) != -1) {
                newStr += strNoSChars.substr(strSChar.search(strToReplace.substr(i, 1)), 1);
            } else {
                newStr += strToReplace.substr(i, 1);
            }
        }
        return newStr;
    }

    function obterCep() {
        //$('#modal-load').modal('show');
        $.ajax({
            url: 'http://correiosapi.apphb.com/cep/' + $("#cep").val(),
            dataType: 'jsonp',
            crossDomain: true,
            contentType: "application/json",
            statusCode: {
                200: function (data) {

                    $('#modal-load').modal('hide');
                    cep.bairro = removeSpecialCharSimple(data.bairro);
                    cep.cep = removeSpecialCharSimple(data.cep);
                    cep.cidade = removeSpecialCharSimple(data.cidade);
                    cep.estado = removeSpecialCharSimple(data.estado);
                    cep.logradouro = removeSpecialCharSimple(data.logradouro);
                    cep.tipoDeLogradouro = removeSpecialCharSimple(data.tipoDeLogradouro);

                    document.getElementById('cep_cliente').innerHTML = "<p> " + cep.tipoDeLogradouro + " " + cep.logradouro + "<br>" + cep.bairro + "<br> " + cep.cidade + ", " + cep.estado + "</p>";
                    preencherHiddenTrocaOleo(cep);
                    $("#cep_invalido").css("display", "none");
                },
                400: function (msg) {
                    $('#modal-load').modal('hide');
                },
                404: function (msg) {
                    $('#modal-load').modal('hide');
                }
            }
        });
}

function enviarPedido() {

    pedido.tipo = tipoAtendimento;
    pedido.problema = servico.options[servico.selectedIndex].text + " - " + $("#detalhes").val();
    pedido.endereco = $(".pedido_endereco").text() + " Nº " + $("#numero").val() + ", Complemento " + $("#complemento").val();
    pedido.bairro = cep.bairro.replace("%20", " ").replace("%20", " ");
    pedido.cidade = cep.cidade;
    pedido.nome = $("#nome").val();
    pedido.email = $("#email").val();
    pedido.telefone = $("#tel").val();
    pedido.enderecoFornecedor = endereco.replace("%20", " ");

    if (dadosCarro == "0") {
        pedido.veiculo = veiculo.options[veiculo.selectedIndex].text;
        pedido.montadora = montadora.options[montadora.selectedIndex].text;
        pedido.ano = ano.options[ano.selectedIndex].text;
    }

    sendEmail(pedido);
}

function carregarModal() {
    setTimeout(function () {
        $('#myModal').modal('show')
    }, 3000);
}

function enviarDadosCarro() {

    if (montadora.options[montadora.selectedIndex].text == "Aguarde..." || montadora.options[montadora.selectedIndex].text == "Selecione...") {
        $("#validate-montadora").css("display", "block");
        return false;
    } else {
        $("#validate-montadora").css("display", "none");
    }
    if (veiculo.options[veiculo.selectedIndex].text == "Aguarde..." || veiculo.options[veiculo.selectedIndex].text == "Selecione...") {
        $("#validate-veiculo").css("display", "block");
        return false;
    } else {
        $("#validate-veiculo").css("display", "none");
    }
    if (ano.options[ano.selectedIndex].text == "Aguarde..." || ano.options[ano.selectedIndex].text == "Selecione...") {
        $("#validate-ano").css("display", "block");
        return false;
    } else {
        $("#validate-veiculo").css("display", "none");
    }
    dadosCarro = "1";
    var destino = "pedido.html";
    var parametros = "montadora=" + montadora.options[montadora.selectedIndex].text + "&veiculo=" + veiculo.options[veiculo.selectedIndex].text + "&ano=" + ano.options[ano.selectedIndex].text;
    location.href = destino + "?" + parametros;

}

function enviarDadosCarroServico() {
    var destino = "pedido.html";
    dadosCarro = "1";
    var parametros = "montadora=" + montadora.options[montadora.selectedIndex].text + "&veiculo=" + veiculo.options[veiculo.selectedIndex].text + "&ano=" + ano.options[ano.selectedIndex].text;
    window.location.assign("http://www.plimmecanicos.com.br/" + destino + "?" + parametros)
}


function obterCarro() {

    var url = location.href;
    var v;
      dadosCarro = "1";
    if (url.length > 96) {
        $("#carroRequest").css("display", "none");
    } else {
        return false;
    }

    if (url.indexOf("?") > 0) {
        query = url.split("?");
        param = query[1].split("&");
        for (i = 0; i < param.length; i++) {
            v = param[i].split("=");
            preencherCarro(v[1], i);
        }
        preencherPedidoRequest();
    }
}

function preencherPedidoRequest() {
    $(".pedido_montadora").text(pedido.montadora);
    $(".pedido_veiculo").text(pedido.veiculo);
    $(".pedido_ano").text(pedido.ano);
}

function preencherCarro(param, posicao) {

    console.log(param + "" + posicao)
    if (posicao == 0) {
        pedido.montadora = param.replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ");
    }
    if (posicao == 1) {
        pedido.veiculo = param.replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ");
    }
    if (posicao == 2) {
        pedido.ano = param.replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ").replace("%20", " ");
    }
}