// # Exercício 1
// Crie um código que receba um número por 
// **prompt** e verifique se um número é divisível
//  por 2 **ou** por 3
    // Faça isso:
    // 1. Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){
//         }
//     }
// ```
// 2. Utilizando um operador lógico para unir duas 
// operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    //     }
// ```
let num1 = Number(prompt("Digite um número"));
let num2 = Number(prompt("Digite outro número"))

if (num1%3===0)
 if(num2%2===0){
        console.log("Seu número é divisível por 2")
    } else {
    console.log("Seu número é divisível por 3")
    }
     else {(num2%2==0&&num1%3===0)}
        console.log("Seu número não é divisível por 2 e por 3")
       

