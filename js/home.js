const sections = document.querySelectorAll(".sc-section");
var elemento = document.getElementById("otro");
window.onscroll = () => scrollspy();
window.onload = () => scrollspy();
window.onresize = () => scrollspy();

const scrollspy = () => {

    const pageYPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach((section) => {
        const sectionYPosition = section.offsetTop;
        let ejemplo = document.querySelector('#' + section.id);
        if (pageYPosition > sectionYPosition - window.screen.height + 200) {
            // alert(section.id);
            if ("test" === section.id) {
                // alert("hola");
                elemento.className += " animate__animated animate__fadeInUp";

            }
        } else {
            elemento.className = "row  d-flex justify-content-center mx-xl-5";
        }
    });
};

scrollspy();

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