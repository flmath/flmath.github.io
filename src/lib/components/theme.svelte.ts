import { browser } from '$app/environment'
import '$lib/assets/global.css'
class Theme {
	current = $state(browser && localStorage.getItem('color-scheme'))

	toggle = () => {
		const theme = this.current === 'moon' ? 'sun' : 'moon'
		document.documentElement.setAttribute('color-scheme', theme)
		localStorage.setItem('color-scheme', theme)
		this.current = theme
	}
	isMoon = () => {
		return this.current === 'moon'
	}
	setMode = (mode: 'moon' | 'sun') => {
		document.documentElement.setAttribute('color-scheme', mode)
		localStorage.setItem('color-scheme', mode)
		this.current = mode
	}
	setMoon = () => {
		this.setMode('moon')
	}
	setSun = () => {
		this.setMode('sun')
	}
}

export const theme = new Theme()

