import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'

const App = () => {
	return (
		<main className='relative mon-h-screen w-screen overflow-x-hidden'>
			<Navbar />
			<Hero />
			<About />
			<Features />
			<Story />
		</main>
	)
}

export default App
