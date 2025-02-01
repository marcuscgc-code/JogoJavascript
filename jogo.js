var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel == 'normal'){
	criaMosquitoTempo = 1500

}else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000

}else if(nivel === 'hard'){
	criaMosquitoTempo = 222
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log(largura, altura);
}
console.log(altura, largura);

ajustaTamanhoPalcoJogo();

// var cronometro = setInterval(<acao>, tempo da acao)
// Tempo do jogo
var cronometro = setInterval(function () {
	tempo -= 1;
	if(tempo<0){
		clearInterval(cronometro)
		clearInterval(mosquito)
		alert('Vitoria')
		window.location.href = 'vitoria.html'
	}else{
		
		document.getElementById('cronometro').innerHTML = tempo;
	}
}, 1000);

function posicaoRandomica() {
	//seleciono se o elemento existe
	if (document.getElementById('mosquito')) {
		// se existir eu removo ele
		document.getElementById('mosquito').remove();
		if (vidas > 3) {
			window.location.href = 'fim_de_jogo.html';
			//remover caso exista
		} else {
			document.getElementById('v' + vidas).src =
				'imagens/imagens/coracao_vazio.png';
			vidas++;
		}
	}

	//Gera valores proximo ao máximo
	//Pois o math.random vai de 0 até 1
	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	console.log(posicaoX, posicaoY);
	//780
	//630

	//criar o HTML no js

	//criar elemento

	var mosquito = document.createElement('img');
	//Elementos vindos da propria estrutura html sao objetos?
	mosquito.src = 'imagens/imagens/mosca.png';
	mosquito.className = tamanhoAleatorio();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	mosquito.onclick = function () {
		this.remove();
	};

	//appendChild --- Adicionando filho para o body
	document.body.appendChild(mosquito);

	console.log(tamanhoAleatorio());
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3);

	switch (classe) {
		case 0:
			//essa String se refere a classe
			return 'mosquito1';
		case 1:
			return 'mosquito2';
		case 2:
			return 'mosquito3';
	}
}
