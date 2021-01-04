import React, { useState } from 'react'
import ribbon from './images/ribbon.png'

import jsPdf from "jspdf";
import domtoimage from 'dom-to-image'
import "./App.css";


export default function Form () {

  // Setting the state for the preview form. 
  const [companyName, setCompanyName] = useState('Company Name');
  const [petName, setPetName] = useState('Pet');
  const [date, setDate] = useState('Date(s)');
  const [walks, setWalks] = useState('');
  const [outsideTime, setOutsideTime] = useState('');
  const [appetite, setAppetite] = useState('Ate Everything');
  const [sociability, setSociability] = useState('Very Sociable');
  const [cooperation, setCooperation] = useState('Very Cooperative');
  const [grade, setGrade] = useState('A+');
  const [notes, setNotes] = useState('')

  // Setting the state for the hide and show buttons. 
  const [showCompany, setShowCompany] = useState(true);
  const [showWalks, setShowWalks] = useState(true);
  const [showOutside, setShowOutside] = useState(true);
  const [showAppetite, setShowAppetite] = useState(true);
  const [showSociability, setShowSociability] = useState(true);
  const [showCooperation, setShowCooperation] = useState(true);
  const [showGrade, setShowGrade] = useState(true);
  const [showCaregiverNotes, setShowCareGiverNotes] = useState(true);

  // Screenshot
  const takeScreenshot = () => {

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

    <div className="form-container">
      <div>
        <div className="form-wrapper" id="screenshot">
          <div className="form-preview" >

            {showCompany === true ? (
              <h3>{companyName}</h3>
            ) : (
                <img className="report-ribbon-title" alt="ribbon" src={ribbon} />
              )}
            <div className="forms">
              <p className="form-pet-name" >{petName}'s report card for the period of <br />{date}</p>
              <div className="report-grid">
                <hr />

                {showWalks === true ? (
                  <div className="report-walks">Total Number of Walks:<span>{walks}</span>
                    <hr />
                  </div>
                ) : null}

                {showOutside === true ? (
                  <div className="report-outside">Estimated Time Outside Per Day:<span>{outsideTime}</span>
                    <hr />
                  </div>
                ) : null}

                {showAppetite === true ? (
                  <div className="report-appetite">Appetite:<span>{appetite}</span>
                    <hr />
                  </div>
                ) : null}

                {showSociability === true ? (
                  <div className="report-sociability">Sociability:<span>{sociability}</span>
                    <hr /></div>
                ) : null}

                {showCooperation === true ? (
                  <div className="report-cooperation">Cooperation:<span>{cooperation}</span>
                    <hr />
                  </div>
                ) : null}

                {showGrade === true ? (
                  <div className="report-grade">Overall Grade:<span>{grade}</span>
                    <hr />
                  </div>
                ) : null}

                {showCaregiverNotes === true ? (
                  <div className="report-notes">
                    <div className="report-notes-title">Caregiver Notes:</div>
                    <textarea className="report-notes-input" rows="4" cols="52" value={notes}>{notes}</textarea>
                  </div>
                ) : null}

              </div>
            </div>
          </div>
        </div>
        <button className="screenshot-button" onClick={takeScreenshot} href="">Auto Screenshot to PDF</button><br />
        <button className="screenshot-manual">Manual Screenshot (Higer Quality)</button>
      </div>




      <div className="edit-form">

        <div className="inputs">

          <div className="input-container">
            <label>Company Name:</label><br />
            <input className="company-name" onChange={event => setCompanyName(event.target.value)} type="text" placeholder="ex. Ford Dog Walking Inc."></input><button onClick={() => setShowCompany(!showCompany)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Pet Name:</label><br />
            <input className="pet-name" onChange={event => setPetName(event.target.value)} type="text" placeholder="ex. Spot"></input><span className="name-required">Required</span><br />
          </div>

          <div className="input-container">
            <label>Date(s):</label><br />
            <input className="date" onChange={event => setDate(event.target.value)} type="text" placeholder="ex. Dec 5-10 or just 'Dec 5'"></input><span className="date-required">Required</span><br />
          </div>

          <div className="input-container">
            <label>Total Walks:</label><br />
            <input className="total-walks" onChange={event => setWalks(event.target.value)} type="text" placeholder="ex. 2"></input><button onClick={() => setShowWalks(!showWalks)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Est. Time Outside Per Day:</label><br />
            <input className="time-outside-day" onChange={event => setOutsideTime(event.target.value)} type="text" placeholder="ex. 60 min"></input><button onClick={() => setShowOutside(!showOutside)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Appetite:</label><br />
            <select className="appetite" onChange={event => setAppetite(event.target.value)}>
              <option value="Ate Everything" selected>Ate Everything</option>
              <option value="Ate Almost Everything">Ate Almost Everything</option>
              <option value="Some Issues with Appetite">Some Issues with Appetite</option>
              <option value="Barely Ate">Barely Ate</option>
            </select>
            <button onClick={() => setShowAppetite(!showAppetite)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Sociability:</label><br />
            <select className="sociability" onChange={event => setSociability(event.target.value)}>
              <option value="Very Sociable" selected>Very Sociable</option>
              <option value="Sociable">Sociable</option>
              <option value="Lone Wolf">Lone Wolf</option>
            </select>
            <button onClick={() => setShowSociability(!showSociability)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Cooperation:</label><br />
            <select className="cooperation" onChange={event => setCooperation(event.target.value)}>
              <option value="Very Cooperative" selected>Very Cooperative</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Fussy">Fussy</option>
            </select>
            <button onClick={() => setShowCooperation(!showCooperation)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Overall Grade:</label><br />
            <select className="grade" onChange={event => setGrade(event.target.value)}>
              <option value="A+" selected>A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
            <button onClick={() => setShowGrade(!showGrade)}>Show / Hide</button><br />
          </div>

          <div className="input-container">
            <label>Caregiver Notes:</label><button onClick={() => setShowCareGiverNotes(!showCaregiverNotes)}>Show / Hide</button>
            <textarea className="teachers-notes" rows="4" cols="50" onChange={event => setNotes(event.target.value)} >

            </textarea><br />
          </div>

        </div>
      </div>

    </div >

  )
}