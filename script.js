let numCards=parseInt(prompt("Escolha um número par entre 4 e 14 para definir com quantas cartas deseja jogar!"));

// const parrotsPicked=[];



while ((numCards%2 !== 0) || (numCards<4) || (numCards>14)){
    numCards = prompt("Por favor, insira um número válido! Escolha um número par entre 4 e 14");
}
const list = document.querySelector("ul");
const parrots= ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
parrots=parrots.sort(comparador);
insertCards(numCards);

function insertCards(numCards){

    console.log(numCards);

    list.innerHTML = `
    <li class="card">
        <div class="content front on">
            <img src="img/front.png">
        </div>
        <div class="content back off">
            <img src="img/unicornparrot.gif">
        </div>
    </li>
    `;
}



// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
