// Page Loader Hide

function pageLoaderAnimation() {
	let pageLoader = document.querySelector(".page__loader");

	new Promise(function(resolve, reject) {
		setTimeout(() => {
			pageLoader.style.opacity = 0;
			resolve();
		}, 6000);
	}).then(function() {setTimeout(() => {pageLoader.style.display = "none"}, 1000)});
}

window.onload = pageLoaderAnimation;
