const menuButtons = document.querySelectorAll('.btn');




function menuButtonClick(event) {
   const button = event.currentTarget;
   const cuttentButton = button.closest('#icon');
   console.log(cuttentButton);
}

menuButtons.forEach(button => button.addEventListener('click', menuButtonClick))