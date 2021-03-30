// (function(a) {
//     (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
// })(navigator.userAgent || navigator.vendor || window.opera);
// // alert(jQuery.browser.mobile);

// var mobil = jQuery.browser.mobile ? 1 : 9
// var pos;
// var sect = document.querySelectorAll(".seccion");

// var otro = {};
// var i = 0;
// Array.prototype.forEach.call(sect, function(e) {
//     otro[e.id] = e.offsetTop;
// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {


//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in otro) {

//         if (otro[i] <= (scrollPosition - (value(i)))) {

//             var ejemplo = document.querySelector('#' + i);
//             let color = ejemplo.querySelectorAll('.colorsvg');
//             // let productos = ejemplo.querySelectorAll('.svgproductos');
//             // let soluciones = ejemplo.querySelectorAll('.svgsoluciones');
//             // let servicios = ejemplo.querySelectorAll('.svgservicios');
//             // //alert(scrollPosition);
//             // //alert(i);
//             for (let index = 0; index < color.length; index++) {
//                 color[index].style.filter = "invert(50%) sepia(23%) saturate(0) hue-rotate(160deg) brightness(87%) contrast(94%)";

//             }
//             // for (let index = 0; index < productos.length; index++) {
//             //     productos[index].style.filter = "invert(50%) sepia(23%) saturate(0) hue-rotate(160deg) brightness(87%) contrast(94%)";

//             // }
//             // for (let index = 0; index < soluciones.length; index++) {
//             //     soluciones[index].style.filter = "invert(50%) sepia(23%) saturate(0) hue-rotate(160deg) brightness(87%) contrast(94%)";

//             // }
//             // for (let index = 0; index < servicios.length; index++) {
//             //     servicios[index].style.filter = "invert(50%) sepia(23%) saturate(0) hue-rotate(160deg) brightness(87%) contrast(94%)";

//             // }



//         } else {
//             var ejemplo = document.querySelector('#' + i);
//             if (i === 'somos') {
//                 let color = ejemplo.querySelectorAll('.colorsvg');
//                 for (let index = 0; index < color.length; index++) {
//                     color[index].style.filter = "invert(30%) sepia(8%) saturate(5114%) hue-rotate(233deg) brightness(87%) contrast(92%)";

//                 }

//             }
//             if (i === 'soluciones') {
//                 let productos = ejemplo.querySelectorAll('.svgproductos');
//                 for (let index = 0; index < productos.length; index++) {
//                     productos[index].style.filter = "invert(16%) sepia(51%) saturate(5520%) hue-rotate(348deg) brightness(87%) contrast(99%)";

//                 }
//             }
//             if (i === 'productos') {
//                 let soluciones = ejemplo.querySelectorAll('.svgsoluciones');
//                 for (let index = 0; index < soluciones.length; index++) {
//                     soluciones[index].style.filter = "invert(44%) sepia(99%) saturate(499%) hue-rotate(159deg) brightness(87%) contrast(89%)";

//                 }

//             }
//             if (i === 'servicios') {
//                 let servicios = ejemplo.querySelectorAll('.svgservicios');
//                 for (let index = 0; index < servicios.length; index++) {
//                     servicios[index].style.filter = "invert(79%) sepia(68%) saturate(330%) hue-rotate(343deg) brightness(89%) contrast(88%)";

//                 }

//             }






//         }
//     }

// }
setInterval(function() {
        var container = document.getElementById("carouselExampleIndicators");
        var tmp = container.innerHTML;
        container.innerHTML = tmp;
    }, 3000 // length of the whole show in milliseconds
);

function choney(e) {
    e.setAttribute('src', '../assets/images/caxtec.png')

}

function honey(e) {
    e.setAttribute('src', '../assets/images/axtec.png')

}

function czebra(e) {
    e.setAttribute('src', '../assets/images/csmart.png')
}

function carbor(e) {
    e.setAttribute('src', '../assets/images/cwes.png')
}

function zebra(e) {
    e.setAttribute('src', '../assets/images/smart.png')
}

function arbor(e) {
    e.setAttribute('src', '../assets/images/wes.png')
}

function tsc(e) {
    e.setAttribute('src', '../assets/images/mobi.png')
}


function ctsc(e) {
    e.setAttribute('src', '../assets/images/cmobi.png')
}