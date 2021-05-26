function navtoggle(x, y) {
    x.classList.toggle("change");
    document.getElementsByClassName('tnav')[y].classList.toggle("actives");
    // document.getElementsByClassName('tnav')[].classList.toggle("actives");
}

setInterval(function() {
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    if (hr > 12) {
        day = 'PM';
        hr = hr - 12;
    }
    if (hr == 0) {
        hr = 12;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
});

function dark(x) {
    x.classList.toggle("darkmodetoggle");
    document.getElementsByClassName('darktoggle')
        // document.querySelector('div').classList.toggle("textblack");
    document.getElementsByClassName('home')[0].classList.toggle("whitebg");
    document.getElementsByClassName('schedule')[0].classList.toggle("whitebg");

    var header = document.querySelectorAll('header');
    var footer = document.querySelectorAll('footer');
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
        footer[i].classList.toggle("whitebg");
    }

    var image = document.getElementById('logo');
    if (image.src.match("img/logowhite.png")) {
        image.src = "img/logoblack.png";
    } else {
        image.src = "img/logowhite.png";
    }
    var images = document.getElementById('ttimg');
    if (images.src.match("img/timetabledark.png")) {
        images.src = "img/timetablelight.png";
    } else {
        images.src = "img/timetabledark.png";
    }
    // document.getElementById('homep').classList.toggle('whitebg');

}

function page(x, y) {
    document.getElementsByClassName('home')[0].style.display = 'none';
    document.getElementsByClassName('exams')[0].style.display = 'none';
    document.getElementsByClassName('study')[0].style.display = 'none';
    document.getElementsByClassName('schedule')[0].style.display = 'none';


    document.getElementsByClassName(x)[0].style.display = 'flex';
    document.querySelectorAll('header ul li a')[0].style.color = '#0169b2';
    document.querySelectorAll('header ul li a')[1].style.color = '#0169b2';
    document.querySelectorAll('header ul li a')[2].style.color = '#0169b2';
    document.querySelectorAll('header ul li a')[3].style.color = '#0169b2';


    // y.classList.toggle("active");
    y.style.color = "#ff5e8e";


}
var nextclass = document.getElementById('nextclass');
var ongoinglink = document.getElementById('linklive');
var ongoing = document.getElementById('ongoing');
var currclass = "Loading...";
var currlink = "#";
var upclass = 'Upcoming: ---------';

