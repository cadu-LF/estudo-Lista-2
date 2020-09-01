chefe()

function chefe(){
    // var tem escopo global
    // let tem escopo local
    let vetor = [] // let só tem relação com essa função
    do {

        var opcao = Number(prompt(`Digite: \n [1] entrada \n [2] Relat1 \n [3] Relat2 \n [4] Relat3 \n [5] Relat4 \n [6] Sair`))
        switch(opcao){
            case 1: entrada(vetor)
                    break
            case 2: mediaIdade(vetor)
                    break
            case 3: maiorIdade(vetor)
                    break
            case 4: qtdMulheres(vetor)
                    break
            case 5: homens(vetor)  
                    break
            case 6: console.log(`Obrigado por usar nosso programa!`)
                    break
            default: console.log(`Opção inválida, tente novamente`)
        }
        
    }
    while(opcao != 6)
}

function entrada(vet){
    vet.push({
        sexo: prompt(`Informe o sexo: f - feminino; m - masculino`).toUpperCase() /**converte para letra maiúscula*/,
        h: Number(prompt(`Informe a altura: (m.cm)`)),
        idade: Number(prompt(`Informe a idade`)),
        olhos: prompt(`Informe a cor dos olhos: (A - azuis, V - verdes, C - castanhos)`).toUpperCase()
    })
}

function mediaIdade(vet){

    let media = 0
    let qtd = 0
    for(let i = 0; i < vet.length; i++){
        if ((vet[i].olhos == 'C') && (vet[i].h > 1.6)){
            media += vet[i].idade
            qtd++
        }
    }
    if(qtd > 0){
        console.log(`Média da idade de pessoas com olhos castanhos e altura superior a 1,60m ${media/qtd}`)
    }
    else{
        console.log('Ninguém possui olhos castanoh e altura maior que 1.60m')
    }
    
}

function maiorIdade(vet){

    let maior = vet[0].idade
    for(let i = 1; i < vet.length; i++){
        if(vet[i].idade > maior){
            maior = vet[i].idade
        }
    }

    console.log(`A maior idade é ${maior}`)
}

function qtdMulheres(vet){
    
    let qtd = 0
    for(let i = 0; i < vet.length; i++){

        if(vet[i].sexo == 'F'){

            if(((vet[i].idade <= 45) && (vet[i].idade > 20)) || ((vet[i].olhos == 'V') && (vet[i].h < 1.7))){
                qtd++
            }
        }
    }

    console.log(`A quantidade de mulheres com idade entre 20 e 45 ou com olhos verdes e altura inferior a 1,70m é ${qtd}`)
}

function homens(vet){
    
    let qtd = 0
    for(let i = 0; i < vet.length; i++){
        if (vet[i].sexo == 'M'){
            qtd++
        }
    }

    console.log(`A porcentagem de homens é ${(qtd/vet.length)*100}%`)
}