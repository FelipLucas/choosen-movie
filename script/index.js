const inputs = document.getElementsByName('terror');
const inputAge = document.getElementById('iage');
const inputSend = document.querySelector('#second');
const form = document.querySelector('.form');
const divImages = document.querySelector('.div-img');
const images = document.querySelector('.img');
const nomeFilme = document.querySelector('.nome-filme');

function sendForm(){
    if(inputAge.value.length === 0){
        window.alert('[ERROR] select options');
    } 
    else if(inputs[0].checked){
        divImages.style.display = 'flex';
        images.src = "https://i0.wp.com/cinestera.com.br/wp-content/uploads/2022/10/Pearl-filme.jpeg?resize=768%2C432&ssl=1";
        nomeFilme.innerHTML = 'Pearl';
    } 

}