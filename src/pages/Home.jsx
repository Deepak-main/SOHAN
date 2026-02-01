import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Professional Video Editing Studio</h1>
          <p className="hero-subtitle">
            Transform your vision into stunning visual stories with our expert editing services
          </p>
          <div className="hero-buttons">
            <a href="/product" className="btn btn-primary">View Our Work</a>
            <a href="/contact" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✂️</div>
              <h3>Expert Editing</h3>
              <p>Professional video editing with attention to detail and creative flair</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Creative Vision</h3>
              <p>Bringing your ideas to life with innovative storytelling techniques</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick delivery without compromising on quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Custom Solutions</h3>
              <p>Tailored editing services to meet your specific needs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Cinematic Quality</h3>
              <p>Hollywood-grade editing techniques for stunning visual impact</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Audio Enhancement</h3>
              <p>Professional sound mixing and audio post-production services</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌈</div>
              <h3>Color Grading</h3>
              <p>Expert color correction and grading to set the perfect mood</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Professional Team</h3>
              <p>Experienced editors dedicated to bringing your vision to life</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Latest Technology</h3>
              <p>Using cutting-edge software and tools for the best results</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
