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
// let num1 = Number(prompt("Digite um número"));
// let num2 = Number(prompt("Digite outro número"))

// if (num1%3===0)
//  if(num2%2===0){
//         console.log("Seu número é divisível por 2")
//     } else {
//     console.log("Seu número é divisível por 3")
//     }
//      else {(num2%2==0&&num1%3===0)}
//         console.log("Seu número não é divisível por 2 e por 3")
       

const num4 = Number(prompt("Digite um numero"));

if (num4%2===0){
    if(num4%3===0){
        console.log("O número é divisível por 2 e 3");
    } else {
        console.log("O número e divisivel por 2 mas não é por 3");
        
    }

}else if (num4%3===0){
    console.log("O número é divisível por 3 mas não é por 2");
}else{
    console.log("O número não é divisível nem por 2 ou 3");

}

if(num4%2===0 || num4%3===0){
    console.log("O número é divisível por 2 ou por 3");
} else{
    console.log("O número não é divisível nem por 2 nem por 3");
}


















