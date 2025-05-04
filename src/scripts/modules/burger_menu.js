const burgerButton = document.querySelector('.burger-button');
const mobileOverlay = document.querySelector('.mobile-overlay');

burgerButton.addEventListener('click', () => {
	mobileOverlay.showModal();
});
