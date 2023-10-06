// console.log("Navigateur" + navigator.userAgent);

// const banner = document.querySelector('.banner');

// const videoHeader = document.createElement('video');
// videoHeader.src = 'http://localhost/Koukaki/wp-content/themes/foce-child/assets/video/Studio_Koukaki-vidéo_header_sans_son.mp4';
// videoHeader.autoplay = true;
// videoHeader.loop = true;
// videoHeader.className = 'header-video';

// const isDesktop = window.innerWidth;

// if (isDesktop >  769) {
//     banner.appendChild(videoHeader);
// }

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.menu-nav');
const navAnimation = document.querySelectorAll('.nav-anim')

burger.addEventListener('click', menuShow);

function menuShow(){
    navigation.classList.toggle('nav-position')
    burger.classList.toggle('active')
    setTimeout(function(){
        navAnimation.forEach(element => {
        element.classList.toggle('title-up')
    });
    }, 500)
}


let scrollTimeout;


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



function addFadeInAnimation() {
    const sections = document.querySelectorAll('.title-studio');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('title-up');
            // window.removeEventListener('scroll', addFadeInAnimation);
        }
    });

    // const titles = document.querySelectorAll('.title_up');
    // titles.forEach(title => {
    //     if (isInViewport(title)) {
    //         $('h2>').css('transform', 'translatey(500px)');
    //         // window.removeEventListener('scroll', addFadeInAnimation);
    //     }
    // });
    

}
// (function(){
// $(document).ready(function() {
//     $(window).on('scroll', function() {
//         $('.title_up').each(function() {
//             if (isInViewport(this)) {
//                 $('span', this).css('transform', 'translateY(500px)');
//                 // $(window).off('scroll', addFadeInAnimation);
//             }
//         });
//     });
// });
// })();



window.addEventListener('scroll', addFadeInAnimation);

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    var animationSpeed = "5s"
    document.documentElement.style.setProperty('--animation-speed', animationSpeed);
    scrollTimeout = setTimeout(() => {
        animationSpeed = "20s"
        document.documentElement.style.setProperty('--animation-speed', animationSpeed);
    },2500);
    
})

// const title = ;

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         const x = entry.target.querySelector('.title-anim')
//         if (entry.isIntersecting) {
//             x.classList.add('title-up');
//             return;
//         }
//     });
// });

// observer.observe(document.querySelector('.title-anim'));

document.addEventListener('DOMContentLoaded', function() {
    // addFadeInAnimation();
    
    const banner = document.querySelector('.banner');
    const firstChild = banner.firstChild;

    const videoHeader = document.createElement('video');
    videoHeader.src = 'http://localhost/Koukaki/wp-content/themes/foce-child/assets/video/Studio_Koukaki-vidéo_header_sans_son.mp4';
    videoHeader.autoplay = true;
    videoHeader.loop = true;
    videoHeader.className = 'header-video';

    const isDesktop = window.innerWidth;

    setTimeout(function(){
        if (isDesktop >  769) {
            banner.insertBefore(videoHeader, firstChild);
        }
    }, 3000)

});

// const target = document.querySelector('.parallax');
// const pos = target.getBoundingClientRect();

// const topP =  rect.top + window.scrollY;
// console.log(topP);


// if (isInViewport(target)) {
//     // console.log(window.scrollY);
//     const defaultY = window.scrollY;

// }
// window.addEventListener('scroll', function(e) {
//     const target = document.querySelector('.parallax');
//     let scroll = window.scrollY;
//     let transX = scroll / 8;
//     // console.log(transX)
//     target.style.transform = 'translateX(-'+transX+'px)';
// });
var s = skrollr.init();

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    loop: true,
    loopedSlides: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: -100,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  });