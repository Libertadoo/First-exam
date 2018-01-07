

let aboutme = document.querySelector(".aboutme");
let portfolioH = document.querySelector(".portfolioH");



aboutme.addEventListener('click', openAbout);
function openAbout(){
	window.location = "about.html";
}

portfolioH.addEventListener('click', openPortfolio);
function openPortfolio(){
	window.location = "portfolio.html";
}



