let glavniSlide = document.querySelector('.slide-glavni');

function get(odabir){
    getImage(odabir.id);
}

function getImage(slika){

    let imageDatabase = {
        'slide1':document.querySelector('#slide1').src,
        'slide2':document.querySelector('#slide2').src,
        'slide3':document.querySelector('#slide3').src,
        'slide4':document.querySelector('#slide4').src,
    };

    let odaberiSliku = imageDatabase[slika];

    glavniSlide.innerHTML = '<img src="'+odaberiSliku+'">';
}




