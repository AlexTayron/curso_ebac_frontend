$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
    });
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000 - 0000',{
        placeholder: '(12) 12345 - 1234'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome:  'Insira seu nome, Por favor!',
            telefone: 'Insira um numero de telefone valido',
            email: 'Digite seu email, por favor!'
        },
        submitHandler: function(form){

        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')

        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})