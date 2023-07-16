let commandLineSelector = null;
window.onload = function() {
	commandLineSelector = document.getElementById('commandLineInput');
	setTimeout(CommandLineUpdate, 500);
}

let state = false;
function CommandLineUpdate() {
	state = !state;

	if(state) {
		commandLineSelector.innerHTML = " ";
	}
	else {
		commandLineSelector.innerHTML = "_";
	}
	setTimeout(CommandLineUpdate, 500);
}