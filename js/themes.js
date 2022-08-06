const body = document.body
const themeSwitch = body.querySelector('.switch')
const localStor = localStorage.getItem('calc-theme')
const prefers = window.matchMedia('(prefers-color-scheme: dark)')

if (prefers.matches) {
	body.classList.add('violet-theme')
	themeSwitch.setAttribute('value', '3')
} else {
	body.classList.remove('violet-theme')
}

if (localStor === 'violet') {
	body.classList.add('violet-theme')
	body.classList.remove('white-theme')
	themeSwitch.setAttribute('value', '3')
} else if (localStor === 'white') {
	body.classList.add('white-theme')
	body.classList.remove('violet-theme')
	themeSwitch.setAttribute('value', '2')
} else if (localStor === 'normal') {
	body.classList.remove('violet-theme', 'white-theme')
	themeSwitch.setAttribute('value', '1')
}

function changeTheme(value) {
	let theme
	if (value == 1) {
		body.classList.remove('violet-theme', 'white-theme')
		theme = 'normal'
	} else if (value == 2) {
		body.classList.add('white-theme')
		body.classList.remove('violet-theme')
		theme = 'white'
	} else if (value == 3) {
		body.classList.add('violet-theme')
		body.classList.remove('white-theme')
		theme = 'violet'
	}
	localStorage.setItem('calc-theme', theme)
}