function verificar(){
    let inputAge = document.getElementById('iage');
    let inputs = document.getElementsByName('terror');
    let nomeFilme = document.querySelector('.nome-filme');
    let divImages = document.querySelector('.div-img');
    let images = document.querySelector('.div-img img');

    if(inputAge.value < 18){
        window.alert('[ERROR] text other age');
    }
    if(inputs[0].checked && inputAge.value >= 18){
        divImages.style.display = 'flex';
        images.src = "https://i0.wp.com/cinestera.com.br/wp-content/uploads/2022/10/Pearl-filme.jpeg?resize=768%2C432&ssl=1";
        nomeFilme.innerHTML = 'Pearl';
    } else if(inputs[1].checked && inputAge.value >= 18){
        divImages.style.display = 'flex';
        images.src = "https://m.media-amazon.com/images/I/51tOG0zzUgL._AC_.jpg";
        nomeFilme.innerHTML = 'Titanic';
    } else if(inputs[2].checked && inputAge.value >= 18){
        divImages.style.display = 'flex';
        images.src = "https://media.themoviedb.org/t/p/w220_and_h330_face/1VLcIs7GwAIdRGw8e7hAyKLttvg.jpg";
        nomeFilme.innerHTML = 'Jumanji';
    }
}