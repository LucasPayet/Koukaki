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
    const sections = document.querySelectorAll('.fade-in-anim');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in');
            // window.removeEventListener('scroll', addFadeInAnimation);
        }
    });
}

window.addEventListener('scroll', addFadeInAnimation);

document.addEventListener('DOMContentLoaded', function() {
    addFadeInAnimation();

    // console.log("Navigateur" + navigator.userAgent);
    sleep(2000)
    const banner = document.querySelector('.banner');
    const firstChild = banner.firstChild;

    const videoHeader = document.createElement('video');
    videoHeader.src = 'http://localhost/Koukaki/wp-content/themes/foce-child/assets/video/Studio_Koukaki-vidéo_header_sans_son.mp4';
    videoHeader.autoplay = true;
    videoHeader.loop = true;
    videoHeader.className = 'header-video';

    const isDesktop = window.innerWidth;

    if (isDesktop >  769) {
        banner.insertBefore(videoHeader, firstChild);
    }
});