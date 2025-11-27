import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('/api/contact', formData)
      setStatus({ type: 'success', message: response.data.message })
      setFormData({
        name: '',
        email: '',
        phone: '',
        carType: '',
        message: ''
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send inquiry. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-form-container">
          {status.message && (
            <div className={`message ${status.type}`}>
              {status.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label htmlFor="carType">Type of Car</label>
              <select
                id="carType"
                name="carType"
                value={formData.carType}
                onChange={handleChange}
              >
                <option value="">Select a car type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Truck">Truck</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Classic/Vintage">Classic/Vintage</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your custom car project..."
              />
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

