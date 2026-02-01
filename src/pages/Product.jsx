import React from 'react'
import '../styles/Product.css'

function Product() {
  const services = [
    {
      title: 'Corporate Videos',
      description: 'Professional corporate content for businesses and brands',
      price: 'Starting at $500'
    },
    {
      title: 'Wedding Videos',
      description: 'Beautifully edited wedding films to capture your special day',
      price: 'Starting at $800'
    },
    {
      title: 'Music Videos',
      description: 'Creative music video editing with dynamic visuals',
      price: 'Starting at $600'
    },
    {
      title: 'YouTube Content',
      description: 'Engaging edits optimized for YouTube and social media',
      price: 'Starting at $300'
    },
    {
      title: 'Commercial Ads',
      description: 'Eye-catching commercial advertisements',
      price: 'Starting at $1000'
    },
    {
      title: 'Documentary Editing',
      description: 'Professional documentary film editing',
      price: 'Starting at $1200'
    }
  ]

  return (
    <div className="product">
      <div className="container">
        <h1 className="page-title">Our Services</h1>
        <p className="page-subtitle">
          Explore our range of professional video editing services
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <h3>{service.title}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <button className="btn-service">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
