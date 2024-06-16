const inputs = document.getElementsByName('terror');
const inputAge = document.getElementById('iage');
const inputSend = document.querySelector('#second');
const form = document.querySelector('.form');
const images = document.querySelector('.div-img');

function sendForm(){
    if(inputAge.value.length === 0){
        window.alert('[ERROR] select options');
    } else if(inputs[0].checked){
        form.style.display = 'none';
    }
}