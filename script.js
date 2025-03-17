// Pobiera ścieżkę bazową z atrybutu data-base-path w znaczniku script
const basePath = document.querySelector('script[src$="script.js"]').dataset.basePath;
const logoPath = document.querySelector('script[src$="script.js"]').dataset.logoPath;

// Dodaje nagłówek zdefiniowany w components/header.html w miejsce elementu div o id 'header-placeholder'
fetch(`${basePath}components/header.html`)
	.then(response => response.text())
	.then(data => {
		document.getElementById('header-placeholder').innerHTML = data;
		loadLogo();
		
		calculateHeaderHeight();
	})
	.catch(error => console.error('Błąd wczytywania header', error));

// Obliczanie wysokości header
function calculateHeaderHeight() {
	const header = document.querySelector('.header');
	if (header) {
	  headerHeight = header.getBoundingClientRect().height;
	  headerMargin = parseInt(getComputedStyle(header).margin, 10) || 0;
	  totalHeaderHeight = headerHeight + headerMargin;
	}
  }
	
// Dodaje pasek nawigacji zdefiniowany w components/navigation.html w miejsce elementu div o id 'navigation-placeholder'
fetch(`${basePath}components/navigation.html`)
	.then(response => response.text())
	.then(data => {
		document.getElementById('navigation-placeholder').innerHTML = data;
	
		// Przełączanie Burger Menu
		const menuToggle = document.querySelector('.nav-toggle');
		const topNav = document.querySelector('.top-nav');
		menuToggle.addEventListener('click', () => topNav.classList.toggle('active'));

		// Ustawianie top == totalHeaderHeight dla navigation-placeholder
		document.getElementById('navigation-placeholder').style.setProperty('--header-height', totalHeaderHeight + 'px');
	})
	.catch(error => console.error('Błąd wczytywania navigation', error));

// Dodaje menu zdefiniowane w components/menu.html w miejsce elementu div o id 'menu-placeholder'
fetch(`${basePath}components/menu.html`)
	.then(response => response.text())
	.then(data => {
		document.getElementById('menu-placeholder').innerHTML = data;

		// Ustawianie top == totalHeaderHeight dla menu-placeholder
		document.getElementById('menu-placeholder').style.setProperty('--header-height', totalHeaderHeight + 'px');
	})
	.catch(error => console.error('Błąd wczytywania menu', error));

// Dodaje stopkę zdefiniowaną w components/footer.html w miejsce elementu div o id 'footer-placeholder'
fetch(`${basePath}components/footer.html`)
	.then(response => response.text())
	.then(data => {document.getElementById('footer-placeholder').innerHTML = data;})
	.catch(error => console.error('Błąd wczytywania footer', error));


// Kopiuj do schowka
function toClipboard(e) {
	var copyText = e.target.parentNode.parentNode.querySelector('pre > code').textContent;
	navigator.clipboard.writeText(copyText);
	
	alert("Skopiowany tekst: \n" + copyText);
  }

const clipboardButtons = document.querySelectorAll('[data-toClipboard]');

clipboardButtons.forEach(
	button => button.addEventListener('click', toClipboard)
);

// Ustawia logo w CSS
function loadLogo() {
	const logoUrl = `${basePath}assets/images/${logoPath}`;
	const logos = document.querySelectorAll('.logo');
	if (logos.length > 0) {
		logos.forEach(logo => {
			console.log(logo.style.background)
			logo.style.background = `url('${logoUrl}')`;
		});
	} else {
		console.error("Nie znaleziono elementów .logo");
	}
}
	
// Test ścieżek
// console.log('Ścieżka domowa: ' + basePath);
// console.log('Ścieżka logo: ' + logoUrl);
// console.log('header: ' + `${basePath}components/header.html`);