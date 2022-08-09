// Reescreva os códigos do arquivo script.js
//  utilizando o if ternário.
// **Relembrando o if ternário**
// ```jsx
// condição ? expr1 : expr2
// ```
// Onde :
// `condição` é uma expressão que é avaliada
//  como `true` ou `false`.
// `expr1`, `expr2` são xpressões com valores de qualquer tipo.
//código a ser reescrito

let nome = prompt("Digite seu nome").toLowerCase()
let idade = prompt("Digite sua idade")
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}

nome === "josé" ? console.log("Oi, Zé") : console.log("Olá", nome);
idade >= 18 ? console.log("Você já pode tirar carteira de motorista") : console.log("Você ainda não pode tirar carteira de motorista")

