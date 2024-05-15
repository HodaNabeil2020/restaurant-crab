let sectionPrice = document.querySelector(".our-price");
let percentSpans = document.querySelectorAll(".percent span");

// =================statsContainer==================================
let sectionStats = document.querySelector(".stats");
let spanStats = document.querySelectorAll(".stats .conatainer-stats .box  span");
let started = false; // Function Started ? No;
window.onscroll = function () {
    if (window.scrollY >= sectionStats.offsetTop) {
        if (!started) {
            spanStats.forEach((span) => startCount(span));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}

//Price
window.onscroll = function () {
    if (window.scrollY >= sectionPrice.offsetTop) {
        percentSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};

// Counter Section => Requests
let countDownDate = new Date("Augst 30, 2023 23:59:59").getTime();
let count = setInterval(() => {
    let datenew = new Date();
    let difference = countDownDate - datenew;
    //  unite
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60 * 60 * 24)) / 1000);

    document.querySelector(".average .day").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".average .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".average .minutes").innerHTML = minutes < 10 ? `${minutes} ` : minutes;
    document.querySelector(".average .seconds").innerHTML = seconds < 10 ? `${minutes}` : seconds;
    if (difference <= 0) {
        clearInterval(count);
    }
}, 1000);
