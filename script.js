function olaMundo(){
    alert("Olá mundo!")
 }

 function mostraNome(){
    let nome = prompt("Digite seu nome: ")
    console.log(nome)
 }

 function concatenaPalavra(){
    let p1 = prompt("Digite a primeira palavra: ")
    let p2 = prompt("Digite a segunda palavra: ")
    console.log(p1 + p2)
 }

 function somaNumeros(){
    let n1 = parseFloat(prompt("Digite o primeiro número: "))
    let n2 = parseFloat(prompt("Digite o segundo número: "))
    console.log(n1 + n2)
 }

 function subtrairNumeros(a, b){
    console.log(a - b)
 }

 function pegaDados(){
   let n1 = Number(prompt("Digite o primeiro número: "))
   let n2 = Number(prompt("Digite o segundo número: "))
   subtrairNumeros(n1, n2)
}

 function criaObjeto(nome, idade, time){
    let pessoa = {
      nomePessoa: nome,
      idadePessoa: idade,
      timePessoa: time
   }
   console.log(pessoa)
 }

 function pegaObjetos(){
   let nome = prompt("Digite o nome: ")
   let idade = Number(prompt("Digite a idade: "))
   let time = prompt("Digite o time: ")
   criaObjeto(nome, idade, time)
}

function calculadora() {
    
    const operacao = prompt("Digite a operação (somar, subtrair, multiplicar ou dividir):");
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
   
    switch (operacao) {
        case "somar":
            console.log(`Resultado: ${numero1 + numero2}`);
            break;
        case "subtrair":
            console.log(`Resultado: ${numero1 - numero2}`);
            break;
        case "multiplicar":
            console.log(`Resultado: ${numero1 * numero2}`);
            break;
        case "dividir":
            if (numero2 !== 0) {
                console.log(`Resultado: ${numero1 / numero2}`);
            } else {
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log("Operação inválida.");
    }
}


function mudaConstante(){
    const nome = prompt('Digite seu nome:');
    console.log('Nome digitado:', nome);
  
    const novoNome = prompt('Digite um novo nome: ');
    console.log('Novo nome digitado:', novoNome);
  
    
    nome = novoNome; 
}

  function manipulaArrays(){
    var c = [ "branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza" ]
    c.push("laranja")
    console.log(c)
    let crRm = c.pop()
    console.log('Elemento removido: ', crRm)
    console.log('Array: ', c)
    let orAr = c.sort()
    console.log('Array organizado: ', orAr)
    let rmAz = c.splice(c.indexOf("azul"), 1)
    console.log('Array sem azul: ', c)
    console.log('Primeiro valor do array:', c[0])
    console.log('Último valor do array:', c[c.length - 1])
    cores.unshift("fucsia")
    console.log('Array com fucsia: ', c)
    let crSh = c.shift();
    console.log('Elemento removido pelo shift: ', crSh)
    console.log('Array após shift: ', c)
}