/* fullscreen-bg-text-change-effect */
document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.remove('showMenu');
});
document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.navbar-collapse').classList.toggle('showMenu');
});

// transition stopper
/* & business-landing-page */
let resizeTimer;
window.addEventListener('resize', () => {
    document.getElementsByClassName("fullscreen-bg-text-change-effect")[0].classList.add('resize-trans-stop');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.getElementsByClassName("fullscreen-bg-text-change-effect")[0].classList.remove('resize-trans-stop');
    }, 400);
    document.getElementsByClassName("business-landing-page")[0].classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.getElementsByClassName("business-landing-page")[0].classList.remove('resize-animation-stopper');
    }, 400);
});

// text change 
const icons = ['tree', 'apple-alt', 'burn'];
const subtext = ['Coding Projects', 'Algorithm Problems', 'Machine Learning'];
const largeText = ['do something creative everyday', 'creativity never ends', 'creativity requires courage'];
let count = 1;

function textChange(){
    const mainDiv = document.querySelector('.hero-content-change');

    setInterval(() => {
        mainDiv.innerHTML = `
            <div>
                <span>
                    <i class = "fas fa-${icons[count]}"></i>
                </span>
                <h3>
                    <div class = "line"></div>
                    <span>${subtext[count]}</span>
                    <div class = "line"></div>
                </h3>
                <h1 class = "hero-lg-text">
                    ${largeText[count]}
                </h1>
            </div>
        `;
        count++;
        if(count > 2) count = 0;
    }, 4000);
}
textChange();

/* landing-page-bg-slider */

const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;

dottedBtns.forEach((item) => {
    item.addEventListener('click', () => {
        slideCount = item.dataset.id;
        slideShowcase();
    });
});

function slideShowcase(){
    const displayWidth = document.querySelector('.showcase').clientWidth;
    document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`;
}

window.addEventListener('resize', slideShowcase);


/* banner-section-with-floating-img */

const imgSecond = document.querySelector('.content-right img:last-child');

imgSecond.addEventListener('mouseover', () => {
    document.querySelector('.content-right img:first-child').style.opacity = 0;
});

imgSecond.addEventListener('mouseleave', () => {
    document.querySelector('.content-right img:first-child').style.opacity = 1;
});