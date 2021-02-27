import React from 'react'
import './About.css'

export default function About () {

  return (
    <div>
      <h3>About Pet Report Pro</h3>
      <section className="about-intro">
        <div className="about-intro-text" style={{
          backgroundImage: `url("/images/pr-pro-abstract-background.jpg")`
        }}>
          <h4>Gen pet report cards for pet owners</h4>
          <p>Establish trust</p>
        </div>
        <div className="about-intro-photo" style={{
          backgroundImage: `url("/images/pr-pro-about-cat.jpg")`
        }}>cat photo</div>
      </section>
      <p>Watch The Demo</p>
    </div>
  )
}