var typed = new Typed("#typed", {
	stringsElement: '#typed-strings',
	typeSpeed: 40,
	backSpeed: 20,
	backDelay: 1500,
	loop: true,
	loopCount: Infinity,
	autoInsertCss: true
});

$.localScroll();

var $modalTrigger = $('.modal-trigger');
var $modal = $('#contact-form');
var $closeButton = $('.close-button');

function trigger() {

	$(this).addClass("shrink");
	$modal.removeClass("is-closed").addClass("is-open");
}

function untrigger() {
	$modal.removeClass("is-open").addClass("is-closed");
	$modalTrigger.removeClass("shrink");
}

$modalTrigger.click(trigger);
$closeButton.click(untrigger);