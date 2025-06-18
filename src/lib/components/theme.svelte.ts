import { browser } from '$app/environment'
import '$lib/assets/global.css'
import { writable, type Unsubscriber, type Subscriber } from 'svelte/store';


class Theme {
	current = $state(browser && localStorage.getItem('color-scheme'))
	darkstate = writable((browser && localStorage.getItem('color-scheme')) === 'moon');
	toggle = () => {
		const theme = this.current === 'moon' ? 'sun' : 'moon'
		this.setMode(theme)
	}
	
	isMoon = () => {
		return this.current === 'moon'
	}
	setMode = (mode: 'moon' | 'sun') => {
		document.documentElement.setAttribute('color-scheme', mode)
		localStorage.setItem('color-scheme', mode)
		this.current = mode
		this.darkstate.set(this.isMoon())
	}
	setMoon = () => {
		this.setMode('moon')
	}
	setSun = () => {
		this.setMode('sun')
	}

	// Expose the subscribe method of the darkstate store
	subscribe(run: Subscriber<boolean>, invalidate?: (value?: boolean) => void): Unsubscriber {
		return this.darkstate.subscribe(run, invalidate);
	}
}

export const theme = new Theme()
