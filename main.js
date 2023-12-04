// seleciona os elementos
const OpenWish = document.getElementById('open-heart');
const WishList = document.getElementById('modalheart');
const CloseWish = document.getElementById('close-wish');

const OpenCard = document.getElementById('open-card');
const CardList = document.getElementById('modalcard');
const CloseCard = document.getElementById('close-card');

// adiciona os eventos
OpenWish.addEventListener('click', abrirListaDesejos);
CloseWish.addEventListener('click', fecharListaDesejos);

OpenCard.addEventListener('click', abrircarrinho);
CloseCard.addEventListener('click', fecharcarrinho);

// funções
function abrirListaDesejos() {
    WishList.classList.add('open');
}

function fecharListaDesejos() {
    WishList.classList.remove('open');
}

function abrircarrinho() {
    CardList.classList.add('open');
}

function fecharcarrinho() {
    CardList.classList.remove('open');
}