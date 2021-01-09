import React, { useState } from 'react'

import jsPdf from "jspdf";
import domtoimage from 'dom-to-image'

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';



export default function DashBoard () {
  {/* Theme State */ }
  const [basicTheme, setBasicTheme] = useState(false)
  {/* Form State Set by the Form Editor */ }
  const [companyName, setCompanyName] = useState('Company Name')
  const [petName, setPetName] = useState('Example Spot')
  const [date, setDate] = useState('Date Example - Date Example')
  const [walks, setWalks] = useState('')
  const [outsideTime, setOutsideTime] = useState('')
  const [appetite, setAppetite] = useState('Ate Everything')
  const [sociability, setSociability] = useState('Very Sociable')
  const [behaviour, setBehaviour] = useState('Very Well Behaved')
  const [grade, setGrade] = useState('A+')
  const [notes, setNotes] = useState('To edit notes, use the panel to the right.')

  {/* Form State Set by the Hide or Show Buttons */ }
  const [showCompany, setShowCompany] = useState(true)
  const [showWalks, setShowWalks] = useState(true)
  const [showOutsideTime, setShowOutsideTime] = useState(true)
  const [showAppetite, setShowAppetite] = useState(true)
  const [showSociability, setShowSociability] = useState(true)
  const [showBehaviour, setShowBehaviour] = useState(true)
  const [showGrade, setShowGrade] = useState(true)
  const [showNotes, setShowNotes] = useState(true)


  // reads what theme it is and sets state accordingly
  const findTheme = (theme) => {
    if (theme === 'Basic') {
      setBasicTheme(true)
    } else if (theme !== 'Basic') {
      setBasicTheme(false)
    }
  }

  // reads what font is selected
  const findFont = (font) => {
    if (font === 'Sans Serif') {
      document.getElementById('screenshot').style.fontFamily = "sans-serif"
    }
    if (font === 'Candara') {
      document.getElementById('screenshot').style.fontFamily = "candara"
    }
    if (font === 'Copperplate') {
      document.getElementById('screenshot').style.fontFamily = "copperplate"
    }
    if (font === 'Didot') {
      document.getElementById('screenshot').style.fontFamily = "didot"
    }
  }

  // reads what font is selected for Company name
  const findCompanyFont = (font) => {
    if (font === 'Sans Serif') {
      document.getElementById('company-title').style.fontFamily = "sans-serif"
    }
    if (font === 'Candara') {
      document.getElementById('company-title').style.fontFamily = "candara"
    }
    if (font === 'Copperplate') {
      document.getElementById('company-title').style.fontFamily = "copperplate"
    }
    if (font === 'Didot') {
      document.getElementById('company-title').style.fontFamily = "didot"
    }
    if (font === 'Brush Script') {
      document.getElementById('company-title').style.fontFamily = "Brush Script"
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

      <div className="menu-left">
        <button onClick={saveToPDF}>
          <PictureAsPdfIcon />
        </button>
      </div>

      <div className="report-card-section" id="screenshot">
        <div className="report-card-preview">

          <h2 id="company-title">{companyName}</h2>
          <div className="name-and-date">{petName}'s report card for the period of<br />
            <span>{date}</span>
          </div>

          {basicTheme === true ? (
            <div className="report-data-section">
              <div className="report-data-col1">
                {showWalks === true ? (
                  <div className="number-of-walks">Number of Walks:<span>{walks}</span></div>
                ) : null}
                {showOutsideTime === true ? (
                  <div className="estimated-time-outisde">Estimated Time Outside Per Day:<span>{outsideTime}</span></div>
                ) : null}
                {showAppetite === true ? (
                  <div className="appetite">Appetite:<span>{appetite}</span></div>
                ) : null}
                {showSociability === true ? (
                  <div className="sociability">Sociability:<span>{sociability}</span></div>
                ) : null}
                {showBehaviour === true ? (
                  <div className="behaviour">Behaviour:<span>{behaviour}</span></div>
                ) : null}
                {showGrade === true ? (
                  <div className="overall-grade">Overall Grade: <span>{grade}</span></div>
                ) : null}
                {showNotes === true ? (
                  <div>
                    <div className="notes">Notes:</div>
                    <textarea className="notes-input" rows="14" cols="67" value={notes}></textarea>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (<p className="get-started">Select a theme to get started.</p>)}
        </div>
      </div>

      {/* Form Editor Section  */}

      <div className="menu-right">

        <div className="menu-col-1">

          <div className="input-container">
            <label>Theme:</label>
            <select className="clean-label" onChange={event => findTheme(event.target.value)}>
              <option value="Select" selected>Select</option>
              <option value="Basic">Basic</option>
              <option value="Boarding">Boarding</option>
              <option value="Pet Sitting">Pet Sitting</option>
              <option value="Grooming">Grooming</option>
              <option value="Walking">Walking</option>
              <option value="Training">Training</option>
            </select>
          </div>

          <div className="input-container">
            <label>Total Walks:</label>
            <input className="total-walks" onChange={event => setWalks(event.target.value)} type="text"></input>
            <button onClick={() => setShowWalks(!showWalks)}>{showWalks ? "x" : "show"} </button>
          </div>

          <div className="input-container">
            <label className="time-outside-text">Est. Time Outside Per Day:</label>
            <input className="time-outside-day" onChange={event => setOutsideTime(event.target.value)} type="text">
            </input><button onClick={() => setShowOutsideTime(!showOutsideTime)}>{showOutsideTime ? "x" : "show"}</button>
          </div>

          <div className="input-container">
            <label>Appetite:</label><br />
            <select className="appetite" onChange={event => setAppetite(event.target.value)}>
              <option value="Ate Everything" selected>Ate Everything</option>
              <option value="Ate Almost Everything">Ate Almost Everything</option>
              <option value="Some Issues with Appetite">Issues With Appetite</option>
              <option value="Barely Ate">Barely Ate</option>
            </select>
            <button onClick={() => setShowAppetite(!showAppetite)}>{showAppetite ? "x" : "show"}</button>
          </div>

          <div className="input-container">
            <label>Sociability:</label><br />
            <select className="sociability" onChange={event => setSociability(event.target.value)}>
              <option value="Very Sociable" selected>Very Sociable</option>
              <option value="Sociable">Sociable</option>
              <option value="Lone Wolf">Kept to Theml</option>
            </select>
            <button onClick={() => setShowSociability(!showSociability)}>{showSociability ? "x" : "show"}</button>
          </div>

          <div className="input-container">
            <label>Behaviour:</label><br />
            <select className="behaviour" onChange={event => setBehaviour(event.target.value)}>
              <option value="Very Cooperative" selected>Very Well Behaved</option>
              <option value="Cooperative">Well Behaved</option>
              <option value="Fussy">Fussy</option>
              <option value="Needs More Training">Needs More Training</option>
            </select>
            <button onClick={() => setShowBehaviour(!showBehaviour)}>{showBehaviour ? "x" : "show"}</button>
          </div>

          <div className="input-container">
            <label>Overall Grade:</label>
            <select className="grade clean-label" onChange={event => setGrade(event.target.value)}>
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
            <button onClick={() => setShowGrade(!showGrade)}>{showGrade ? "x" : "show"}</button><br />
          </div>

          <div className="input-container">
            <label>Notes:</label>
            <button onClick={() => setShowNotes(!showNotes)}>{showNotes ? "x" : "show"}</button>
            <textarea className="teachers-notes" rows="6" cols="19" onChange={event => setNotes(event.target.value)}>
            </textarea>
          </div>





        </div>

        <div className="menu-col-2">

          <div className="input-container">
            <label>Company Name:</label><br />
            <input className="company-name" onChange={event => setCompanyName(event.target.value)} type="text"></input><button onClick={() => setShowCompany(!showCompany)}>x</button><br />
          </div>

          <div className="input-container">
            <label>Pet Name:</label><br />
            <input className="pet-name" onChange={event => setPetName(event.target.value)} type="text" ></input><span className="name-required">Required</span><br />
          </div>

          <div className="input-container">
            <label>Date(s):</label><br />
            <input className="date" onChange={event => setDate(event.target.value)} type="text" ></input><span className="date-required">Required</span><br />
          </div>

          <div className="input-container">
            <label className="company-font">Header:</label>
            <select className="clean-label" onChange={event => findCompanyFont(event.target.value)}>
              <option value="Sans Serif" selected>Sans Serif</option>
              <option value="Candara">Candara</option>
              <option value="Copperplate">Copperplate</option>
              <option value="Didot">Didot</option>
              <option value="Brush Script">Brush Script</option>
            </select>
          </div>

          <div className="input-container">
            <label>Body:</label>
            <select className="report-font clean-label" onChange={event => findFont(event.target.value)}>
              <option value="Sans Serif" selected>Sans Serif</option>
              <option value="Candara">Candara</option>
              <option value="Copperplate">Copperplate</option>
              <option value="Didot">Didot</option>
              <option value="Perpetua">Pertetua</option>
            </select>
          </div>



        </div>

      </div>

    </div>
  )
}