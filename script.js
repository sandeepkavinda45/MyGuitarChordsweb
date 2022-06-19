// var x = 1;

// function hideAndShow() {
//     if (x == 1) {
//         n();
//     } else {
//         m();
//         x = x - 2;
//     }
//     x = x + 1;
// }

// function m() {
//     document.getElementById("vid").style.display = "block";
//     document.getElementById("vid2").style.display = "block";
//     document.getElementById("vid3").style.display = "block";
//     document.getElementById("vid4").style.display = "block";
//     document.getElementById("vid5").style.display = "block";
//     document.getElementById("vid6").style.display = "block";
//     document.getElementById("vid7").style.display = "block";
//     document.getElementById("vid8").style.display = "block";
//     document.getElementById("vid9").style.display = "block";
//     document.getElementById("vid10").style.display = "block";
//     document.getElementById("vid11").style.display = "block";
//     document.getElementById("vid12").style.display = "block";
//     document.getElementById("vid13").style.display = "block";
//     document.getElementById("vid14").style.display = "block";
//     var y = document.getElementById("hideShowBtn");
//     y.classList.remove("btn-primary");
//     y.classList.add("btn-danger");
//     y.innerHTML = "Hide Videos";

// }

// function n() {
//     document.getElementById("vid").style.display = "none";
//     document.getElementById("vid2").style.display = "none";
//     document.getElementById("vid3").style.display = "none";
//     document.getElementById("vid4").style.display = "none";
//     document.getElementById("vid5").style.display = "none";
//     document.getElementById("vid6").style.display = "none";
//     document.getElementById("vid7").style.display = "none";
//     document.getElementById("vid8").style.display = "none";
//     document.getElementById("vid9").style.display = "none";
//     document.getElementById("vid10").style.display = "none";
//     document.getElementById("vid11").style.display = "none";
//     document.getElementById("vid12").style.display = "none";
//     document.getElementById("vid13").style.display = "none";
//     document.getElementById("vid14").style.display = "none";
//     var y = document.getElementById("hideShowBtn");
//     y.classList.remove("btn-danger");
//     y.classList.add("btn-primary");
//     y.innerHTML = "Show Videos";

// }

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("underButtons").style.bottom = "0px";
    } else {
        document.getElementById("underButtons").style.bottom = "-50px";
    }
}


function toRondeCovers() {
    const element = document.getElementById("ronde");
    element.scrollIntoView();
}

function toHome() {
    const element = document.getElementById("home");
    element.scrollIntoView();
}

function tolist1() {
    const element = document.getElementById("list1");
    element.scrollIntoView();
}

function toList2() {
    const element = document.getElementById("list2");
    element.scrollIntoView();
}

function popupVid1() {
    $('#vid1').bPopup();
}

function popupVid2() {
    $('#vid2').bPopup();
}

function popupVid3() {
    $('#vid3').bPopup();
}

function popupVid4() {
    $('#vid4').bPopup();
}

function popupVid5() {
    $('#vid5').bPopup();
}

function popupVid6() {
    $('#vid6').bPopup();
}

function popupVid7() {
    $('#vid7').bPopup();
}

function popupVid8() {
    $('#vid8').bPopup();
}

function popupVid9() {
    $('#vid9').bPopup();
}

function popupVid10() {
    $('#vid10').bPopup();
}

function popupVid11() {
    $('#vid11').bPopup();
}

function popupVid12() {
    $('#vid12').bPopup();
}

function popupVid13() {
    $('#vid13').bPopup();
}

function popupVid14() {
    $('#vid14').bPopup();
}