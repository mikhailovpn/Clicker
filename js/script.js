var sendButton = document.querySelector('.sendButton');
var modalFeedback = document.querySelector('.modal-feedback');
var modalClose = document.querySelector('.modal-close');

sendButton.onclick = openModalFeedback;
modalClose.onclick = closeModalFeedback;

function openModalFeedback() {
	modalFeedback.setAttribute('class', 'modal-feedback unhidden');
}

function closeModalFeedback() {
	modalFeedback.setAttribute('class', 'modal-feedback')
}