window.addEventListener('DOMContentLoaded', loadImg);
document.getElementsByTagName("button")[0].addEventListener('click', ()=>window.location.href='https://jinlee487.github.io/frontend');
function loadImg(e) {
    const client_id = "1OosJucB6P5xcZo-i-orjAIBg4heA-So7bzadHSmpGk";
    // const client_id = "gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
    const url = "https://api.unsplash.com/photos/random?client_id="+client_id+"&query=dark";
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            document.getElementsByClassName("left-banner")[0].style.backgroundImage = 'url("' + data.urls.full + '")';
        }).catch((error) => {
            document.getElementsByClassName("left-banner")[0].style.backgroundImage = 'url("images/banner.jpg")';
      });
}