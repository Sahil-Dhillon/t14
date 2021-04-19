function navtoggle(x, y) {
    x.classList.toggle("change");
    document.getElementsByClassName('tnav')[y].classList.toggle("actives");
    // document.getElementsByClassName('tnav')[].classList.toggle("actives");
}

function dark() {

    document.getElementsByClassName('darktoggle')
    document.querySelector('p').classList.toggle("textblack");
    document.getElementsByClassName('home')[0].classList.toggle("whitebg");
    document.getElementsByClassName('schedule')[0].classList.toggle("whitebg");

    var header = document.querySelectorAll('header');
    var smallnav1 = document.querySelectorAll('.smallnav1');
    var evenrows = document.getElementsByClassName('blanktde');
    var oddrows = document.getElementsByClassName('blanktdo');
    var timerow = document.getElementsByClassName('time');
    var tnavbars = document.getElementsByClassName('bar');
    var whitetext = document.getElementsByClassName('whitetext');


    for (let i = 0; i < evenrows.length; i++) {

        evenrows[i].classList.toggle("lightyellowbg");
    }
    for (let j = 0; j < oddrows.length; j++) {
        oddrows[j].classList.toggle("offwhitebg");
    }
    for (let i = 0; i < timerow.length; i++) {
        timerow[i].classList.toggle("darkpinkbg");
    }
    for (let i = 0; i < tnavbars.length; i++) {
        tnavbars[i].classList.toggle("blackbg");
    }
    for (let i = 0; i < whitetext.length; i++) {
        whitetext[i].classList.toggle("textblack");
    }
    for (let i = 0; i < header.length; i++) {
        header[i].classList.toggle("whitebg");
        smallnav1[i].classList.toggle("whiteblur");
    }

    var image = document.getElementById('logo');
    if (image.src.match("img/logowhite.png")) {
        image.src = "img/logoblack.png";
    } else {
        image.src = "img/logowhite.png";
    }
    var images = document.getElementById('slogo');
    if (images.src.match("img/logowhite.png")) {
        images.src = "img/logoblack.png";
    } else {
        images.src = "img/logowhite.png";
    }
    // document.getElementById('homep').classList.toggle('whitebg');

}

function page(x) {
    document.getElementsByClassName('home')[0].style.display = 'none';
    document.getElementsByClassName('exams')[0].style.display = 'none';
    document.getElementsByClassName('study')[0].style.display = 'none';
    document.getElementsByClassName('schedule')[0].style.display = 'none';
    document.getElementsByClassName(x)[0].style.display = 'flex';


}