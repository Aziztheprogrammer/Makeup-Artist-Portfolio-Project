// Main Page Background Animation
let dots = document.querySelectorAll(".switch__dots > span");

activeIndex = 0;
function dotsAnimation() {
	if (activeIndex <= 2) {
		for (i = 0; i <= 2; i++) {
			if (i == activeIndex) {
				dots[i].classList.add("active");
				i == 2 ? activeIndex = -1: true; // Because At The End Of The Function We Add 1
			} else {
				dots[i].classList.remove("active");
			}
		}
	}
	activeIndex++;
}

let imgContainers = document.querySelectorAll(".bg__img__container");

bgActiveIndex = 0;

function bgAnimation() {
	if (bgActiveIndex <= 2) {
		for (i = 0; i <= 2; i++) {
			if (i == bgActiveIndex) {
				imgContainers[i].style.filter = "brightness(50%)";
				imgContainers[i].style.zIndex = 0;
				i == 2 ? bgActiveIndex = -1: true; // Because At The End Of The Function We Add 1
			} else {
				imgContainers[i].style.filter = "brightness(0%)";
				imgContainers[i].style.zIndex = -1;
			}
		}
	}
	bgActiveIndex++;

}

setInterval(dotsAnimation, 5000);
setInterval(bgAnimation, 5000);

// Page Loader Hide

function pageLoaderAnimation() {
	let pageLoader = document.querySelector(".page__loader");

	setTimeout (function () {
		pageLoader.style.opacity = 0;
		setTimeout (function () {
			pageLoader.style.display = "none";
		}, 100)
	}, 6000);
}

window.onload = pageLoaderAnimation;