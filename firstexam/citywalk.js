let closeup = document.querySelector(".closeup4");
let medium = document.querySelector(".medium4");
let long = document.querySelector(".long4");
let right = document.querySelector(".elitsa4");
let left = document.querySelector(".linda4");
let cutaway = document.querySelector(".cutaway4");
let home = document.querySelector(".home");

home.addEventListener('click', goToHomepage);
function goToHomepage(){
	window.location = "index.html";
}

closeup.addEventListener('mouseover', fade);
function fade(){
	closeup.src ="closeup400fade.png";

}
closeup.addEventListener('mouseout', back);
function back(){
	closeup.src ="closeup400.png";

	}
medium.addEventListener('mouseover', fade2);
function fade2(){
	medium.src ="medium400fade.png";

}
medium.addEventListener('mouseout', back2);
function back2(){
	medium.src ="medium400.png";

	}
long.addEventListener('mouseover', fade3);
function fade3(){
	long.src ="long400fade.png";

}
long.addEventListener('mouseout', back3);
function back3(){
	long.src ="long400.png";

	}
right.addEventListener('mouseover', fade4);
function fade4(){
	right.src ="elitsa400fade.png";

}
right.addEventListener('mouseout', back4);
function back4(){
	right.src ="elitsa400.png";

	}
left.addEventListener('mouseover', fade5);
function fade5(){
	left.src ="linda400fade.png";

}
left.addEventListener('mouseout', back5);
function back5(){
	left.src ="linda400.png";

	}
cutaway.addEventListener('mouseover', fade6);
function fade6(){
	cutaway.src ="cutaway400fade.png";

}
cutaway.addEventListener('mouseout', back6);
function back6(){
	cutaway.src ="cutaway400.png";

	}
