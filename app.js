let listaNuemerosSorteados=[];
let tamanho=100;
let NumeroAleatorio= gerarNumeroAleatorio();
let tentativas=1;


function ExibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML =texto;
    //responsiveVoide.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

 function exibirINICIO() {
    ExibirTexto('h1','jogo do numero secreto');
    ExibirTexto('p',`Escolha um numero entre 1 e ${tamanho}`);

}

exibirINICIO();

function verificarChute() {
    let chute=document.querySelector('input').value;
 
    if(NumeroAleatorio == chute){
        ExibirTexto('h1','acertou!');
        let palavrasTentativas= tentativas>1 ? 'tentativas':'tentativa';
        let mensagemTentativas=`voce descobriu o numero secreto com ${tentativas} ${palavrasTentativas}!`;
        ExibirTexto('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        ExibirTexto('h1','errou!')
        if(chute>NumeroAleatorio){
            ExibirTexto('p','o numero que vc chutou e maior que o numero secreto!');
        }if(chute<NumeroAleatorio){
            ExibirTexto('p','o numero que vc chutou e menor que o numero secreto!');
    }
    tentativas++;
    limparCampo();
}   

}

function gerarNumeroAleatorio(){
    let NumeroEscolhido = parseInt(Math.random()*10+1);
    let quanridadeElementosLista=listaNuemerosSorteados.length;
    if(quanridadeElementosLista==tamanho){
        listaNuemerosSorteados=[];
    }
    if(listaNuemerosSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
         listaNuemerosSorteados.push(NumeroEscolhido);
         console.log(listaNuemerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value='';

    
}

function reiniciarJOGO(){
    NumeroAleatorio= gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirINICIO();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


