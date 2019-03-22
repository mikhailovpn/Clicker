var sendButton, modalFeedback, modalClose;

function openModalFeedback() {
	modalFeedback.setAttribute('class', 'modal-feedback unhidden');
	return false;
}

function closeModalFeedback() {
	modalFeedback.setAttribute('class', 'modal-feedback hidden')
	console.log()
	return false;
}

function $(selector){
	return document.querySelector(selector);
} 
	
function onLoad(){

     //sendButton = document.querySelector('.sendButton');
		 sendButton = $('.sendButton');
     modalFeedback = document.querySelector('.modal-feedback');
     modalClose = document.querySelector('.modal-close');

sendButton.onclick = openModalFeedback;
modalClose.onclick = closeModalFeedback;
}