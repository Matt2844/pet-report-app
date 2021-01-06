import React, { useState } from 'react'

import jsPdf from "jspdf";
import domtoimage from 'dom-to-image'


export default function DashBoard () {
  const [basicTheme, setBasicTheme] = useState(false)


  // reads what theme it is and sets state accordingly
  const findTheme = (theme) => {
    if (theme === 'Basic') {
      setBasicTheme(true)
    } else if (theme !== 'Basic') {
      setBasicTheme(false)
    }
  }

  // Screenshot
  const saveToPDF = () => {

    const formArea = document.getElementById('screenshot');


    domtoimage.toPng(formArea)
      .then((dataUrl) => {
        let img = new Image();
        img.src = dataUrl;

        const pdf = new jsPdf();
        pdf.addImage(dataUrl, "JPEG", 10, 10);
        pdf.save(`${new Date().toISOString()}.PR-PRO.pdf`)
      })
  };

  return (
    <div className="dashboard-wrapper">

      <div className="menu-left">menu left
      <button onClick={saveToPDF}>Save To PDF</button>
      </div>

      <div className="report-card-section" id="screenshot">
        <div className="report-card-preview">

          <h2>Company Name</h2>
          <div className="name-and-date">Spot's report card for the period of<br />
            <span>Date 1 - 10, 2020</span>
          </div>

          {basicTheme === true ? (
            <div className="report-data-section">
              <div className="report-data-col1">
                <div className="number-of-walks">Number of Walks:<span>99</span></div>
                <div className="two-walks-day">At Least Two Walks Per Day:<span>99</span></div>
                <div className="estimated-time-outisde">Estimated Time Outside Per Day:<span>60 minutes</span></div>
                <div className="appetite">Appetite:<span>Ate Everyting</span></div>
                <div className="sociability">Sociability:<span>Very Sociable</span></div>
                <div className="behaviour">Behaviour:<span>Behaved Very Well</span></div>
                <div className="overall-grade">Overall Grade: <span>A+</span></div>
                <div className="notes">Notes:</div>
                <textarea className="notes-input" rows="14" cols="67">Notes</textarea>
              </div>
            </div>
          ) : (<p className="get-started">Select a theme to get started.</p>)}
        </div>
      </div>

      <div className="menu-right">
        <div className="menu-col-1">
          <div className="input-container">
            <label>Theme:</label>
            <select className="theme" onChange={event => findTheme(event.target.value)}>
              <option value="Basic" selected>Basic</option>
              <option value="Boarding">Boarding</option>
              <option value="Pet Sitting">Pet Sitting</option>
              <option value="Grooming">Grooming</option>
              <option value="Walking">Walking</option>
              <option value="Training">Training</option>
            </select>
          </div>
        </div>

        <div className="menu-col-2">col 2</div>

      </div>
    </div >
  )
}