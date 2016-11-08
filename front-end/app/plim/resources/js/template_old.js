
	var email =  "";
	var escolha = "";
	var escolhaAgendamento = "";
	
	var cep = {
		bairro: "",
		cep: "",
		cidade: "",
		estado: "",
		logradouro: "",
		tipoDeLogradouro: ""	
	};

	var pedido = {
	    tipo:" ", 
	    nome:" ", 
	    email:"", 
	    telefone:"", 
	    problema : " ", 
	    endereco : " ", 
	    bairro : "", 
	    cidade : "", 
	    veiculo: "", 
	    montadora:"", 
	    ano:""
	};

	var endereco;
	
jQuery(document).ready(function($) {
	$(".headroom").headroom({
		"tolerance" : 20,
		"offset" : 50,
		"classes" : {
			"initial" : "animated",
			"pinned" : "slideDown",
			"unpinned" : "slideUp"
		}
	});


});
	//pagina inicial
	$("#orcamento").click( function (){
		$("#domicilio").removeClass("escolha-active");
		$("#socorro").removeClass("escolha-active");
		$("#orcamento").addClass("escolha-active");
		escolha = "orcamento";
	} );

	$("#socorro").click( function (){
		$("#socorro").addClass("escolha-active");
		$("#orcamento").removeClass("escolha-active");
		$("#domicilio").removeClass("escolha-active");
		escolha = "socorro";

	} );

	$("#domicilio").click( function (){
		$("#domicilio").addClass("escolha-active");
		$("#socorro").removeClass("escolha-active");
		$("#orcamento").removeClass("escolha-active");
		escolha = "domicilio";
	} );



	//Pagina de agendamento 
	 $("#carro").click( function (){
		$("#carro").addClass("escolha-active");
		$("#moto").removeClass("escolha-active");
		$("#caminhao").removeClass("escolha-active");
		escolhaAgendamento = "Carro";
		$(".pedido_tipo_veiculo").text(escolhaAgendamento);
		$("#hidden_veiculo").val(escolhaAgendamento);
	} );

	$("#moto").click( function (){
		$("#moto").addClass("escolha-active");
		$("#carro").removeClass("escolha-active");
		$("#caminhao").removeClass("escolha-active");
		escolhaAgendamento = "Moto";
		$(".pedido_tipo_veiculo").text(escolhaAgendamento);
		$("#hidden_veiculo").val(escolhaAgendamento);
	} );

	$("#caminhao").click( function (){
		$("#caminhao").addClass("escolha-active");
		$("#carro").removeClass("escolha-active");
		$("#moto").removeClass("escolha-active");
		escolhaAgendamento = "Caminhão";
		$(".pedido_tipo_veiculo").text(escolhaAgendamento);
		$("#hidden_veiculo").val(escolhaAgendamento);
	} );



function pedidoCarro(){
	 var parametros = $("#select_problema").val();

	 if ($("#select_problema").val() === "selecione_o_problema") {
	 	$("#problema").css("display","block");
	 	return false;
	 };
	return location.href='orcamento.html';
}

function pedidoMoto(){
	return location.href='orcamentoMoto.html';
}


function preencherHidden(){
	//$("#hidden_email").val();
	endereco =  cep.tipoDeLogradouro + " " + cep.logradouro ;
	$("#hidden_endereco").val(endereco.replace("%20"," "));
	$("#hidden_bairro").val(cep.bairro.replace("%20"," ").replace("%20"," ") );
	$("#hidden_cidade").val(cep.cidade);
	$("#hidden_estado").val(cep.estado);
	$("#hidden_email").val(email);
}


function preencherPedido(){

	$(".pedido_montadora").text( montadora.options[montadora.selectedIndex].text );
	$("#hidden_montadora").val(montadora.options[montadora.selectedIndex].text );
	$(".pedido_nome").text($("#nome").val());
	$(".pedido_telefone").text($("#tel").val());
	$(".pedido_email").text($("#email").val());
	$(".pedido_veiculo").text(veiculo.options[veiculo.selectedIndex].text );
	$("#hidden_veiculo").val( veiculo.options[veiculo.selectedIndex].text);
	$(".pedido_ano").text(ano.options[ano.selectedIndex].text);
	$(".pedido_servico").text(servico.options[servico.selectedIndex].text);
	$("#hidden_ano").val(ano.options[ano.selectedIndex].text);
	$(".pedido_detalhes").text($("#detalhes").val());
	$(".pedido_horas").text($("#horas").val());
	//$(".pedido_email").text(email);

	if($("#horas").val() != ""){
	$(".pedido_total").text("R$"+ 60 * Math.ceil(parseFloat($("#horas").val()))+",00");
	}
	
	var endereco =  cep.tipoDeLogradouro + " " + cep.logradouro ;
	$(".pedido_endereco").text(endereco.replace("%20"," "));
	endereco =  cep.bairro ;
	$(".pedido_bairro").text(endereco.replace("%20"," ").replace("%20"," ") );
	endereco =  cep.cidade;
	$(".pedido_cidade").text(endereco.replace("%20"," ").replace("%20"," ") );
	
	preencherHidden();
}

