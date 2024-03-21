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
