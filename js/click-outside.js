const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');



function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card')
    // grab the image src
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    // populate the modal with the new infor
    modalInner.innerHTML = `
    <img width="500px" height="600px" src="${imgSrc.replace('200', '600')}" alt=${name}/>
    <p>${desc}</p>
    `;
    //shpw the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(e) {
    const isOutside = !e.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
        closeModal();
    }
});