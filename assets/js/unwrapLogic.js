document.querySelector('#getPresentButton').addEventListener('click', checkPresent)

function checkPresent(){
	let username = document.querySelector('#username').value
	let password = document.querySelector('#password').value
	console.log(username)
	console.log(password)
	if (username === 'jennybjork' && password === 'kruttsprengja'){
		window.location.href = '../../giftopen.html';
	}
}