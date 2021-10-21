/* Fetch API */
const designList = document.getElementById('design');
const searchBtn = document.getElementById('search-btn');
const imageDetailsContent = document.querySelector('.image-details-content');
const imageCloseBtn = document.getElementById('image-close-btn');
const client_id = "1OosJucB6P5xcZo-i-orjAIBg4heA-So7bzadHSmpGk";
const imageAddBtn = document.getElementById('design-item-add-btn');

// event listeners
searchBtn.addEventListener('click',searchImg);
designList.addEventListener('click', getImageDetail);
imageCloseBtn.addEventListener('click', () => {
    imageDetailsContent.parentElement.classList.remove('showImage');
    scrollChange();
});
document.getElementsByTagName("form")[0].setAttribute("onsubmit","event.preventDefault();");
document.getElementsByClassName("search-input")[0].addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

window.addEventListener('DOMContentLoaded', loadImg);
imageAddBtn.addEventListener('click',(e)=>{
    loadImg(e,document.getElementsByClassName("search-input")[0].value);
});

function searchImg(e){
    designList.getElementsByClassName("design-content")[0].innerHTML="";
    const key=document.getElementsByClassName("search-input")[0].value;
    loadImg(e,key);
}
function loadImg(e,query = 'random') {
    const url = "https://api.unsplash.com/photos/random?client_id="+client_id+"&query="+query+"&count=10";
    console.log(url);
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < 9; i++) {
                const design_item = `<div class = "design-item">
                                        <div class = "design-img">
                                            <img src = "${data[i+1].urls.regular}" imageId = "${data[i+1].id}" alt = "/assets/unsplash-simple-blog/images/art-design-1.jpg">
                                            <span><i class = "far fa-heart"></i>${data[i+1].likes}</span>
                                            <span>Unsplash</span>
                                        </div>
                                    </div>`;
                designList.getElementsByClassName("design-content")[0].innerHTML+=design_item;
            }
            document.getElementsByTagName("header")[0].style.background = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("+ data[0].urls.regular +") center/cover no-repeat fixed";
    });
}

// get recipe of the meal
function getImageDetail(e){
    if(e.target.classList.contains('design-img')){
        const imageId = e.target.getElementsByTagName("img")[0].getAttribute("imageid");
        fetch(`https://api.unsplash.com/photos/${imageId}?client_id=${client_id}`)
        .then(response => response.json())
        .then(data => unsplashModal(data));
    }
}

// create a modal
function unsplashModal(designItem){
    let loc = "";
    if(designItem.location.city!==null&&designItem.location.country!==null){
        loc += designItem.location.city + ", " + designItem.location.country;
    } else if(designItem.location.city!==null){
        loc += designItem.location.city;
    } else if(designItem.location.country!==null){
        loc += designItem.location.country;
    }  
    let desc = "";
    if(designItem.description!==null){
        desc += designItem.description;
    } else {
        desc += "--------";
    }
    const html = `
        <div class = "image-img">
            <img src = "${designItem.urls.full}" alt = "/assets/unsplash-simple-blog/images/art-design-1.jpg">
            <span><i class = "far fa-heart"></i>${designItem.likes}</span>
            <span>Unsplash</span>
        </div>
        <h2 class = "image-title">${desc}</h2>
        <div class = "image-instruct">
            <h3>Posted: ${designItem.updated_at.split('T')[0]}</h3>
            <p>${loc}</p>
            <p class = "image-category">${designItem.user.username}</p>
        </div>
        <div class = "image-link">
            <a href = "${designItem.links.download}" target = "_blank">Download Image</a>
        </div>
    `;
    imageDetailsContent.innerHTML = html;
    imageDetailsContent.parentElement.classList.add('showImage');
    scrollChange();
}
function scrollChange(){
    if (imageDetailsContent.parentElement.classList.contains("showImage")) {
        // Disable scroll
        document.querySelector("body").style.overflow = "hidden";
    } else {
        // Enable scroll
        document.querySelector("body").style.overflow = "auto";
    }
}