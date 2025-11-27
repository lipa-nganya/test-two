import React, { useState, useEffect } from 'react'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cars = [
    {
      name: 'Lamborghini Aventador',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop&q=80',
      color: '#FFD700'
    },
    {
      name: 'Ferrari 488',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786e0c51?w=1920&h=1080&fit=crop&q=80',
      color: '#DC143C'
    },
    {
      name: 'McLaren P1',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786e0c51?w=1920&h=1080&fit=crop&q=80',
      color: '#FF4500'
    },
    {
      name: 'Porsche 911',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&h=1080&fit=crop&q=80',
      color: '#000000'
    },
    {
      name: 'Aston Martin DB11',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786e0c51?w=1920&h=1080&fit=crop&q=80',
      color: '#0066CC'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [cars.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
          ‹
        </button>
        <div className="carousel-slides">
          {cars.map((car, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${car.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <h3 className="carousel-car-name">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button carousel-button-next" onClick={goToNext}>
          ›
        </button>
      </div>
      <div className="carousel-indicators">
        {cars.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

