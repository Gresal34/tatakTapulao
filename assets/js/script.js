const applicationInfo = document.querySelector('.applicationInfo');
const sender = document.querySelector('.sender');
const recipient = document.querySelector('.recipient');
const validateBtn = document.querySelector('.validateBtn');
const continueBtn = document.querySelector('.continueBtn');
const validateHeading = document.querySelector('.validateHeading');
const SubmitBtn = document.querySelector('.SubmitBtn');
const backBtnOne = document.querySelector('.backBtnOne');
const backBtnTwo = document.querySelector('.backBtnTwo');
const termsAndCondition = document.querySelector('.termsAndCondition');


function nextForm(){
    reset();
    sender.style = "display:flex;";
}

function Continue(){
    reset();
    recipient.style = "display:flex;";
}

function validate(){
    reset();
    sender.style = "display:flex; margin:20px 0;";
    recipient.style = "display:flex; margin:20px 0;";
    validateHeading.style = "display:flex;";
    SubmitBtn.style = "display:flex;";
    termsAndCondition.style = "display:flex;";

    backBtnOne.style="display:none;";
    backBtnTwo.style="display:none;";
    validateBtn.style="display:none;";
    continueBtn.style="display:none;";
}

function backToFirst(){
    reset();
    applicationInfo.style = "display:flex;";
}

function backToSender(){
    reset();
    sender.style = "display:flex;";
}


function reset(){
    applicationInfo.style = "display:none;";
    sender.style = "display:none;";
    recipient.style = "display:none;";
}