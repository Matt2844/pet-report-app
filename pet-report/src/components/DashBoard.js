import React, { useState } from 'react'

import jsPdf from "jspdf";
import domtoimage from 'dom-to-image'

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import EmailIcon from '@material-ui/icons/Email'
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';



export default function DashBoard () {
  /* Theme State */
  const [selectTheme, setSelectTheme] = useState(true)
  const [basicTheme, setBasicTheme] = useState(false)
  const [boardingTheme, setBoardingTheme] = useState(false)
  const [petSittingTheme, setPetSittingTheme] = useState(false)
  /* Form State Set by the Form Editor */
  const [companyName, setCompanyName] = useState('[Company Name]')
  const [petName, setPetName] = useState('[Pet Name]')
  const [date, setDate] = useState('[Date Example - Date Example]')
  /* Basic Theme */
  const [walks, setWalks] = useState('')
  const [outsideTime, setOutsideTime] = useState('')
  const [appetite, setAppetite] = useState('Ate Everything')
  const [sociability, setSociability] = useState('Very Sociable')
  const [behaviour, setBehaviour] = useState('Very Well Behaved')
  const [grade, setGrade] = useState('A+')
  const [notes, setNotes] = useState('To edit notes, use the panel to the right. To save and send this report card, click the PDF icon. Then click the Email icon. Drag the PDF into the email.')
  /* Boarding Theme */
  const [gender, setGender] = useState('Their')
  const [boardingFriends, setBoardingFriends] = useState('[Pet Friends]')
  const [boardingToy, setBoardingToy] = useState('[Toy]')
  const [boardingActivity, setBoardingActivity] = useState('[Activity]')
  /* Pet Sitting Theme */
  const [treats, setTreats] = useState('')
  const [energy, setEnergy] = useState('Energetic')

  /* Form State Set by the Hide or Show Buttons */
  const [showCompany, setShowCompany] = useState(true)
  /* Basic Theme */
  const [showWalks, setShowWalks] = useState(true)
  const [showOutsideTime, setShowOutsideTime] = useState(true)
  const [showAppetite, setShowAppetite] = useState(true)
  const [showSociability, setShowSociability] = useState(true)
  const [showBehaviour, setShowBehaviour] = useState(true)
  const [showGrade, setShowGrade] = useState(true)
  const [showNotes, setShowNotes] = useState(true)
  /* Boarding Theme */
  const [showBoardingFriends, setShowBoardingFriends] = useState(true)
  const [showFavoriteToy, setShowFavoriteToy] = useState(true)
  const [showBoardingActivity, setShowBoardingActivity] = useState(true)
  /* Pet Sitting Theme */
  const [showTreats, setShowTreats] = useState(true)
  const [showEnergy, setShowEnergy] = useState(true)




  // reads what theme it is and sets state accordingly
  const findTheme = (theme) => {
    setSelectTheme(false);

    if (theme === 'Basic') {
      setBasicTheme(true)
    } else if (theme !== 'Basic') {
      setBasicTheme(false)
    }
    if (theme === 'Boarding') {
      setBoardingTheme(true)
    } else if (theme !== 'Boarding') {
      setBoardingTheme(false)
    }
    if (theme === 'Pet Sitting') {
      setPetSittingTheme(true)
    } else if (theme !== 'Pet Sitting') {
      setPetSittingTheme(false)
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
    if (font === 'Cursive') {
      document.getElementById('company-title').style.fontFamily = "cursive"
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
        <button className="save-pdf" onClick={saveToPDF}>
          <PictureAsPdfIcon />
        </button>
        <a href={`mailto:?subject=${petName}'s Report Card from ${companyName}`}>
          <button className="send-email">
            <EmailIcon />
          </button>
        </a>
        <button className="frequently-asked-questions">
          <HelpIcon />
        </button>
        <button className="settings">
          <SettingsIcon />
        </button>

      </div>

      <div className="report-card-section" id="screenshot">
        <div className="report-card-preview">
          {showCompany === true ? (
            <h2 id="company-title">{companyName}</h2>
          ) : null}
          <div className="name-and-date">{petName}'s report card for the period of<br />
            <span>{date}</span>
          </div>

          {/* SELECT A THEME, THEME */}
          {selectTheme === true ? (
            <div className="report-data-section">
              <div className="report-data-col1">
                <p className="get-started">Select a theme to get started</p>
              </div>
            </div>
          ) : null}


          {/* BASIC THEME */}
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
          ) : null}

          {/* BOARDING THEME */}
          {boardingTheme === true ? (
            <div className="report-data-section">
              <div className="report-data-col1">
                {showBoardingFriends === true ? (
                  <div className="pet-friends">{petName} liked to play with {boardingFriends}.</div>
                ) : null}
                {showFavoriteToy === true ? (
                  <div className="pet-activity">{gender} favorite toy was the {boardingToy}.</div>
                ) : null}
                {showBoardingActivity === true ? (
                  <div className="pet-excitement">{petName} really enjoyed {boardingActivity}.</div>
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
          ) : null}

          {/* PET SITTING THEME */}
          {petSittingTheme === true ? (
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
                {showTreats === true ? (
                  <div className="treats-pet-sitting">Treats:<span>{treats}</span></div>
                ) : null}
                {showEnergy === true ? (
                  <div className="energy-level">Energy Level:<span>{energy}</span></div>
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
          ) : null}

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

          {basicTheme === true ? (

            <section>
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
                  <option value="Kept to Themselves">Kept to Themselves</option>
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
            </section>

          ) : null}

          {boardingTheme === true ? (

            <section>
              <div className="input-container">
                <label>Gender:</label>
                <select className="pet-gender clean-label" onChange={event => setGender(event.target.value)}>
                  <option value="His">Male</option>
                  <option value="Her">Female</option>
                  <option value="Their" selected>Select</option>
                </select>
              </div>

              <div className="input-container">
                <label>Friends:</label>
                <input className="friends" onChange={event => setBoardingFriends(event.target.value)} type="text"></input>
                <button onClick={() => setShowBoardingFriends(!showBoardingFriends)}>{showBoardingFriends ? "x" : "show"} </button>
              </div>

              <div className="input-container">
                <label>Favority Toy:</label>
                <input className="favorite-toy" onChange={event => setBoardingToy(event.target.value)} type="text"></input>
                <button onClick={() => setShowFavoriteToy(!showFavoriteToy)}>{showFavoriteToy ? "x" : "show"} </button>
              </div>

              <div className="input-container">
                <label>Favorite Activity:</label>
                <select className="pet-boarding-activity clean-label" onChange={event => setBoardingActivity(event.target.value)}>
                  <option value="[Select an Activity]" selected>Select</option>
                  <option value="playing with staff">Playing w Staff</option>
                  <option value="playing outside">Playing Outside</option>
                  <option value="playing with others">Playing w Others</option>
                  <option value="nap time">Nap Time</option>
                  <option value="meal time">Meal Time</option>
                  <option value="playing fetch">Playing Fetch</option>
                  <option value="playing Tug-O-War">Playing Tug-O-War</option>
                </select>
                <button onClick={() => setShowBoardingActivity(!setShowBoardingActivity)}>{showBoardingActivity ? "x" : "show"} </button>
              </div>

            </section>

          ) : null}

          {petSittingTheme === true ? (

            <section>
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
                <label className="treats-label">Treats:</label>
                <input className="treats-text" onChange={event => setTreats(event.target.value)} type="text">
                </input><button onClick={() => setShowTreats(!showTreats)}>{showTreats ? "x" : "show"}</button>
              </div>

              <div className="input-container">
                <label>Energy Level:</label><br />
                <select className="energy-level" onChange={event => setEnergy(event.target.value)}>
                  <option value="Very Energetic">Very Energetic</option>
                  <option value="Energetic" selected>Energetic</option>
                  <option value="Normal">Normal</option>
                  <option value="Calm">Calm</option>
                  <option value="Sleepy">Sleepy</option>
                  <option value="Very Sleepy">Very Sleepy</option>
                </select>
                <button onClick={() => setShowEnergy(!showEnergy)}>{showEnergy ? "x" : "show"}</button>
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

            </section>) : null}

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
            <input className="company-name" onChange={event => setCompanyName(event.target.value)} type="text"></input><button onClick={() => setShowCompany(!showCompany)}>{showCompany ? "x" : "show"}</button><br />
          </div>

          <div className="input-container">
            <label>Pet Name:</label><br />
            <input className="pet-name" onChange={event => setPetName(event.target.value)} type="text" ></input><span className="name-required">Required</span>
          </div>

          <div className="input-container">
            <label>Date(s):</label><br />
            <input className="date" onChange={event => setDate(event.target.value)} type="text" ></input><span className="date-required">Required</span>
          </div>

          <div className="input-container">
            <label className="company-font">Heading:</label>
            <select className="clean-label" onChange={event => findCompanyFont(event.target.value)}>
              <option value="Sans Serif" selected>Sans Serif</option>
              <option value="Candara">Candara</option>
              <option value="Copperplate">Copperplate</option>
              <option value="Didot">Didot</option>
              <option value="Cursive">Cursive</option>
            </select>
          </div>

          <div className="input-container">
            <label>Body:</label>
            <select className="report-font clean-label" onChange={event => findFont(event.target.value)}>
              <option value="Sans Serif" selected>Sans Serif</option>
              <option value="Candara">Candara</option>
              <option value="Copperplate">Copperplate</option>
              <option value="Didot">Didot</option>
            </select>
          </div>



        </div>

      </div>

    </div >
  )
}