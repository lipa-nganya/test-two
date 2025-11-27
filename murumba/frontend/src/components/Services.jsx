import React from 'react'

const Services = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Engine Modifications',
      description: 'Performance upgrades and engine tuning to maximize power and efficiency.'
    },
    {
      icon: '🎨',
      title: 'Custom Paint & Bodywork',
      description: 'Stunning paint jobs and body modifications that turn heads wherever you go.'
    },
    {
      icon: '💺',
      title: 'Interior Customization',
      description: 'Luxury interiors tailored to your style with premium materials and finishes.'
    },
    {
      icon: '🔊',
      title: 'Audio Systems',
      description: 'Premium sound systems designed to deliver the ultimate audio experience.'
    },
    {
      icon: '⚡',
      title: 'Electrical Upgrades',
      description: 'Advanced lighting, electronics, and electrical system enhancements.'
    },
    {
      icon: '🛞',
      title: 'Wheel & Suspension',
      description: 'Custom wheels and suspension tuning for both style and performance.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

