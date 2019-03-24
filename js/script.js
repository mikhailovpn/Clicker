var sendButton, modalFeedback, modalClose;

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

function onLoad(){
		sendButton = $('.sendButton');
		modalFeedback = $('.modal-feedback');
		modalClose = $('.modal-close');

		sendButton.onclick = openModalFeedback;
		modalClose.onclick = closeModalFeedback;
}
