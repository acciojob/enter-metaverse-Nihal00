//your JS code here. If required.
const p = document.getElementById('status');
const btn = document.getElementById('enterBtn');

function change() {
	p.innerText = 'Entered Metaverse';
}

btn.addEventListener('click', change);