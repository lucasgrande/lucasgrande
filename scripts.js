
function gastoRepouso(){

	var peso = document.getElementById("peso").value; 
	var altura = document.getElementById("altura").value; 
	var idade = document.getElementById("idade").value; 
	var resultado;

	if(document.getElementById('gender_Male').checked) {
		resultado = (66.47 + (13.75 * peso) + (5 * altura ) - (6.76 * idade));
	}

	else if(document.getElementById('gender_Female').checked) {
		resultado = (655.1 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade));
	}

	document.getElementById("resultado").innerHTML = "<p>O resultado é: "+ resultado.toFixed(2) +" kcal </p>";

	//document.write(655.1 + (9.563 * peso) + (1.85 * altura) - (4.676 * idade));
}

function caloriaExercicio(){
	var peso = document.getElementById("peso").value;
	var duracao = document.getElementById("duracao").value;
	var velocidadeKm = document.getElementById("velocidade").value;
	var velocidadeMin = (velocidadeKm * 1000) / 60;

	var resultado = (((3.5 + velocidadeMin * 0.1) / 1000) * peso * duracao) * 5; 

	document.getElementById("resultado").innerHTML = "<p>O resultado é: "+ resultado.toFixed(2) +" kcal </p>";
}
