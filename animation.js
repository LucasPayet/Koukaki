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
    const sections = document.querySelectorAll('.title-anim');
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
// window.addEventListener('scroll', () => {
//     clearTimeout(scrollTimeout);

//     var animationSpeed = "5s"
//     document.documentElement.style.setProperty('--animation-speed', animationSpeed);
//     scrollTimeout = setTimeout(() => {
//         animationSpeed = "20s"
//         document.documentElement.style.setProperty('--animation-speed', animationSpeed);
//     },1000);
    
// })

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