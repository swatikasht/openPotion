
function windowLoadFunction(){

	var divElem = document.getElementById("empty-div");
	var bodyElem = document.getElementsByTagName("body")[0];
	bodyElem.addEventListener("scroll", function(){
    divElem.innerHTML = "Hello World";});
    var topLinkElem = document.querySelector(".back-to-top");
	topLinkElem.addEventListener("click",backToTop);
     //var crslElem = document.getElementById("carousel-example-generic");
    // crslElem.carousel();
    //$('.carousel').carousel()
};

function backToTop() {
	console.log("top called");
	document.documentElement.scrollTop = 0;
	setMainHeaderPosition();
}

function setMainHeaderPosition(){
	var scrollPosition = window.scrollY;
	var mainHeaderElem = document.getElementsByClassName("main-header")[0];
	var imgElem = document.querySelector("#title-logo img");
	mainHeaderElem.style.height= (88 - scrollPosition) + "px";
	imgElem.style.maxHeight = 	(88 - scrollPosition) + "px";
}

function scrollFunction(){
	var divElem = document.getElementById("empty-div");
	var scrollPosition = window.scrollY;
	var mainHeaderElem = document.getElementsByClassName("main-header")[0];
	var imgElem = document.querySelector("#title-logo img");
	var headerElem = document.getElementById("header");
	if(divElem.getBoundingClientRect().top<0){
		if(scrollPosition<44){
			setMainHeaderPosition();
		}else{
			mainHeaderElem.style.height = 44+"px";
			imgElem.style.maxHeight = 44 + "px";
		}
		headerElem.classList.add("stickyHeader");
		divElem.classList.add("empty-div-padding");
	}else{
		backToTop();
		headerElem.classList.remove("stickyHeader")
		divElem.classList.remove("empty-div-padding")
	}
}

	

