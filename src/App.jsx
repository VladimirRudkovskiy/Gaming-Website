import React from 'react'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
	return (
		<main className='relative mon-h-screen w-screen overflow-x-hidden'>
			<Hero />

			<About />
		</main>
	)
}

export default App
