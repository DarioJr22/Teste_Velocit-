const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0]

var interval
var timerRunning = false

//Ultimo vídeo da aula 8
//Revise o penultimo para pegar o contexto

// Adiciona zero inicial aos números <= 9 (apenas para estética):
function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time
}
    
// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer(){
    let currentTimer = `${leadingZero(timer[0])} : ${leadingZero(timer[1])} : ${leadingZero(timer[2])}`
    theTimer.innerHTML = currentTimer

    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1]*100)- (timer[0]*6000))

}

// Verifica se texto digitado com o fornecido na página:
function spellCheck(){
    let textEntered = testArea.value;
    let originTextMacht = originText.substring(0,textEntered.length)
    if(textEntered == originText){
        clearInterval(interval)
        testWrapper.style.borderColor = '#429890'
    }else {
        if (textEntered == originTextMacht) {
            testWrapper.style.borderColor = '#65CCF3'
        } else{
            testWrapper.style.borderColor = '#E95D0F'
        }
    }
    console.log(textEntered);
}
// Inicia o cronômetro:
function start(){
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnteredLength)
}

// Função de recomeçar:
function reset(){
    console.log('click');
}

// Listeners de eventos para entrada de teclado e o botão de recomeçar:

testArea.addEventListener('keypress',start,false)
testArea.addEventListener('keyup',spellCheck,false)
resetButton.addEventListener('click',reset,false)



