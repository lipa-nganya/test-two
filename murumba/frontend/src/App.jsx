import React, { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Kelvin Murumba Custom Cars. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

