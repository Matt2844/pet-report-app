import React from 'react'
import './About.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function About () {

  return (
    <div>
      <section className="about-intro">
        <div className="about-intro-text" style={{
          backgroundImage: `url("/images/pr-pro-abstract-background.jpg")`
        }}>
          <div className="text-container">
            <h4>Generate pet report cards for pet owners.</h4>
            <p>Establish trust with clients by adding a level of professionalism.</p>
          </div>
          <p className="watch-demo-text">Watch The Demo<div><ArrowDownwardIcon /></div></p>
        </div>
        <img className="about-intro-photo" src="/images/pr-pro-about-cat.jpg" />
      </section>
      <section className="learn-more">
        <iframe width="850" height="550" src="https://www.youtube.com/embed/lmPR5wxR7No" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </section>
    </div>
  )
}