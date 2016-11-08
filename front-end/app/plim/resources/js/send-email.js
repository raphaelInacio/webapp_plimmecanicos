// Create a function to log the response from the Mandrill API


function log(obj) {
    console.log(JSON.stringify(obj));
}

//Use YOUR Firebase URL (not the one below)
// var fb = new Firebase("https://plimmecanicos.firebaseio.com/");
/* Remember to include firebase JS Library
  <script src="https://cdn.firebase.com/js/client/2.0.6/firebase.js"></script>
  */

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('JSikXUj4JN-JrFoSnXq_pA');

//var parceiros = ["raphael@plimmecanicos.com.br", "jmarcos_ss2@hotmail.com", "flex@flexpaintcar.com.br", "romerosae@hotmail.com", "valdiney_honda@hotmail.com", "jcdesign.ctis@gmail.com", "contato@pattola.com.br", "cardeal_oficina@hotmail.com", "jijmotos@hotmail.com", "autoligeirinho@uol.com.br", "autobrasiloficina@hotmail.com", "aerocar@aerocar.com.br", "ctagiro@uol.com.br", "lofficina@hotmail.com", "elvis@bfpstoamaro.com.br", "elvis.gfm@gmail.com", "oficina_2117@hotmail.com", "silvio@peghasus.com.br", "r.batista2005@ig.com.br", "dematech@hotmail.com", "oficina@car360.com.br", "atendimento@vipcarcenter.com.br", "sanel.automecanica@gmail.com", "faleconosco@automecanicascopino.com.br", "luckyycar@hotmail.com", "elvis@bfpmorumbi.com.br", "oficinamecauto@yahoo.com.br", "manfrecar@yahoo.com.br", "tecmarson@uol.com.br", "allinemeninalinda@hotmail.com", "planet@oficinaplanet.com.br", "rodrigo@rmotors.com.br", "oficina@autoplay1.com.br", "auto10import@uol.com.br", "starimport@uol.com.br", "valdiney_honda@outlook.com", "brunosena@outlook.com", "aledrecar@outlook.com", "lincolnmoreno80@gmail.com", "diegovieiraalmeida@hotmail.com", "hightechservice@uol.com.br", "mecveralucia@uol.com.br", "fernandosaddi@egenius.com.br", "atendimento33@doutorlubrifica.com.br", "mecanicadeliverysp@gmail.com", "planet@oficinaplanet.om.br", "atendimento@vipcarcenter.com.br", "ctagiro@uol.com.br", "valdiney_honda@hotmail.com", "luckyycar@hotmail.com", "foxcar@foxcar.com.br"]

function sendEmail(pedido) {
    sendTheMailConfirmacaoPedido(pedido);
    sendTheMailOrcamentoPlim(pedido);
    // var parceiros = pedido.emailOficina.split(",")
    
    // if(parceiros[0] == ""){
    //     for (var i = 0; i < oficinasJSON["data"].item.length; i++) {
    //         var emailOficina = oficinasJSON["data"].item[i]["email"];
    //         sendTheMailOrcamentoFornecedores(pedido, emailOficina);
    //     }
    //     }else{
    //         for (var i = parceiros.length - 1; i >= 0; i--) {
    //             sendTheMailOrcamentoFornecedores(pedido, parceiros[i]);
    //             console.log(parceiros[i])
    //         };
    //     }


   // sendTheMailOrcamentoFornecedores(pedido);
}



function sendTheMailOrcamentoFornecedores(pedido, email) {

    var templateOrcamentoFornecedores = {
        "key": "JSikXUj4JN-JrFoSnXq_pA",
        "template_name": "orcamentofornecedores",
        "template_content": [{
            "name": " ",
            "content": " "
        }],
        "message": {
            "html": " ",
            "text": " ",
            "subject": "[Orçamento Mecânico] - Parceiros Plim Mecânicos",
            "from_email": "contato@plimmecanicos.com.br",
            "from_name": "Plim Mecânicos",
            "to": [{
                "email": email,
                "name": "Parceiro Plim Mecânicos",
                "type": "to"
            }],
            "headers": {
                "Reply-To": " "
            },
            "important": false,
            "track_opens": null,
            "track_clicks": null,
            "auto_text": null,
            "auto_html": null,
            "inline_css": null,
            "url_strip_qs": null,
            "preserve_recipients": null,
            "view_content_link": null,
            "bcc_address": " ",
            "tracking_domain": null,
            "signing_domain": null,
            "return_path_domain": null,
            "merge": true,
            "merge_language": "mailchimp",
            "global_merge_vars": [


            {
                "name": "VEICULO",
                "content": pedido.veiculo
            }, {
                "name": "MONTADORA",
                "content": pedido.montadora
            }, {
                "name": "ANO",
                "content": pedido.ano
            }, {
                "name": "ENDERECO",
                "content": pedido.enderecoFornecedor
            }, {
                "name": "BAIRRO",
                "content": pedido.bairro
            }, {
                "name": "PROBLEMA",
                "content": pedido.tipo + " - " + pedido.problema
            }

            ]
        }
    }

    // Send the email!
    m.messages.sendTemplate(templateOrcamentoFornecedores, function (res) {
        log(res);
    }, function (err) {
        log(err);
    });
}

