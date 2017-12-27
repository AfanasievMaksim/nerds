var link = document.querySelector(".location-enter")
var popup = document.querySelector(".popup")
var close = document.querySelector(".close-cross")
var form = popup.querySelector("[name=name]")

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("popup-show")
	form.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("popup-show")
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("popup-show")) {
			popup.classList.remove("popup-show");
		}
	}
});