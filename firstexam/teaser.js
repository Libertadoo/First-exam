let chain = document.querySelector(".chain400");
let chainBig = document.querySelector(".chainBig");
let showhide = document.querySelector(".showhide400");
let showhideBig = document.querySelector(".showhideBig");
let keyframes = document.querySelector(".keyframes400");
let keyframesBig = document.querySelector(".keyframesBig");
let home = document.querySelector(".home");

home.addEventListener('click', goToHomepage);
function goToHomepage(){
	window.location = "index.html";
}

chain.addEventListener('mouseover', fade);
function fade(){
	chain.src ="chain400fade.jpg";

}
chain.addEventListener('mouseout', back);
function back(){
	chain.src ="chain400.jpg";

	}
chain.addEventListener('click', bigger);
function bigger(){
	chainBig.classList.remove("chainBig");
	chainBig.classList.add("showCenter");
}

chainBig.addEventListener('mouseout', hide);
function hide(){
	chainBig.classList.remove("showCenter");
	chainBig.classList.add("chainBig");
}

showhide.addEventListener('mouseover', fade2);
function fade2(){
	showhide.src ="showhide400fade.jpg";

}
showhide.addEventListener('mouseout', back2);
function back2(){
	showhide.src ="showhide400.jpg";

}
showhide.addEventListener('click', bigger2);
function bigger2(){
	showhideBig.classList.remove("showhideBig");
	showhideBig.classList.add("showCenter");
}

showhideBig.addEventListener('mouseout', hide2);
function hide2(){
	showhideBig.classList.remove("showCenter");
	showhideBig.classList.add("showhideBig");
}

keyframes.addEventListener('mouseover', fade3);
function fade3(){
	keyframes.src ="keyframes400fade.jpg";

}
keyframes.addEventListener('mouseout', back3);
function back3(){
	keyframes.src ="keyframes400.jpg";

	}
keyframes.addEventListener('click', bigger3);
function bigger3(){
	keyframesBig.classList.remove("keyframesBig");
	keyframesBig.classList.add("showCenterKEY");
}

keyframesBig.addEventListener('mouseout', hide3);
function hide3(){
	keyframesBig.classList.remove("showCenterKEY");
	keyframesBig.classList.add("keyframesBig");
}