function sendTheMailConfirmacaoPedido(pedido) {

    var templateConfirmacaoPedido = {
        "key": "JSikXUj4JN-JrFoSnXq_pA",
        "template_name": "confirmacao-pedido",
        "template_content": [{
            "name": " ",
            "content": " "
        }],
        "message": {
            "html": " ",
            "text": " ",
            "subject": "Orçamento Mecânico",
            "from_email": "contato@plimmecanicos.com.br",
            "from_name": "Plim Mecânicos",
            "to": [{
                "email": pedido.email,
                "name": pedido.nome,
                "type": "to"
            }],
            "headers": {
                "Reply-To": " "
            },
            "important": false,
            "track_opens": null,
            "track_clicks": null,
            "auto_text": null,
            "auto_html": null,
            "inline_css": null,
            "url_strip_qs": null,
            "preserve_recipients": null,
            "view_content_link": null,
            "bcc_address": " ",
            "tracking_domain": null,
            "signing_domain": null,
            "return_path_domain": null,
            "merge": true,
            "merge_language": "mailchimp",
            "global_merge_vars": [{
                "name": "NOMECLIENTE",
                "content": pedido.nome
            }],
            "merge_vars": [{
                "rcpt": "recipient.email@example.com",
                "vars": [{
                    "name": "merge2",
                    "content": "merge2 content"
                }]
            }]
        }
    }

    // Send the email!
    m.messages.sendTemplate(templateConfirmacaoPedido, function (res) {
        log(res);
    }, function (err) {
        log(err);
    });
}

function sendTheMailOrcamentoPlim(pedido) {

    var templateOrcamentoPlim = {
        "key": "JSikXUj4JN-JrFoSnXq_pA",
        "template_name": "orcamento",
        "template_content": [{
            "name": " ",
            "content": " "
        }],
        "message": {
            "html": " ",
            "text": " ",
            "subject": "Orçamento Mecânico",
            "from_email": "contato@plimmecanicos.com.br",
            "from_name": "Plim Mecânicos",
            "to": [{
                "email": "contato@plimmecanicos.com.br",
                "name": pedido.nome,
                "type": "to"
            }],
            "headers": {
                "Reply-To": " "
            },
            "important": false,
            "track_opens": null,
            "track_clicks": null,
            "auto_text": null,
            "auto_html": null,
            "inline_css": null,
            "url_strip_qs": null,
            "preserve_recipients": null,
            "view_content_link": null,
            "bcc_address": " ",
            "tracking_domain": null,
            "signing_domain": null,
            "return_path_domain": null,
            "merge": true,
            "merge_language": "mailchimp",
            "global_merge_vars": [{
                "name": "TIPO",
                "content": pedido.tipo
            }, {
                "name": "NOME",
                "content": pedido.nome
            }, {
                "name": "EMAIL",
                "content": pedido.email
            }, {
                "name": "TELEFONE",
                "content": pedido.telefone
            }, {
                "name": "PROBLEMA",
                "content": pedido.problema
            }, {
                "name": "ENDERECO",
                "content": pedido.endereco
            }, {
                "name": "BAIRRO",
                "content": pedido.bairro
            }, {
                "name": "CIDADE",
                "content": pedido.cidade
            }, {
                "name": "VEICULO",
                "content": pedido.veiculo
            }, {
                "name": "MONTADORA",
                "content": pedido.montadora
            }, {
                "name": "ANO",
                "content": pedido.ano
            }]
        }
    }


    // Send the email!
    m.messages.sendTemplate(templateOrcamentoPlim, function (res) {
        log(res);
    }, function (err) {
        log(err);
    });
}