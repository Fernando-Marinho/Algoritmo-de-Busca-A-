function busca(cidade){
	
	var atual = eval(cidade);
	var cidade_atual=cidade;
	var caminho = [cidade.charAt(0).toUpperCase() + cidade.slice(1)];
	var element = document.getElementById("Camada_1");
		element = document.getElementsByTagName('circle');

		for (var i = 0; i < element.length; i++) {
			element[i].style.fill = 'black';
		}

		element = document.getElementById(cidade).style.fill = 'red';

	while(cidade_atual!="bucharest"){

		var aux;
		var peso = 0;

			for (var j = 0; j < atual.length; j++) {

				if(((eval(atual[j][0]+'1') + atual[j][1]) < peso) || (peso == 0)){
					aux = (atual[j][0]+'1');
					peso = eval(aux) + atual[j][1];
					cidade_atual = atual[j][0]
				}
			}

			element = document.getElementById(cidade_atual).style.fill = 'red';


			atual = eval(cidade_atual);
			caminho.push(cidade_atual.charAt(0).toUpperCase() + cidade_atual.slice(1));

	}

	document.getElementById('saida').value = "";
	document.getElementById('saida').value = caminho.join(" - ");

}

