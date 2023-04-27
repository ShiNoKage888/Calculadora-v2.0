var vdisplay = [];
var d = document;

//Essa funçao serve para inserir um valor para ser utilizado dentro do calculo
function insert(num)
{
	// Verifica se o valor de num é um operador matematico
	if (num == "+" || num == "-" || num == "/" || num == "*") {
		
		// Caso a largura da variavel seja igual a 0 é adicionado os valores do visor da calculadora e o valor digitado na variavel vdisplay. Apos isso o display da calculadora é limpo
		if (vdisplay.length == 0) {
			vdisplay.push(d.getElementById('resultado').innerHTML);
			vdisplay.push(num);
			d.getElementById('resultado').innerHTML = "";

		// Se o penultimo valor da varial vdisplay seja diferente de valor exibido no visor da calculadora e o valor o valor do visor nao seja vazia é adicionado os valores do visor da calculadora e o valor digitado na variavel vdisplay. Apos isso é limpo o visor da calculadora
		} else if (vdisplay[vdisplay.length-1] != d.getElementById('resultado').innerHTML && d.getElementById('resultado').innerHTML != "") {
			vdisplay.push(d.getElementById('resultado').innerHTML);
			vdisplay.push(num);
			d.getElementById('resultado').innerHTML = "";
		
		// Se o penultimo digito seja diferente de um operador matematico, adiciona se o valor de num. Apos isso é limpo o visor da calculadora
		} else if (vdisplay[vdisplay.length-1] != "+" && vdisplay[vdisplay.length-1] != "-" && vdisplay[vdisplay.length-1] != "/" && vdisplay[vdisplay.length-1] != "*") {
			vdisplay.push(num);
			d.getElementById('resultado').innerHTML = "";
		}
	
	// Caso o valor de num seja igual a "=" é adicionado o valor do visor da calculadora na variavel vdisplay e é feita a função calcular
	} else if (num == "=") {
		if (vdisplay[vdisplay.length-1] == "+" || vdisplay[vdisplay.length-1] == "-" || vdisplay[vdisplay.length-1] == "/" || vdisplay[vdisplay.length-1] == "*") {
			vdisplay.push(d.getElementById('resultado').innerHTML);
			calcular();
		}

	} else if (num == ".") {
		if (d.getElementById('resultado').innerHTML.includes(".")) {
			return;
		} else {
			d.getElementById('resultado').innerHTML += num;
		}
	
	} else {
		// Caso a largura da variavel vdisplay seja igual a 1, chama-se a função clean() e junta os valores do visor da calculadora e da variavel num 
		if (vdisplay.length == 1) {
			clean();
			d.getElementById('resultado').innerHTML += num;
		
		// Caso a largura da variavel seja diferente de 1 apenas se junta os valores do visor da calculadora e da variavel num
		}else {
			d.getElementById('resultado').innerHTML += num;
		}
	}
}

//Essa funçao esvazia as variaveis quando essa funçao é chamada
function clean()
{
	//Reseta as variaveis
	vdisplay = [];
	d.getElementById('resultado').innerHTML = "";
}

//Essa funçao elimina o ultimo valor digitado na calculadora
function back()
{
	//Essa variavel ira armazenar o conteudo do visor da calculadora
   	let valor = d.getElementById('resultado').innerHTML;
   	
	//O conteudo da variavel valor sera divido e retirado o ultimo digito
	d.getElementById('resultado').innerHTML = valor.substring(0,valor.length-1)
}

//Essa funçao realizar o calculo utilizando os dados inseridos na calculadora
function calcular()
{
    let result = "";

	try {
		// Adiciona todas os valores armazenados na variavel vdisplay na variavel result
		for (let i = 0; i < vdisplay.length; i++) {
			result += vdisplay[i];
		}
		
		// Pega a variavel result e utiliza a função eval para efetuar o calculo
		d.getElementById('resultado').innerHTML = eval(result)
		
		// Apaga as variaveis do calculo anterior
		vdisplay = [];
		vdisplay.push(d.getElementById('resultado').innerHTML);

	} catch (e) {
		//Caso não seja possivel realizar o calculo aparecera no visor da calculadora uma mensagem de erro
		d.getElementById('resultado').innerHTML = " --- Error --- ";
	}
}
