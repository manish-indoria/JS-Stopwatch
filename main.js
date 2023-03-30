
function updateTimer(){
    timeValue = +timeValue;
    timeValue++;
    document.getElementsByClassName('modify')[0].textContent = timeValue;    
    if(timeValue > 1)
        document.getElementsByClassName('time')[0].textContent = "Seconds";
}

var Id = {
    returnedID : null,
    functionBoolean : false,
};

function StartTimer(inputObject){
    if(Id.functionBoolean == false){
        Id.returnedID = setInterval(() => {updateTimer();},1000);
        inputObject.textContent = "Stop Timer";
        Id.functionBoolean = true;
    }else{
        clearInterval(Id.returnedID);
        inputObject.textContent = "Start Timer";
        document.getElementsByClassName('modify')[0].textContent = timeValue;
        Id.functionBoolean = false;
    }
}

var timeValue = document.getElementsByClassName('modify')[0].textContent;  

function killProcess(inputObject){
    clearInterval(Id.returnedID);
    inputObject.textContent = "Start Timer";
    inputObject.id = 'start-timer';
    document.getElementsByClassName('modify')[0].textContent = timeValue;
}

function reset(){
    if(startButton != null){
        killProcess(startButton);
    }else{
        killProcess(stopButton);
    }
    timeValue = 0;
    document.getElementsByClassName('modify')[0].textContent = timeValue;
    document.getElementsByClassName('time')[0].textContent = "Second";
}

const startButton = document.getElementById('start-timer');
if(startButton != null)
startButton.addEventListener('click',() => {StartTimer(startButton);}); 

const resetButton = document.getElementById('reset-timer');
resetButton.addEventListener('click',() =>{reset();});