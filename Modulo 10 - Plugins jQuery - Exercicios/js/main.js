$(document).ready(function () {

  $("#nome").mask("", {
    placeholder: "Digite seu Nome Completo",
  });
  $("#cpf").mask("000.000.000-00", {
    placeholder: "000.000.000-00",
  });
  $("#telefone").mask("(00) 00000 - 0000", {
    placeholder: "(11) 99999 - 8888",
  });
  $("#email").mask("", {
    placeholder: "seuemail@email.com",
  });
  $("#cep").mask("00000-000", {
    placeholder: "00000-000",
  });
  $("#endereco").mask("", {
    placeholder: "Digite seu endereço completo",
  });
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      cpf: {
        required: true,
      },
      telefone: {
        required: true,
      },
      email: {
        required: true,
      },
      cep: {
        required: true,
      },
      endereco: {
        required: true,
      },
      messages: {
        nome: "Insira seu nome, Por favor!",
        telefone: "Insira um numero de telefone valido",
        cpf: "Insira seu CPF, Por favor!",
        cep: "Digite seu CEP, por favor!",
        endereco: "Digite seu endereço, por favor!",
        email: "Digite seu email, por favor!"
      },
      submitHandler: function(form){
        console.log(form)
      },
      invalidHandler: function (_evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
          alert(`Existem ${camposIncorretos} campos incorretos`);
        }
      },
    },
  });
});
