var sendButton, modalFeedback, modalClose, slideItems, slideButtons, activeSlideItem, activeSlideButton;

function openModalFeedback() {
		modalFeedback.classList.remove('hidden');
		return false;
}

function closeModalFeedback() {
		modalFeedback.classList.add('hidden')
		console.log()
		return false;
}

function $(selector){
		return document.querySelector(selector);
}

function $$(selector){
		return document.querySelectorAll(selector);
}

function slide(target) {
		console.log(target);
} 

function activateSlide(event) {
	
	//1 получение номера
	//1.1 на лету

	for (i = 0; i <  slideButtons.length; i++) {
		if (activeSlideButton = slideButtons[i]) {
				slideButtons[i].classList.remove('js-slider-button-active');
				slideItems[i].classList.remove('js-slider-item-active');
		}
	}
	
	//1.2 через данные
	
	//2 отображение iго слайда
	//1.1 на лету
	//1.2 через данные
	
	
}	

function onLoad(){
		sendButton = $('.sendButton');
		modalFeedback = $('.modal-feedback');
		modalClose = $('.modal-close');
		activeSlideItem = $('.js-slider-item-active');
		activeSlideButton = $('.js-slider-button-active');
		slideItems = $$('.js-slider-item');
		slideButtons = $$('.js-slider-button');
		
		

		sendButton.onclick = openModalFeedback;
		modalClose.onclick = closeModalFeedback;

		for (var i = 0; i < slideItems.length; i++) {
				slideButtons[i].onclick = activateSlide;
					
		}
}
