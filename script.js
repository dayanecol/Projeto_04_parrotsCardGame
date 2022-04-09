let parrots= ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let numCards = 0;
let deck = [];
let card= ``;
let time= 10;
let pickedCards=[];
let pairs;
let first_card=``;
let second_card=``;
let moves=0;
let numPlayed=0;



//Seria bom colocar esse while numa function? Rever!
while ((numCards%2 !== 0) || (numCards<4) || (numCards>14)){
    numCards = prompt("Escolha um número par entre 4 e 14 para definir com quantas cartas deseja jogar!");
}

parrots=parrots.sort(comparador);
buildDeck();
deck=deck.sort(comparador);
insertCards();



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
        alert("Você ganhou em jogadas!");
    }
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
