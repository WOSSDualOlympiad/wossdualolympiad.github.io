// #region HEADER

let yPos = window.scrollY
const header = document.getElementById('header');

function headerHide(){
    if (yPos < window.scrollY){
        header.style.top = "-10vh";
    } else if (yPos > window.scrollY){
        header.style.top = "0";
    }
    yPos = window.scrollY
}

// #endregion

// #region COUNTDOWN

let countDownDate = new Date("December 16, 2024 15:00:00").getTime();

function timer() {

    // Find the distance between now and the count down date
    let now = new Date().getTime();
    let distance = countDownDate - now; 

    if (distance < 0) {
        distance = 1;
    }

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}

timer()

let x = setInterval(function () {

    timer()

}, 1000);

// #endregion

// #region NAVBAR COLORING

function highlightCurrentNav() {

    // Get the position of the sections
    let homeSection = document.getElementById('home')
    let aboutSection = document.getElementById('about')
    let scheduleSection = document.getElementById('schedule')
    let rulesSection = document.getElementById('rules')
    let formatSection = document.getElementById('format')
    let sponsorsSection = document.getElementById('sponsors')

    // Select the navigation links
    let homeNav = document.getElementById('nav-home');
    let aboutNav = document.getElementById('nav-about');
    let scheduleNav = document.getElementById('nav-schedule')
    let rulesNav = document.getElementById('nav-rules')
    let formatNav = document.getElementById('nav-format')
    let sponsorsNav = document.getElementById('nav-sponsors')

    // Reset styles for all navigation links
    homeNav.style.color = '';
    aboutNav.style.color = '';
    scheduleNav.style.color = '';
    rulesNav.style.color = '';
    formatNav.style.color = '';
    sponsorsNav.style.color = '';

    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Get the position of each section
    const homePos = homeSection.offsetTop;
    const aboutPos = aboutSection.offsetTop;
    const schedulePos = scheduleSection.offsetTop;
    const rulesPos = rulesSection.offsetTop;
    const formatPos = formatSection.offsetTop;
    const sponsorsPos = sponsorsSection.offsetTop;

    // Logic to highlight the current section's nav link
    if (scrollPosition >= homePos && scrollPosition < aboutPos) {
        homeNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= aboutPos && scrollPosition < schedulePos) {
        aboutNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= schedulePos && scrollPosition < rulesPos) {
        scheduleNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= rulesPos && scrollPosition < formatPos) {
        rulesNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= formatPos && scrollPosition < sponsorsPos){
        formatNav.style.color = 'hsl(140, 60%, 40%)';
    } else if (scrollPosition >= sponsorsPos) {
        sponsorsNav.style.color = 'hsl(140, 60%, 40%)';
    }
};

window.onload = highlightCurrentNav();

// #endregion

/* BACKGROUND SCROLLPAST FIX */

function adjustVideoPosition() {
    const video = document.querySelector('video');
    const footer = document.querySelector('footer');
    const footerTop = footer.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY > footerTop - window.innerHeight) {
            video.style.position = 'absolute';
            video.style.bottom = 'auto'; // Adjust if necessary based on your layout
        } else {
            video.style.position = 'fixed';
            video.style.bottom = '0';
        }
    });
}

adjustVideoPosition();
