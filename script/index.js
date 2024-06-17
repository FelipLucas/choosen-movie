function verificar(){
    let inputAge = document.getElementById('iage');
    let inputs = document.getElementsByName('terror');
    let nomeFilme = document.querySelector('.nome-filme');
    let divImages = document.querySelector('.div-img');
    let images = document.querySelector('.div-img img');

    if(inputAge.value >= 0 && inputAge.value <=5){
        window.alert('[ERROR] text other age');
    }
    if(inputs[2].checked && inputAge.value >= 6 && inputAge.value <= 12){
        divImages.style.display = 'flex';
        images.src = "https://ofuxico.com.br/wp-content/uploads/2022/06/a-fera-do-mar.jpg";
        nomeFilme.innerHTML = 'A Fera do Mar';
    }else if(inputs[2].checked && inputAge.value >= 13 && inputAge.value <= 16){
        divImages.style.display = 'flex';
        images.src = "https://veja.abril.com.br/wp-content/uploads/2016/11/cartaz_filme1.jpg?quality=70&strip=all";
        nomeFilme.innerHTML = 'Tin Tin';
    } else if(inputs[2].checked && inputAge.value >= 17){
        divImages.style.display = 'flex';
        images.src = "https://media.themoviedb.org/t/p/w220_and_h330_face/1VLcIs7GwAIdRGw8e7hAyKLttvg.jpg";
        nomeFilme.innerHTML = 'Jumanji';
    } 
    else if(inputs[1].checked &&  inputAge.value >= 6 && inputAge.value <= 12){
        divImages.style.display = 'flex';
        images.src = "https://img.elo7.com.br/product/zoom/285C96D/cartaz-poster-o-rei-leao-2019-disney-movie-o-filme-king.jpg";
        nomeFilme.innerHTML = 'Rei Leão';
    }
    else if(inputs[1].checked &&  inputAge.value >= 13){
        divImages.style.display = 'flex';
        images.src = "https://th.bing.com/th/id/R.3aa1f8bcf2e33c6ae0aeebf9a3cb5d9e?rik=4HUml7VcLvjpAw&pid=ImgRaw&r=0";
        nomeFilme.innerHTML = 'Titanic';
    }
    else if(inputs[0].checked && inputAge.value >= 6 && inputAge.value <= 12){
        divImages.style.display = 'flex';
        images.src = "https://th.bing.com/th/id/OIP.s1UBNQXOpDAEan7eMIsDuAHaKl?w=800&h=1143&rs=1&pid=ImgDetMain";
        nomeFilme.innerHTML = 'Boneco do Mal';
    }
    else if(inputs[0].checked &&  inputAge.value >= 13){
        divImages.style.display = 'flex';
        images.src = "https://th.bing.com/th/id/R.9bc90e363578c7051d336ac4924ccd2a?rik=PxHm5Vdvuqt%2bng&riu=http%3a%2f%2fwww.cranik.com%2fimages%2foalbergue.jpg&ehk=dLcl1nwhxwaXePNWTZoMCv4qnpa%2fPsC6j42%2bv7L8xbA%3d&risl=&pid=ImgRaw&r=0";
        nomeFilme.innerHTML = 'Albergue';
    }
}