// autoplays videos on slide load and mutes audio in presenter mode
// as in presenter mode, the slide ahead of what the public sees is shown
let slideElements;
const body = document.body;
function getElementForSlide(slide) {
	slideElements = slideElements || document.querySelectorAll('.remark-slide');
	return slideElements[slide.getSlideIndex()];
}
slideshow.on('showSlide', (slide) => {
	getElementForSlide(slide).querySelectorAll('video').forEach((vid) => {
		if (body.classList.contains('remark-presenter-mode')) {
			vid.muted = true;
		}
		if (vid.attributes['data-autoplay'].value === 'true') {
			vid.play();
		}
	});
});
slideshow.on('hideSlide', (slide) => {
	getElementForSlide(slide).querySelectorAll('video').forEach((vid) => {
		vid.pause();
	});
});
