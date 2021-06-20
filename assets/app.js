const checkBox = document.querySelector('.ageBox');
const checkBoxStatus = document.querySelector('.checkBoxStatus');

checkBox.addEventListener('click',status)
function status(){
    if(checkBoxStatus.value == "false"){
        checkBoxStatus.value = "true";
    }
    else{
        checkBoxStatus.value = "false";
    }
}