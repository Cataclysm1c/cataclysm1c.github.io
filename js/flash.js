let commandLineSelector = null;
window.onload = function() {
	commandLineSelector = document.getElementById('commandLineInput');
	setTimeout(CommandLineUpdate, 500);
}

let state = false;
function CommandLineUpdate() {
	state = !state;
	commandLineSelector.innerHTML = state ? " " : "_";
	setTimeout(CommandLineUpdate, 500);
}