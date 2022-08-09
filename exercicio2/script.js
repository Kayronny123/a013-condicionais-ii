// Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case.
//  No arquivo `script,js` existe uma versão do código já
//  escrita, mas você pode colar o exercício que você fez na última prática!

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}

switch(nacionalidade){
    case nacionalidade:
        console.log("Você é brasileiro(a)");
        break;
        case nacionalidade:
            console.log("Você é argentino(a)");
            break;
            case nacionalidade:
            console.log("Você é Uruguaio(a)");
                break;
                case nacionalidade:
                console.log("Você é chileno(a)");
                    break;
                    case nacionalidade:
                    console.log("Você é conlombiano(a))");
                     default:
                       console.log("Naconalidade não encontrada")
}