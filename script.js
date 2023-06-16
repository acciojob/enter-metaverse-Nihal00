//your JS code here. If required.
const p = document.getElementById('status');
const btn = document.getElementById('enterBtn');

function change() {
	p.innerHTML = `<h1>Entered Metaverse</h1>`;
}

btn.addEventListener('click', change);