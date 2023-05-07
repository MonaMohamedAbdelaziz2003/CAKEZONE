// header
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
// arrow
var arrow = document.getElementById("arrow");
//count 
var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");
var count3 = document.getElementById("count3");
var count4 = document.getElementById("count4");
var page2 = document.getElementById("page2");

function animat(ele, start, end, duration) {
    var increment = 0;
    if (end > start) {
        increment = 50;
    } else {
        increment = -50;
    }
    var timer = setInterval(() => {
        start += increment;
        ele.textContent = start;
        if (start == end) {
            clearInterval(timer);
            return end;
        }

    }, duration);


}
// 
window.onscroll = function() {
    // header
    if (window.pageYOffset >= sticky) { //pageYOffset//offsetTop
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed")
    }
    // arrow
    if (window.scrollY >= 1200) {
        arrow.style.opacity = 1;
    } else {
        arrow.style.opacity = 0;
    }
    // count
    if (window.scrollY > 1000 && window.scrollY < 1100) {
        animat(count1, 0, 12000, 1);
        animat(count2, 0, 12000, 1);
        animat(count3, 0, 12000, 1);
        animat(count4, 0, 12000, 1);
    }
    // else {
    //     count1.textContent = 1200;
    //     count2.textContent = 1200;
    //     count3.textContent = 1200;
    //     count4.textContent = 1200;
    // }
}
arrow.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



// ///////////////////menu
var div1 = document.getElementById("div1_header");

function xx() {
    if (div1.style.height == "0px") {
        div1.style.height = "auto";
        div1.classList.add("border1");
    } else {
        div1.style.height = "0px"
        div1.classList.remove("border1");
    }
}