let parrots= ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let numCards = 0;
let deck = [];
let card= ``;
let pickedCards=[];
let pairs;
let first_card=``;
let second_card=``;
let moves=0;
let numPlayed=0;
let seconds=0;
let time= 1000;
let cron;
let timePlayed;
let playAgain="";


start();

function start(){
    while ((numCards%2 !== 0) || (numCards<4) || (numCards>14)){
        numCards = prompt("Escolha um número par entre 4 e 14 para definir com quantas cartas deseja jogar!");
    }
    parrots=parrots.sort(comparador);
    buildDeck();
    deck=deck.sort(comparador);
    insertCards();
    return startTimer();
}









function insertCards(){ //Inserir cartas dinamicamente no HTML
    let list = document.querySelector("ul");
    list.innerHTML=``;

    for (let i =0; i< numCards ; i++){
       list.innerHTML += deck[i];
        
    }
}

function buildDeck(){
    let numPairs =(numCards/2)
    

    for (let j=0; j < numPairs; j++){
        card = `
        <li class="card" onclick="selectedCard(this)">
            <div class="content front">
                <img src="img/front.png"/>
            </div>
            <div class="content back">
                <img src="img/${parrots[j]}.gif"/>
            </div>
        </li>
        `;
        deck.push(card);
        deck.push(card);
    }
}

function selectedCard(element){
    let selected = element.classList.contains("selected");
    let isPair = element.classList.contains("Pairs");
    moves ++;
    
    if (!selected || !isPair ){
        
        element.classList.add("selected");
        pickedCards.push(element);
        if (pickedCards.length === 2){
            compareCards();
        }
    }
    
}

function untap(){
    pickedCards[0].classList.remove("selected"); 
    pickedCards[1].classList.remove("selected"); 
    pickedCards=[]

}


function compareCards(){
    first_card = pickedCards[0];
    second_card = pickedCards[1];

    if (first_card.innerHTML===second_card.innerHTML){
        first_card.removeAttribute("onclick");
        first_card.classList.add("pairs");
        second_card.removeAttribute("onclick");
        second_card.classList.add("pairs");
        pickedCards=[];
        numPlayed++;
        isWin();

    }else{
        setTimeout(untap,1000);
    }   
}

function isWin(){
    if ( numPlayed*2 === numCards*1 ){
        stopTimer();
        alert(`Você ganhou em ${moves} jogadas e um tempo de ${timePlayed} segundos!`);
        return reStart();
    }
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

function startTimer(){
    cron=setInterval(timer,time);
}

function stopTimer(){
    clearInterval(cron);
    seconds=0;
    document.querySelector(".counter").innerHTML= seconds;

}

function timer(){
    seconds++;
    let format = seconds;
    document.querySelector(".counter").innerHTML= format;
    timePlayed= format;
    return format;
}

function reStart(){
    while(playAgain !== ("sim"||"não")){
        playAgain = prompt ("Gostaria de jogar novamente?(sim/não)");
    }
    if (playAgain === "sim"){
        document.location.reload(true);
    }
        

}