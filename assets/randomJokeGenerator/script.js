const genJokeBtn = document.getElementById('gen-joke-btn');
const prevJokeBtn = document.getElementById('prev-joke-btn');
genJokeBtn.addEventListener('click', jokeGenHandler);
prevJokeBtn.addEventListener('click', jokePrevHander);

const jokeHistory = [];
let currentIdx = -1;

class Joke {
    constructor(category, setup, delivery) {
        this.category = category;
        this.setup = setup;
        this.delivery = delivery;
    }
}
function jokePrevHander(){
    j = jokeHistory[--currentIdx];
    document.getElementById('category').innerHTML = j.category;
    document.getElementById('setup').innerHTML = j.setup;
    document.getElementById('delivery').innerHTML = j.delivery;
    if(currentIdx === 0) prevJokeBtn.style.display = "none";
    genJokeBtn.innerHTML ="Next Joke";
}
function jokeGenHandler(){
    if(jokeHistory.length-1===currentIdx){
        jokeGenApi();
        currentIdx++;
    } else {
        j = jokeHistory[++currentIdx];
        document.getElementById('category').innerHTML = j.category;
        document.getElementById('setup').innerHTML = j.setup;
        document.getElementById('delivery').innerHTML = j.delivery;
    }
    if(currentIdx !== 0) prevJokeBtn.style.display = "inline";
    if(jokeHistory.length-1===currentIdx) genJokeBtn.innerHTML = "New Joke";
}
function jokeGenApi(){
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let joke, jokeDelivery;
        if(data.joke){
            joke = data.joke;
            jokeDelivery = "";
        } else {
            joke = data.setup;
            jokeDelivery = data.delivery;
        }
        jokeHistory.push(new Joke(data.category,joke,jokeDelivery));
        document.getElementById('category').innerHTML = data.category;
        document.getElementById('setup').innerHTML = joke;
        document.getElementById('delivery').innerHTML = jokeDelivery;
    });
}
jokeGenHandler();
