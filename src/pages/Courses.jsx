import React from 'react'
import '../styles/Courses.css'

function Courses() {
  const courses = [
    {
      title: 'Video Editing Fundamentals',
      duration: '4 weeks',
      level: 'Beginner',
      description: 'Learn the basics of video editing, cutting, transitions, and basic effects',
      price: '$199'
    },
    {
      title: 'Advanced Editing Techniques',
      duration: '6 weeks',
      level: 'Intermediate',
      description: 'Master advanced editing techniques, color grading, and motion graphics',
      price: '$299'
    },
    {
      title: 'Professional Color Grading',
      duration: '3 weeks',
      level: 'Advanced',
      description: 'Deep dive into professional color grading and correction techniques',
      price: '$249'
    },
    {
      title: 'Motion Graphics & VFX',
      duration: '5 weeks',
      level: 'Intermediate',
      description: 'Create stunning motion graphics and visual effects for your videos',
      price: '$349'
    },
    {
      title: 'Cinematic Storytelling',
      duration: '4 weeks',
      level: 'All Levels',
      description: 'Learn how to tell compelling stories through video editing',
      price: '$229'
    },
    {
      title: 'Portfolio Development',
      duration: '8 weeks',
      level: 'Advanced',
      description: 'Build a professional portfolio and learn industry best practices',
      price: '$399'
    }
  ]

  return (
    <div className="courses">
      <div className="container">
        <h1 className="page-title">Video Editing Courses</h1>
        <p className="page-subtitle">
          Master the art of video editing with our comprehensive courses
        </p>
        
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-badge">{course.level}</div>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-meta">
                <span className="course-duration">⏱️ {course.duration}</span>
                <span className="course-price">{course.price}</span>
              </div>
              <p className="course-description">{course.description}</p>
              <button className="btn-enroll">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
