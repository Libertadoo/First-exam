let izcelt = document.querySelector("#glow");
let izcelt2 = document.querySelector("#glow2");
let home = document.querySelector(".home");



home.addEventListener('click', goToHomepage);
function goToHomepage(){
	window.location = "index.html";
}
izcelt.addEventListener('mouseover', lielaks);
function lielaks(){
	izcelt.classList.add('lielaks');
	console.log('ir');
}
izcelt.addEventListener('mouseout', mazaks);
function mazaks(){
	izcelt.classList.remove('lielaks');
	console.log('ir');
}

izcelt2.addEventListener('mouseover', lielaks2);
function lielaks2(){
	izcelt2.classList.add('lielaks');
	console.log('ir');
}
izcelt2.addEventListener('mouseout', mazaks2);
function mazaks2(){
	izcelt2.classList.remove('lielaks');
	console.log('ir');
}
