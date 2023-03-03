console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('form has been submit')
}
const photoMouseover = () => {
	alert('You look STUNNING!')
}


let form = document.querySelector('#contact');
let photo = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
photo.addEventListener('mouseover', photoMouseover)
