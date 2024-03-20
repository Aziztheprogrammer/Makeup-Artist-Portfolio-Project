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

let imgContainer = document.querySelector(".bg__img__container");

bgActiveIndex = 1;
console.log(imgContainer)

function bgAnimation() {
	imgContainer.style.backgroundImage = `url(images/bg-${bgActiveIndex}.webp)`;
	setTimeout(function () {
		imgContainer.style.filter = "brightness(0%)";
	}, 4000);
	bgActiveIndex == 3 ? bgActiveIndex = 0: true; // Because At The End Of The Function We Add 1
	bgActiveIndex++;
	setTimeout(function () {
		imgContainer.style.filter = "brightness(50%)";
	}, 1000);
}

setInterval(dotsAnimation, 5000);
setInterval(bgAnimation, 5000);