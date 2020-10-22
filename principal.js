<script> 
function largadosEDescuidadosGame(){
    
    var apresentacao = document.getElementById('mostraOpcoes')
    apresentacao.innerHTML = `Bem vindo! Você está participando do Programa Largados e Descuidados Edição 2020`
    // apresentacao.innerHTML += `Dependendo do seu desempenho, você receberá uma ASP, o que definirá se você sai ou continua no jogo`
    // apresentacao.innerHTML += `ASP: Avaliação de Sobrevivência Primitiva`
    // apresentacao.innerHTML += `Por favor, decida o cenário que vc deseja participar`
    // // alert(''); 
    // alert('Dependendo do seu desempenho, você receberá uma ASP, o que definirá se você sai ou continua no jogo'); 
    // alert(
    // alert('Por favor, decida o cenário que vc deseja participar'); 


    var cenario = prompt("Digite aqui o cenário (1,2 ou 3)"); 
    
    
    if (cenario == 1){
        
       
        alert("Você enfrentará o Deserto da Namíbia, na África Subsaariana"); 
        alert("A África subsariana ou subsaariana , antes impropriamente chamada África negra, corresponde à parte do continente africano situada ao sul do Deserto do Saara.")
        alert('É constituída de quarenta e oito Estados, cujas fronteiras resultaram da descolonização.')
        alert("O clima tropical predomina na maior parte da África, tanto na zona tropical, úmida no verão e seca no inverno, quanto na zona equatorial, com temperaturas elevadas e chuvas abundantes.")
        alert("Nos grandes desertos, como o Saara e o Kalahari, as temperaturas são altas de dia e baixas à noite. Nos extremos norte e no sul do continente encontram-se estreitas regiões de clima ameno, de tipo mediterrâneo.")
        var itens1 = prompt("Digite aqui 1 item de sobreviência : canivete, bússola ou facão")
        
        
        
        switch (itens1){
            case 'canivete': 
            break; 
            case 'bússola': 
            alert('A bússola não funciona no deserto')
            break; 
            case 'facão': 
            alert('Você poderá usar para caçar e cortar lenha'); 
            break; 
            default: 
            alert('Por favor, escolha uma alternativa')
            
            
        }
        
        
        alert('No meio do caminho, você encontrou água contaminada com metais pesados')
        alert ('Você decide beber a água? (S/N) '); 
        var aguaContaminada = prompt("Digite aqui se você bebeu a água contaminada")
        
        switch (aguaContaminada) { 
            case 'S': 
            alert('Você teve uma infecção, o que te levou uma desidratação mais grave') 
            alert('A equipe do programa teve que te socorrer às pressas, o que te deu um ASP nota -5')
            alert('||END GAME ||')
            break; 
            case 'N': 
            alert('Você conseguiu fugir dos Babuínos negros e consegue se proteger em uma caverna ')
            alert('Ao se proteger até o décimo dia na caverna, os Babuínos negros voltaram.')
            alert('Para se proteger, você decide um contra-ataque e atira pedras contra eles ')
            alert('Assustados eles fogem, e você consegue encontrar um pássaro que eles tinham encontrado')
            alert('Ao comê-lo, as funções básicas do seu organismo foram restauradas, e você ficou forte o suficiente para andar por mais 2 dias e encontrou uma cachoeira')
            alert('Você recebeu um ASP nota 10')
            alert('||VOCÊ GANHOU!!||') 
            break; 
            default: 
            alert("Por favor digite uma alternativa possível")
            
        } 
        
        
    }else if(cenario == 2){
        
        alert("Você enfrentará a Floresta de Coníferas"); 
        alert|("Situa-se no hemisfério norte, abrangendo a Ásia (Sibéria, Japão), América do Norte (Alasca, Canadá, sul da Groenlândia) e Europa (parte da Noruega, Suécia).")
        alert("O clima nessa região é subártico, caracterizado por inverno muito frio, longo e seco com temperaturas que chegam a -50º C. ")
        alert("O verão é curto e úmido, os dias são mais longos e as temperaturas podem chegar a 20º C.")
        alert("As chuvas são pouco frequentes. Durante o verão ocorre degelo, formando lagos, pântanos e brejos. O solo é raso, pobre em nutrientes e coberto por folhas.")
        var itens2 = prompt("Digite aqui 1 item de sobreviência : canivete, bússola ou facão")
        
        switch (itens2){
            case 'canivete': 
            alert('O canivete suíço, ou em termos mais técnicos canivete multiuso,\n é sem sombra de dúvida um dos ícones da civilização moderna e do design mundial')
            break; 
            case 'bússola': 
            alert('A bússola te direcionará ao caminho mais curto da caverna ao fim do jogo')
            break; 
            case 'facão': 
            alert('Você poderá usar para caçar e cortar lenha'); 
            break; 
            default: 
            alert('Por favor, escolha uma alternativa')
            
        }
        
        alert('Você encontrou uma carcaça inteira de um Alce');
        alert('O Alce está com vestígios de que estava babando de raiva, o que pode ser perigoso.') 
        
        var decideComerCervo = prompt("Digite aqui se você decidiu comer o Alce?(S/N)")
        switch (decideComerCervo) {
            case 'S': 
            alert(' Você está apresentando um estado de \nconfusão mental, desorientação, agressividade, alucinações.')
            alert('A equipe do programa teve que te socorrer às pressas, o que te deu um ASP nota -5')
            alert('||END GAME||')
            break; 
            case 'N':
            alert('Você achou uma larva e passas ricas em magnésio')
            alert('Ao comer o que encontrou, pode encontrar um caminho que tinha uma caverna cheia de babuínos mortos')
            alert('o que te levou a imaginar se não tinha um leopardo os guardando na caverna')
            alert('Ao encontrar os babuínos negros, pode perceber que não podia ficar muito tempo, pois de noite poderia encontrar o seu predador voltando à caverna')
            alert('Você pode se alimentar e abasteceu uma mochila com comida para pelo menos 2 dias')
            alert('Ao sair dali, encontrou a rota do fim do jogo.')
            alert('Você recebeu um ASP nota 10')
            alert('||VOCÊ GANHOU!!||')
            break; 
            default:
            alert("Por favor digite uma alternativa possível")
            
        }
        
        

    }else if(cenario == 3 ){

        alert("Você visitará a Floresta Tropical de Daintree Rainforest, na Austrália"); 
        alert("Além de ser considerada a floresta tropical mais antiga do mundo, o lugar se diferencia dos demais por ser ponto de encontro entre a floresta e a barreira de corais. ")
       
    

    }else{
        alert('Você precisa escolher um cenário para continuar'); 
    }
    
}
largadosEDescuidadosGame(); 

var decideContinuar = prompt("Você deseja jogar novamente(S/N)?"); 
if(decideContinuar == "S" || decideContinuar == "s"){
    function desejaContinuar(decide){
        var arrayEscolha = [0,1,2]; 
        for (var i = 0; i < arrayEscolha.length; i++){
            
            largadosEDescuidadosGame(); 
        }
        
    }
}else if (decideContinuar == 'N', decideContinuar == 'n'){
    alert("||FIM DE JOGO||")
}else{
    alert('Por favor, escolha dentro das alternativas')
}
desejaContinuar(decideContinuar); 






</script> 

