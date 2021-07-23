"use strict"
// let json= '["Коля", "Вася", "Петя"]';
// let object=JSON.parse(json);
// alert(object[2]);
// let object= {a: 'aaa', b: 'bbb'};
// let json=JSON.stringify(object);
//alert(json);
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
//50
// document.cookie = "user=John"; // обновляем только куки с именем 'user'
// alert(document.cookie); 
// let textArea=document.querySelector('textarea');
// let value=localStorage.getItem('TextArea');
// textArea.value=value;
// textArea.addEventListener('change', function(){
// 	console.log(textArea.value);
// 	localStorage.clear();
// 	localStorage.setItem('TextArea', textArea.value);
// });
//localStorage.clear();
let textArea=document.querySelector('textarea');
//console.log(localStorage.getItem(1));
textArea.addEventListener('blur', function(){
	console.log(localStorage.getItem(1));
	if (localStorage.getItem(1) === null){
		let arr=[];
		//console.log(localStorage.getItem(1))
		arr.push(this.value);
		let json=JSON.stringify(arr);
		localStorage.setItem(1, json);
	}
	else{
		let json=localStorage.getItem(1);
		let arr=JSON.parse(json);
		arr.push(this.value);
		//for (let elem of buttons) elem.display="inline-block";
		swappingHistory();
		let butotons=document.querySelectorAll('button');

		butotons[0].addEventListener('click', function (){
			let flag=false;
			console.log(arr);
			if (arr.indexOf(textArea.value) != -1) flag=true;
			if (textArea.value == arr[0]) return;
			if (flag) {
				console.log('!');
				let index = arr.indexOf(textArea.value);
				textArea.value=arr[index-1]
			}
			else return;
		});
		butotons[1].addEventListener('click', function (){
			let flag=false;
			console.log(arr);
			if (arr.indexOf(textArea.value) != -1) flag=true;
			if (textArea.value == arr[arr.length-1]) return;
			else {
			if (flag) {
				let index = arr.indexOf(textArea.value);
				textArea.value=arr[index+1]
			}
			else return;}
		});
		
		
		let str = JSON.stringify(arr);
		localStorage.setItem(1, str);
	}
});
function swappingHistory(){
	let buttons=document.querySelectorAll('button');
	let body=document.querySelector('body');
	buttons.forEach(function(elem){
		elem.remove();
	});
	let prevButton=document.createElement('button');
	let nextButton=document.createElement('button');
	prevButton.classList.add('class');
	nextButton.classList.add('class');
	prevButton.id="prevButton";
	nextButton.id="nextButton";

	body.appendChild(nextButton);
	body.appendChild(prevButton);

	// prevButton.addEventListener('click', swapHistoryLeft(arr));
	// nextButton.addEventListener('click', swapHistoryRight(arr));
}

function swapHistoryRight(arr){
	let flag=false;
	console.log(arr);
	if (arr.indexOf(textArea.value) != -1) flag=true;
	if (textArea.value == arr[arr.length-1]) return;
	else {
	if (flag) {
		let index = arr.indexOf(textArea.value);
		textArea.value=arr[index+1]
	}
	else return;}
}

function swapHistoryLeft(arr){
	let flag=false;
	console.log(arr);
	if (arr.indexOf(textArea.value) != -1) flag=true;
	if (textArea.value == arr[arr.length-1]) return;
	if (flag) {
		console.log('!');
		let index = arr.indexOf(textArea.value);
		textArea.value=arr[index-1]
	}
	else return;
}