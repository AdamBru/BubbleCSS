console.log('1');
// Kopiuj do schowka
function toClipboard(e) {
	// Get the text field
	var copyText = e.target.parentNode;
	console.log(copyText);
  
	// Select the text field
	copyText.select();
	copyText.setSelectionRange(0, 99999); // For mobile devices
  
	// Copy the text inside the text field
	navigator.clipboard.writeText(copyText.value);
	
	// Alert the copied text
	alert("Copied the text: " + copyText.value);
  }

const clipboardButtons = document.querySelectorAll('[data-toClipboard]');
console.log(clipboardButtons);

console.log('2');



// Dodaje nagłówek zdefiniowany w components/header.html w miejsce elementu div o id 'header-placeholder'
fetch('./components/header.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('header-placeholder').innerHTML = data;
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
fetch('./components/navigation.html')
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
fetch('./components/menu.html')
	.then(response => response.text())
	.then(data => {
		document.getElementById('menu-placeholder').innerHTML = data;

		// Ustawianie top == totalHeaderHeight dla menu-placeholder
		document.getElementById('menu-placeholder').style.setProperty('--header-height', totalHeaderHeight + 'px');
	})
	.catch(error => console.error('Błąd wczytywania menu', error));

// Dodaje stopkę zdefiniowaną w components/footer.html w miejsce elementu div o id 'footer-placeholder'
fetch('./components/footer.html')
	.then(response => response.text())
	.then(data => {document.getElementById('footer-placeholder').innerHTML = data;})
	.catch(error => console.error('Błąd wczytywania footer', error));


