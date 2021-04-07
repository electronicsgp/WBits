function axtec(e) {
    e.setAttribute('src', './assets/images/axtec.png')

}

function caxtec(e) {
    e.setAttribute('src', './assets/images/caxtec.png')

}

function czebra(e) {
    e.setAttribute('src', './assets/images/csmart.png')
}

function carbor(e) {
    e.setAttribute('src', './assets/images/cwes.png')
}

function zebra(e) {
    e.setAttribute('src', './assets/images/smart.png')
}

function arbor(e) {
    e.setAttribute('src', './assets/images/wes.png')
}

function tsc(e) {
    e.setAttribute('src', './assets/images/mobi.png')
}


function ctsc(e) {
    e.setAttribute('src', './assets/images/cmobi.png')
}
$(function() {
    $('.btn-group-fab').on('click', '.btn', function() {
        $('.btn-group-fab').toggleClass('active');
    });
    $('has-tooltip').tooltip();
});