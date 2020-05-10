// let name = 'Max';

// if (name === 'Max') {
//   let hobbies = ['Sports', 'Cooking'];
//   console.log(hobbies);

// }

// function greet() {
//   let age = 30;
//   let name = 'Manuel';
//   console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();
'use strict';

const userName = 'Max';
// var undefined = 5;

console.log(userName);

// Inside the Javascript engine - how the code executes
function getName() {
	return prompt('Your name: ', '');
}

function greet() {
	const userName = getName();
	console.log('Hello ' + userName);
}

greet();

// Lesson 117
const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

function printMessage() {
	const value = messageInput.value;
	console.log(value || 'Clicked me!');
}

function addListener() {
	clickableBtn.addEventListener('click', function () {
		const value = messageInput.value;
		console.log(value || 'Clicked me!');
	});
}

addListenerBtn.addEventListener('click', addListener);
