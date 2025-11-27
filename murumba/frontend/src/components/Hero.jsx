import React from 'react'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <section className="hero">
      <Carousel />
      <div className="hero-content container">
        <h1>Kelvin Murumba</h1>
        <p>Custom Cars Built to Perfection</p>
        <a href="#contact" className="cta-button">Get Your Custom Car</a>
      </div>
    </section>
  )
}

export default Hero

