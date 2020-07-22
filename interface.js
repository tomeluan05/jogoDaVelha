/*BACK-END, O QUE VAI LIGAR O GAME*/

/*INTERFACE PARA O USUARIO*/

/*Evento para saber qual quadrado o jogador criou
o evento será disparado quando o HTML for carregado
e vai executar a função.*/
document.addEventListener('DOMContentLoaded',()=>{
	/*vai pegar todos os elementos do array*/
	let squares = document.querySelectorAll(".square");

	/*para cada elemento clicado, adiciona o evento click
	e uma função handleClick.*/
	squares.forEach((square) =>{
		square.addEventListener('click', handleClick);
	})
})

/*função para saber qual quadrado foi clicado*/
function handleClick(event){
	/*elemento que foi clicado*/
	let square = event.target;
	/*posição do movimento do board*/
	let position = square.id;

	if(handleMove(position)){
		
		setTimeout(()=>{
			alert("O jogo acabou - O vencedor é " + playerTime);

		}, 10)
	}
	/*
	updateSquares();
	*/
	updateSquare(position);
}
function updateSquare(position){
	let square = document.getElementById(position.toString())
	let symbol = board[position];
	square.innerHTML = `<div class="${symbol}"></div>`
}
/*
function updateSquares(){

	let squares = document.querySelectorAll(".square");

	squares.forEach((square) =>{
		let position = square.id;
		let symbol = board[position];

		if(symbol != ''){
			square.innerHTML = `<div class="${symbol}"></div>`
		}

	})

}

*/