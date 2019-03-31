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

function activateSlide(event) {
	for (var i = 0; i <  slideButtons.length; i++) {
		if (activeSlideButton = slideButtons[i]) {
				slideButtons[i].classList.remove('js-slider-button-active');
				slideItems[i].classList.remove('js-slider-item-active');
		}
	}
	var numberOfSlide = event.target.attributes.dataSlideId.value;

	event.target.classList.add('js-slider-button-active');
	slideItems[numberOfSlide].classList.add('js-slider-item-active');
}

function onLoad(){
		sendButton = $('.sendButton');
		modalFeedback = $('.modal-feedback');
		modalClose = $$('.js-modal-close');
		activeSlideItem = $('.js-slider-item-active');
		activeSlideButton = $('.js-slider-button-active');
		slideItems = $$('.js-slider-item');
		slideButtons = $$('.js-slider-button');



		sendButton.onclick = openModalFeedback;

		for (var i = 0; i < modalClose.length; i++) {
				modalClose[i].onclick = closeModalFeedback;
		}


		for (var i = 0; i < slideItems.length; i++) {
				slideButtons[i].onclick = activateSlide;
		}
}
