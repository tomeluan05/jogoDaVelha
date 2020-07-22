/*LÓGICA DO JOGO*/
//iniciar as variáveis

/*tabuleiro array vazio com 9 posições*/
let board = ["", "", "", "", "", "", "", "", ""];
/*vez do jogador vai ser 0 e 1*/
let playerTime = 0;
let gameOver = false;

/*Se a vez for do jogador 1, o elemento recebe o, se for o 2 jogador recebe x*/
let symbols = ['o', 'x'];
let winStatus = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

/*Adiciona o desenho dentro do quadrado quando o jogador fizer a jogada*/
function handleMove(position){

	if(gameOver){
		return;
	}

	if(board[position] == ''){
	/*posição do quadrado, coloca o símbolo dentro dele*/	
	board[position] = symbols[playerTime];

		gameOver = isWin();

		/*Posso usar o operador ternário aqui também
		playerTime = (playerTime ==0) ? 1 : 0;
		*/
		if(gameOver == false){
			/*Passar a vez do jogador*/
			if(playerTime == 0){
				playerTime = 1;
			}else{
				playerTime = 0;
			}
		}	
	}

	return gameOver;
}

function isWin(){

	for(let i = 0; i < winStatus.length; i++){
		let seq = winStatus[i];

		let position1 = seq[0];
		let position2 = seq[1];
		let position3 = seq[2];

		if(board[position1] == board[position2] && 
			board[position1] == board[position3] &&
			board[position1] != ''){

			return true;
		}
	}
			return false;

}