function primeiroPassoOrcamento(){
	 var destino = "index.html";
	 var parametros = 
	 "montadora="+ $("#montadora").val() + 
	 "&veiculo=" + $("#veiculo").val() +
	 "&ano=" + $("#ano").val() + 
	 "&detalhes=" + $("#detalhes").val() +
	 "&horas=" + $("#horas").val() +
	 "&total=" +$(".pedido_total").text() 
	 location.href= destino + "?" + parametros;
}


function preencherEndereco (param, posicao) {
	 if(posicao == 0){
	 	cep.tipoDeLogradouro = param.replace("%20"," ");
	 }
	  if(posicao == 1){
	 	 cep.logradouro  = param.replace("%20"," ");
	 }
	  if(posicao == 2){
	 	 cep.bairro  = param.replace("%20"," ");
	 }
	  if(posicao == 3){
	 	cep.cidade = param.replace("%20"," ");
	 }
	  if(posicao == 4){
	 	cep.estado = param.replace("%20"," ");
	 }
	  if(posicao == 5){
	 	email = param;
	 }
}

function removeSpecialCharSimple(strToReplace) {
    strSChar = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
    strNoSChars = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    var newStr = "";
    for (var i = 0; i < strToReplace.length; i++) {
        if (strSChar.indexOf(strToReplace.charAt(i)) != -1) {
            newStr += strNoSChars.substr(strSChar.search(strToReplace.substr(i,1)),1);
        } else {
            newStr += strToReplace.substr(i,1);
        }
    }
    return newStr;
}

function obterEnderecoRequest() {
	var url = location.href;
	var v;
	if (url.indexOf("?") > 0) {
	 query = url.split("?"); 
	 param = query[1].split("&");
	 for (i=0; i < param.length; i++) { 
	 	v = param[i].split("="); 
	 	preencherEndereco( v[1], i); 
	 } 
	} else{
		$(".p_pedido_endereco").css("display","none");
		$(".p_pedido_bairro").css("display","none");
		$(".p_pedido_cidade").css("display","none");

	}

	preencherPedido();
}

function obterCep(){
		$('#modal-load').modal('show');
	  $.ajax({
	  url: 'http://correiosapi.apphb.com/cep/'+$("#cep").val(),
	  dataType: 'jsonp',
	  crossDomain: true,
	  contentType: "application/json",
	  statusCode: {
	    200: function(data) { 
	
	    	$('#modal-load').modal('hide');
	    	cep.bairro = removeSpecialCharSimple(data.bairro) ;
	    	cep.cep = removeSpecialCharSimple( data.cep);
	    	cep.cidade = removeSpecialCharSimple(data.cidade);
	    	cep.estado = removeSpecialCharSimple(data.estado);
	    	cep.logradouro = removeSpecialCharSimple( data.logradouro)	;
	    	cep.tipoDeLogradouro = removeSpecialCharSimple( data.tipoDeLogradouro) ;
	    	
	    	document.getElementById('cep_cliente').innerHTML = 
	    	"<p> "+ cep.tipoDeLogradouro + " " +cep.logradouro 
	    	+ "<br>" + cep.bairro 
	    	+ "<br> " + cep.cidade  
	    	+ ", " + cep.estado 
	    	+"</p>";
	    	preencherHiddenTrocaOleo(cep);
	    	$("#cep_invalido").css("display","none");
	    }
	    ,400: function(msg) { $('#modal-load').modal('hide');  } 
	    ,404: function(msg) { $('#modal-load').modal('hide'); } 
	  }
	});
	 //cep.bairro: "Setor 02"cep: "76873274"cidade: "Ariquemes"estado: "RO"logradouro: "Juriti"tipoDeLogradouro: "Rua"
	 //console.log(cep.bairro);
}

function enviarPedido(){
	
	pedido.tipo =  $( "input:checked" ).val();
    pedido.problema = servico.options[servico.selectedIndex].text + " - " +$("#detalhes").val();
    pedido.endereco = endereco.replace("%20"," "); 
    pedido.bairro = cep.bairro.replace("%20"," ").replace("%20"," ") ;
    pedido.cidade = cep.cidade ;
    pedido.nome = $("#nome").val();
    pedido.email = $("#email").val();
    pedido.telefone = $("#tel").val();
    pedido.veiculo = veiculo.options[veiculo.selectedIndex].text ;
    pedido.montadora = montadora.options[montadora.selectedIndex].text; 
    pedido.ano = ano.options[ano.selectedIndex].text;

    
    sendEmail(pedido);
}

function carregarModal() {
    setTimeout(function(){ $('#myModal').modal('show') }, 3000);
}





