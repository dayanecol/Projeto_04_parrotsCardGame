let parrots= ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let numCards = 0;
let deck = [];
let card= ``;

// const parrotsPicked=[];


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
    let pairs =(numCards/2)
    

    for (let j=0; j < pairs; j++){
        card = `
        <li class="card">
            <div class="content front on">
                <img src="img/front.png"/>
            </div>
            <div class="content back off">
                <img src="img/${parrots[j]}.gif"/>
            </div>
        </li>
        `;
        deck.push(card);
        deck.push(card);
    }
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
