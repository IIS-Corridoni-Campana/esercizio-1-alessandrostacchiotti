document.addEventListener('DOMContentLoaded', function(){
	const dayBtn = document.getElementById('dayBtn');
	const nightBtn = document.getElementById('nightBtn');
	const scene = document.getElementById('scene');
	const title = document.getElementById('sceneTitle');
	const text = document.getElementById('sceneText');
	const sceneImage = document.getElementById('sceneImage');

	function setDay(){
		scene.classList.remove('night');
		scene.classList.add('day');
		if(sceneImage) sceneImage.src = 'Giorno.png';
		title.textContent = 'Buongiorno!';
		text.textContent = 'La scena mostra il giorno. Clicca "Notte" per cambiare.';
		dayBtn.setAttribute('aria-pressed','true');
		nightBtn.setAttribute('aria-pressed','false');
	}

	function setNight(){
		scene.classList.remove('day');
		scene.classList.add('night');
		if(sceneImage) sceneImage.src = 'Notte.png';
		title.textContent = 'Buonanotte!';
		text.textContent = 'La scena mostra la notte. Clicca "Giorno" per tornare.';
		dayBtn.setAttribute('aria-pressed','false');
		nightBtn.setAttribute('aria-pressed','true');
	}

	dayBtn.addEventListener('click', setDay);
	nightBtn.addEventListener('click', setNight);

	// Keyboard accessibility: D = day, N = night
	document.addEventListener('keydown', (e)=>{
		if(e.key.toLowerCase()==='d') setDay();
		if(e.key.toLowerCase()==='n') setNight();
	});
	// inizializza immagine in base alla classe della scena
	if(sceneImage){
		if(scene.classList.contains('night')) sceneImage.src = 'Notte.png';
		else sceneImage.src = 'Giorno.png';
	}
});
