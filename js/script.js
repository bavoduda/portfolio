
// menu hamgurguer

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer .addEventListener('click', () => {
    toggleMenu();

} );

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer .classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display ='block';

    }else{
        nav.style.display ='none';
    }
}

//  Continuar lendo

function toggleReadMore() {
    var moreContent = document.querySelector('.more');
    var btn = document.querySelector('.ler');
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.textContent = "Ler Menos";
    } else {
        moreContent.style.display = "none";
        btn.textContent = "Continuar Lendo";
    }
}
