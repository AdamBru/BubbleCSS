// Modal
let body = document.body;
let opakowanie, bg, okno, naglowek, zamknij, contener;

export function modal(tytul, tresc) {
	opakowanie = document.createElement('div');
	opakowanie.classList.add('modal');
	body.style.overflow = 'hidden';

	bg = document.createElement('div');
	bg.classList.add('modal-bg');

	bg.addEventListener('click', zamknijModal);

	okno = document.createElement('div');
	okno.classList.add('modal-okno');

	naglowek = document.createElement('div');
	naglowek.classList.add('modal-head');
	naglowek.innerHTML = tytul;

	zamknij = document.createElement('div');
	zamknij.classList.add('modal-zamknij');

	zamknij.addEventListener('click', zamknijModal);

	contener = document.createElement('div');
	contener.classList.add('modal-content');
	contener.innerHTML = tresc;

	naglowek.appendChild(zamknij);
	okno.appendChild(naglowek);
	okno.appendChild(contener);
	opakowanie.appendChild(bg);
	opakowanie.appendChild(okno);
	body.appendChild(opakowanie);

	setTimeout(() => {
		opakowanie.classList.add('modal-show');
	}, 10);
}

export function zamknijModal() {
	opakowanie.classList.remove('modal-show');
	setTimeout(() => {
		body.style.overflow = 'auto';
		body.removeChild(opakowanie);
		opakowanie = bg = okno = naglowek = zamknij = contener = null;
	}, 100);
}
