let home = document.querySelector(".home");
let arrow = document.querySelector(".arrow");
let teksts = document.querySelector(".teksts");
let me = document.querySelector(".me");
let div = document.querySelector(".div");
let arrownext = document.querySelector(".arrownext");
let div2 = document.querySelector(".div2");
let insta = document.querySelector(".insta");
let instax = document.querySelector(".instax");
let fb = document.querySelector(".fb");
let fbx = document.querySelector(".fbx");



home.addEventListener('click', goToHomepage);
function goToHomepage(){
	window.location = "index.html";
}

arrow.addEventListener('click', next);
function next(){
	//insta.classList.add("insta");
	//fb.classList.add("fb");
	teksts.classList.add("next");
	me.classList.add("next");
	div.classList.add("next");
	arrownext.classList.remove("arrownext");
	arrownext.classList.add("show");
	arrow.classList.add("hide");
	teksts.classList.remove("back");
	me.classList.remove("back");
	div.classList.remove("back");
	//insta.classList.remove("insta");
	insta.classList.add("showinsta");
	fb.classList.add("showfb");

	div2.classList.remove("dontshowdiv2");
	div2.classList.add("showdiv2");
	insta.classList.remove("dontshowinsta");
	fb.classList.remove("dontshowfb");





}

arrownext.addEventListener("click", back);
function back(){
	//insta.classList.add("insta");
	//fb.classList.add("fb");
	teksts.classList.remove("next");
	me.classList.remove("next");
	div.classList.remove("next");
	teksts.classList.add("back");
	me.classList.add("back");
	div.classList.add("back");
	arrow.classList.remove("hide");
	arrownext.classList.remove("show");
	arrownext.classList.add("arrownext");
	div2.classList.remove("showdiv2");
	div2.classList.add("dontshowdiv2");
	insta.classList.remove("showinsta");
	fb.classList.remove("showfb");

	insta.classList.add("dontshowinsta");
	fb.classList.add("dontshowfb");
	//insta.classList.add("insta");
}

insta.addEventListener('click', openinsta);
function openinsta(){
	window.location = "https://www.instagram.com/libertadoo/";
}

fb.addEventListener('click', openfb);
function openfb(){
	window.location = "https://www.facebook.com/lvorobeja";
}

instax.addEventListener('click', openinstax);
function openinstax(){
	window.location = "https://www.instagram.com/libertadoo/";
}

fbx.addEventListener('click', openfbx);
function openfbx(){
	window.location = "https://www.facebook.com/lvorobeja";
}
