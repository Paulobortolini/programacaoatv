    let sort = Math.floor(Math.random()*100)+1;
    let tentativas = 5;
    document.getElementById("chances").innerHTML = "Tentativas: " + tentativas
    let saida = document.getElementById("output");

    function clique (){
    let valor = document.getElementById("input").value;
 
   if (valor > 0 && valor <=100){
    if (tentativas > 0){
        if(valor == sort){
            saida.innerHTML = "Acertou";
        } if(valor < sort){
            saida.innerHTML = "O valor sorteado é maior";
        } if(valor > sort){
            saida.innerHTML = "O valor sorteado é menor";
        }
    }
    } else {
        saida.innerHTML = "Está fora do intervalo";
    }

    tentativas--;
    document.getElementById("chances").innerHTML = "Tentativas: " + tentativas
    if(tentativas == 0){
        document.getElementById("btn").disabled = true;
        saida.innerHTML = "Acabou as tentativas, o valor sorteado era: " + sort
    }

    
}

    function novo(){
        sort = Math.floor(Math.random()*100)+1;
        tentativas = 5;
        document.getElementById("chances").innerHTML = "Tentativas: " + tentativas
        document.getElementById("btn").disabled = false;
        saida.innerHTML = ""
    }