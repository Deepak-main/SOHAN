import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">About Us</h1>
        
        <section className="about-hero">
          <div className="about-content">
            <h2>Welcome to Our Video Editing Studio</h2>
            <p>
              We are a passionate team of professional video editors dedicated to bringing 
              your vision to life. With years of experience in the industry, we specialize 
              in creating compelling visual stories that captivate audiences and deliver 
              powerful messages.
            </p>
            <p>
              Our studio combines technical expertise with creative innovation to produce 
              high-quality video content for businesses, content creators, and individuals 
              alike. From corporate videos to wedding films, we handle projects of all 
              sizes with precision and care.
            </p>
          </div>
        </section>

        <section className="about-values">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every project receives our full attention and expertise.</p>
            </div>
            <div className="value-card">
              <h3>Creative Excellence</h3>
              <p>We push creative boundaries to deliver unique and memorable video content.</p>
            </div>
            <div className="value-card">
              <h3>Client Focused</h3>
              <p>Your satisfaction is our priority. We work closely with you to achieve your vision.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We stay updated with the latest tools and techniques in video editing.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Doe</h3>
              <p className="member-role">Lead Editor</p>
              <p className="member-bio">10+ years of experience in professional video editing</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Jane Smith</h3>
              <p className="member-role">Creative Director</p>
              <p className="member-bio">Expert in storytelling and visual narrative</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍🎨</div>
              <h3>Mike Johnson</h3>
              <p className="member-role">Color Grading Specialist</p>
              <p className="member-bio">Master of color correction and cinematic looks</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
