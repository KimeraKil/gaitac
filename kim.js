const allNotes = {
    notas: {
        assoprar: [
            'DÓ',
            'MI',
            'SOL',
            'DÓ',
            'MI',
            'SOL',
            'DÓ',
            'MI',
            'SOL',
            'DÓ'
        ],
        aspirar: [
            'RÉ',
            'SOL',
            'SI',
            'RÉ',
            'FÁ',
            'LÁ',
            'SI',
            'RÉ',
            'FÁ',
            'LÁ'
        ]
    },
    sigla: {
        assoprar: [
            'C',
            'E',
            'G',
            'C',
            'E',
            'G',
            'C',
            'E',
            'G',
            'C'
        ],
        aspirar: [
            'D',
            'G',
            'B',
            'D',
            'F',
            'A',
            'B',
            'D',
            'F',
            'A'
        ]
    },
    gaita: {
        assoprar: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10'
        ],
        aspirar: [
            '-1',
            '-2',
            '-3',
            '-4',
            '-5',
            '-6',
            '-7',
            '-8',
            '-9',
            '-10'
        ]
    }
}


$(document).ready(function () {

})

$('#optionsNotes').on('change', function () {
    let selectOpt = $('#optionsNotes').val()
    loadGaita(selectOpt)
})

function loadGaita(param) {
    $('.assoprar').html('')
    $('.aspirar').html('')
    for (i = 0; i < allNotes[param].assoprar.length; i++) {
        let buttonTop = `<button onclick="assoprar(${i})">${allNotes[param].assoprar[i]}</button>`
        let buttonBotton = `<button onclick="aspirar(${i})">${allNotes[param].aspirar[i]}</button>`
        $('.assoprar').append(buttonTop)
        $('.aspirar').append(buttonBotton)
    }
}

function assoprar(id) {
    const opt = $('#optConvert').val()
    const select = `<span> ${allNotes[opt].assoprar[id]} </span>`
    $('.box').append(select)
}

function aspirar(id) {
    const opt = $('#optConvert').val()
    const select = `<span> ${allNotes[opt].aspirar[id]} </span>`
    $('.box').append(select)
}

function clearBox() {
    $('.box').html('')
}

function gerarPDF() {
    const imprimir = $('.box').html()

    // Configuração para o html2pdf
    const options = {
        margin: 1,
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'cm', format: 'A4', orientation: 'portrait' }
    };

    // Gera o PDF usando html2pdf
    html2pdf()
        .from(imprimir)
        .set(options)
        .save();

}