setInterval(() => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    nextclass.innerHTML = upclass;
    ongoinglink.href = currlink;
    ongoing.innerHTML = currclass;
    let sec = currentDate.getSeconds();
    let min = currentDate.getMinutes();
    let hr = currentDate.getHours();
    var time = hr * 100 + min;
    console.log(time);
    if (currlink == "") {
        ongoinglink.style.cursor = " not-allowed"
        ongoinglink.style.backgroundColor = "#c0c0c0"
        ongoinglink.style.borderColor = "gray"
        ongoinglink.style.animation = "none";
        ongoinglink.style.pointerEvents = "none";

    } else {
        ongoinglink.style.opacity = 1;
        ongoinglink.style.animation = "blinking 1s infinite"
    }

    switch (day) {
        case 1:
            //#####################           MONDAY              ################################
            if (time < 800) {
                currclass = "........";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 800 && time <= 850) {
                currclass = ".......";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 850 && time <= 940) {
                currclass = ".......";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 940 && time <= 1030) {
                currclass = ".......";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 1030 && time <= 1120) {
                currclass = "Electronics Practical";
                currlink = "https://tiet.zoom.us/my/eced20";
                upclass = "Electronics Lecture @ 12:10";
            } else if (time >= 1120 && time <= 1210) {
                currclass = "Electronics Practical";
                currlink = "https://tiet.zoom.us/my/eced20";
                upclass = "Electronics Lecture @ 12:10";
            } else if (time >= 1210 && time <= 1300) {
                currclass = "Electronics Lecture";
                currlink = "https://tiet.zoom.us/my/eced1";
                upclass = "Physics Lecture @ 01:30";
            } else if (time >= 1300 && time <= 1350) {
                currclass = ".......";
                currlink = "";
                upclass = "Physics Lecture @ 01:30";
            } else if (time >= 1350 && time <= 1440) {
                currclass = "Physics Lecture";
                currlink = "https://tiet.zoom.us/my/spms2";
                upclass = "Maths Lecture @ 02:40";
            } else if (time >= 1440 && time <= 1530) {
                currclass = "Maths Lecture";
                currlink = "https://tiet.zoom.us/my/tietsom4";
                upclass = "Comp Lecture @ 03:30";
            } else if (time >= 1530 && time <= 1620) {
                currclass = "Comp Lecture";
                currlink = "https://tiet.zoom.us/my/csed21";
                upclass = "Profcomm Lecture @ 04:20";
            } else if (time >= 1620 && time <= 1710) {
                currclass = "Profcomm Lecture";
                currlink = "";
                upclass = "Profcomm Practical @ 05:10";
            } else if (time >= 1710 && time <= 1800) {
                currclass = "Profcomm Practical";
                currlink = "";
                upclass = "none";
            } else {
                currclass = "It's over now!";
                currlink = "";
                upclass = "none";
            }
            break;
        case 2:
            //Tuesday
            if (time < 800) {
                currclass = "........";
                currlink = "";
                upclass = "Computer Practical @ 8:00";
            } else if (time >= 800 && time <= 850) {
                currclass = "Computer Practical";
                currlink = "";
                upclass = "ED Lecture @ 10:30";
            } else if (time >= 850 && time <= 940) {
                currclass = "Computer Practical";
                currlink = "";
                upclass = "ED Lecture @ 10:30";
            } else if (time >= 940 && time <= 1030) {
                currclass = ".......";
                currlink = "";
                upclass = "ED Lecture @ 10:30";
            } else if (time >= 1030 && time <= 1120) {
                currclass = "ED Lecture";
                currlink = "https://tiet.zoom.us/my/cied8";
                upclass = "Maths Lecture @ 11:20";
            } else if (time >= 1120 && time <= 1210) {
                currclass = "Maths Lecture";
                currlink = "https://tiet.zoom.us/my/tietsom12";
                upclass = "Comp Lecture @ 12:10";
            } else if (time >= 1210 && time <= 1300) {
                currclass = "Computer Lecture";
                currlink = "https://tiet.zoom.us/my/csed1";
                upclass = "Physics Lecture @ 1:50";
            } else if (time >= 1300 && time <= 1350) {
                currclass = ".......";
                currlink = "";
                upclass = "Physics Lecture @ 1:50";
            } else if (time >= 1350 && time <= 1440) {
                currclass = "Physics Lecture";
                currlink = "https://tiet.zoom.us/my/spms3";
                upclass = "ED Lab @ 2:40";
            } else if (time >= 1440 && time <= 1530) {
                currclass = "ED Lab";
                currlink = "";
                upclass = "Profcomm Practical @ 4:20";
            } else if (time >= 1530 && time <= 1620) {
                currclass = "ED Lab";
                currlink = "";
                upclass = "Profcomm Practical @ 4:20";
            } else if (time >= 1620 && time <= 1710) {
                currclass = "Profcomm Practical";
                currlink = "";
                upclass = "none";
            } else if (time >= 1710 && time <= 1800) {
                currclass = "Profcomm Practical";
                currlink = "";
                upclass = "none";
            } else {
                currclass = "It's over now!";
                currlink = "";
                upclass = "none";
            }
            break;
        case 3:
            //######################################      Wednesday           ########################################
            if (time < 800) {
                currclass = "........";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 800 && time <= 850) {
                currclass = ".......";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 850 && time <= 940) {
                currclass = ".......";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 940 && time <= 1030) {
                currclass = ".......";
                currlink = "";
                upclass = "Electronics Practical @ 10:30";
            } else if (time >= 1030 && time <= 1120) {
                currclass = "Electronics Practical";
                currlink = "https://tiet.zoom.us/my/eced21";
                upclass = "ED Lecture @ 11:20";
            } else if (time >= 1120 && time <= 1210) {
                currclass = "ED Lecture";
                currlink = "https://tiet.zoom.us/my/cied3";
                upclass = "Comp Lecture @ 12:10";
            } else if (time >= 1210 && time <= 1300) {
                currclass = "Computer Lecture";
                currlink = "https://tiet.zoom.us/my/csed8";
                upclass = "Maths Tut @ 1:50";
            } else if (time >= 1300 && time <= 1350) {
                currclass = ".......";
                currlink = "";
                upclass = "Maths Tut @ 1:50";
            } else if (time >= 1350 && time <= 1440) {
                currclass = "Maths Tut";
                currlink = "";
                upclass = "ED Lab @ 2:40";
            } else if (time >= 1440 && time <= 1530) {
                currclass = "ED Lab";
                currlink = "";
                upclass = "none";
            } else if (time >= 1530 && time <= 1620) {
                currclass = "ED Lab";
                currlink = "";
                upclass = "none";
                // } else if (time >= 1620 && time <= 1710) {
                //   currclass = "Break";
                //   currlink = "";
                //   upclass = "#";
                // } else if (time >= 1710 && time <= 1800) {
                //   currclass = "Break";
                //   currlink = "";
                //   upclass = "#";
            } else {
                currclass = "It's over now!";
                currlink = "";
                upclass = "";
            }
            break;
        case 4:
            //#######################################             Thursdayyyyy           ################
            if (time < 800) {
                currclass = "........";
                currlink = "";
                upclass = "Maths Lecture @ 11:20";
            } else if (time >= 800 && time <= 850) {
                currclass = ".......";
                currlink = "";
                upclass = "Maths Lecture @ 11:20";
            } else if (time >= 850 && time <= 940) {
                currclass = ".......";
                currlink = "";
                upclass = "Maths Lecture @ 11:20";
            } else if (time >= 940 && time <= 1030) {
                currclass = ".......";
                currlink = "";
                upclass = "Maths Lecture @ 11:20";
            } else if (time >= 1030 && time <= 1120) {
                currclass = ".......";
                currlink = "";
                upclass = "Maths Lecture @ 11:20";
            } else if (time >= 1120 && time <= 1210) {
                currclass = "Maths Lecture";
                currlink = "https://tiet.zoom.us/my/tietsom10";
                upclass = "Electronics Lecture @ 12:10";
            } else if (time >= 1210 && time <= 1300) {
                currclass = "Electronics Lecture";
                currlink = "https://tiet.zoom.us/my/eced2";
                upclass = "none";
            }
            // else if (time >= 1300 && time <= 1350) {
            //   currclass = "Break!";
            //   currlink = "";
            //   upclass = "#";
            // } else if (time >= 1350 && time <= 1440) {
            //   currclass = "Physics Lecture";
            //   currlink = "";
            //   upclass = "#";
            // } else if (time >= 1440 && time <= 1530) {
            //   currclass = "ED Lab";
            //   currlink = "";
            //   upclass = "#";
            // } else if (time >= 1530 && time <= 1620) {
            //   currclass = "ED Lab";
            //   currlink = "";
            //   upclass = "#";
            // } else if (time >= 1620 && time <= 1710) {
            //   currclass = "Profcomm Practical";
            //   currlink = "";
            //   upclass = "#";
            // } else if (time >= 1710 && time <= 1800) {
            //   currclass = "Profcomm Practical";
            //   currlink = "";
            //   upclass = "#";}
            else {
                currclass = "It's over now!";
                currlink = "";
                upclass = "none";
            }
            break;
        case 5:
            //#######################################                    Fridayyy               #############################
            if (time < 800) {
                currclass = "........";
                currlink = "";
                upclass = "Physics Practical @ 10:30";
            } else if (time >= 800 && time <= 850) {
                currclass = ".......";
                currlink = "";
                upclass = "Physics Practical @ 10:30";
            } else if (time >= 850 && time <= 940) {
                currclass = ".......";
                currlink = "";
                upclass = "Physics Practical @ 10:30";
            } else if (time >= 940 && time <= 1030) {
                currclass = ".......";
                currlink = "";
                upclass = "Physics Practical @ 10:30";
            } else if (time >= 1030 && time <= 1120) {
                currclass = "Physics Practical";
                currlink = "";
                upclass = "Physics Lecture @ 12:10";
            } else if (time >= 1120 && time <= 1210) {
                currclass = "Physics Practical";
                currlink = "";
                upclass = "Physics Lecture @ 12:10";
            } else if (time >= 1210 && time <= 1300) {
                currclass = "Physics Lecture";
                currlink = "https://tiet.zoom.us/my/spms2";
                upclass = "Profcomm Lecture @ 1:50";
            } else if (time >= 1300 && time <= 1350) {
                currclass = ".......";
                currlink = "";
                upclass = "Profcomm Lecture @ 1:50";
            } else if (time >= 1350 && time <= 1440) {
                currclass = "Profcomm Lecture";
                currlink = "";
                upclass = "Physics Tut @ 2:40";
            } else if (time >= 1440 && time <= 1530) {
                currclass = "Physics Tut";
                currlink = "";
                upclass = "Electronics Tut @ 3:30";
            } else if (time >= 1530 && time <= 1620) {
                currclass = "Electronics Tut";
                currlink = "";
                upclass = "none";
                // } else if (time >= 1620 && time <= 1710) {
                //   currclass = "Profcomm Practical";
                //   currlink = "";
                //   upclass = "#";
                // } else if (time >= 1710 && time <= 1800) {
                //   currclass = "Profcomm Practical";
                //   currlink = "";
                //   upclass = "#";
            } else {
                currclass = "It's over!";
                currlink = "";
                upclass = "none";
            }
            break;
        case 6:
            //###############################                    Saturdayyyy              ##########################
            //
            currclass = "No classes today !";
            currlink = "";
            break;
        case 0:
            //#####################################                  Sundayyyyyyyyyyyy         ###########################
            currclass = "No classes today !";
            currlink = "";
            break;
        default:
            break;
    }
});