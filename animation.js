const burger = document.querySelector('.burger');
const navigation = document.querySelector('.menu-nav');
const navAnimation = document.querySelectorAll('.nav-anim')
const menuLink = document.querySelectorAll('.click')


burger.addEventListener('click', menuShow);
menuLink.forEach(link => {
    link.addEventListener('click', menuShow);
});



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
}

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

document.addEventListener('DOMContentLoaded', function() {
    const urlMeta = document.querySelector('meta[name="url"]');
    const url = urlMeta.getAttribute('content');

    const banner = document.querySelector('.banner');
    const firstChild = banner.firstChild;

    const videoHeader = document.createElement('video');
    videoHeader.src = url + '/wp-content/themes/foce-child/assets/video/Studio_Koukaki-vidéo_header_sans_son.mp4';
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