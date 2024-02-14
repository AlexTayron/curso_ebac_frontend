$(document).ready(function() {
    let countTask = 1;

    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#bt-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const digitarNovaTarefa = $('#nova-tarefa').val();
        if (digitarNovaTarefa.trim() !== '') {
            const novoItem = $('<li></li>').hide(); 
            const textoTarefa = $('<span></span>').text(`${countTask} - ${digitarNovaTarefa}`);
            novoItem.append(textoTarefa);
            countTask++;
            $('ul').append(novoItem);
            novoItem.slideDown();
            $('#nova-tarefa').val('');
        }
    });

    $('ul').on('click', 'li', function() {
        const textoTarefa = $(this).find('span');
        textoTarefa.toggleClass('completed');
    });
    $('#limpar-itens').click(function() {
        $('ul').empty();
        countTask = 1;
    });
});
