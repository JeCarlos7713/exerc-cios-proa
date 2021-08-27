function calcular_media() {
    // Declaração de variáveis
    var nota1, nota2, nota3, nota4, media;

    // Entrada de dados

    //nota1 = $Number($("#notas1").val()); em JQUERY
    nota1 = Number(document.getElementById("nota1").value);
    nota2 = Number(document.getElementById("nota2").value);
    nota4 = Number(document.getElementById("nota4").value);
    nota3 = Number(document.getElementById("nota3").value);


    // Processamento de Dados
    media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Saída de Dados

    document.getElementById("form-notas").classList.add("d-none");
    document.getElementById("show-result").classList.remove("d-none");
    //document.getElementsByClass("result-value").html(media);

    //$(".form-notas").addClass("d-none");
    //$(".show-result").removeClass("d-none");
    $(".result-value").html(parseInt(media));

    
    
    console.log("Média é igual a "+media);
    //alert("Média é igual a "+media);

     //return false; cancela o envio dos dados para o servidor
}

function voltar() {
    $("input").val("");

    document.getElementById("form-notas").classList.remove("d-none");
    document.getElementById("show-result").classList.add("d-none");
    //$(".form-notas").removeClass("d-none");
    //$(".show-result").addClass("d-none");
    //document.getElementById('form_notes').reset();
    
    //$(".result-value").html("...");
}

