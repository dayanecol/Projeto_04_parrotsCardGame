const parrots= ["bobrossparrot","explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot","unicornparrot"];
let numCards=prompt("Escolha um número par entre 4 e 14 para definir com quantas cartas deseja jogar!");


while (numCards<4||numCards>14||(numCards%2!==0)){
    numCards = prompt("Por favor, insira um número válido! Escolha um número par entre 4 e 14");
}
