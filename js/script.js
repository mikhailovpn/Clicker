var sendButton, modalFeedback, modalClose, slideButtons;

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

function onLoad(){
		sendButton = $('.sendButton');
		modalFeedback = $('.modal-feedback');
		modalClose = $('.modal-close');
		slideButtons = $$('.js-slider-button');

		sendButton.onclick = openModalFeedback;
		modalClose.onclick = closeModalFeedback;



		for(var key in slideButtons) {
			slideButtons[key].onclick = slide;
			
		}
}
