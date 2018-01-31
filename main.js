var x = 2;
var y = 'oi';
var colecao = ['nissan', 'hb20'];

console.log(x);
console.log(x+3);
console.log(x+y);

var cachorro = {
	raca: 'buldog',
	cor: 'branca',
	idade: 7,
	amigos: ['eu', 'mainha']
};
console.log(cachorro.cor);
console.log(cachorro.amigos[1]);

function casamento (esposinha) {
	console.log('Minha mulher eh ' +esposinha);
}
casamento('cabilla');

var a = document.getElementsByClassName("pagina");
console.log(a);

var b = document.getElementById('p1');
console.log(b);

function abrirAba () {
	document.getElementById("t2").innerHTML = "Graduanda em Engenharia da Computação pela Escola Politécnica de Pernambuco. 20, Recife.";
}
