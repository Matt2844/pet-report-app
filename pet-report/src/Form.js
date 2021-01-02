import React, { useState } from 'react'



export default function Form () {
  const [companyName, setCompanyName] = useState('Company Name');
  const [petName, setPetName] = useState('Pet');
  const [date, setDate] = useState('Date(s)');
  const [walks, setWalks] = useState('');
  const [outsideTime, setOutsideTime] = useState('');
  const [appetite, setAppetite] = useState('Ate Everything');
  const [sociability, setSociability] = useState('Very Sociable');
  const [cooperation, setCooperation] = useState('Very Cooperative');
  const [grade, setGrade] = useState('A+');

  return (

    <div className="form-container">
      <div className="form-preview">
        <h3>{companyName}</h3>
        <div className="forms">
          <p className="form-pet-name">{petName}'s report card for the period of <br />{date}</p>
          <div className="report-grid">
            <hr />
            <div className="report-walks">Total Number of Walks:<span>{walks}</span>
              <hr />
            </div>
            <div className="report-outside">Estimated Time Outside Per Day:<span>{outsideTime}</span>
              <hr />
            </div>
            <div className="report-appetite">Appetite:<span>{appetite}</span>
              <hr />
            </div>
            <div className="report-sociability">Sociability:<span>{sociability}</span>
              <hr /></div>
            <div className="report-cooperation">Cooperation:<span>{cooperation}</span>
              <hr />
            </div>
            <div className="report-grade">Overall Grade:<span>{grade}</span><hr /></div>
          </div>
        </div>
      </div>



      <div className="edit-form">

        <div className="inputs">

          <div className="input-container">
            <label>Company Name:</label><br />
            <input className="company-name" onChange={event => setCompanyName(event.target.value)} type="text" placeholder="ex. Ford Dog Walking Inc."></input><button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Pet Name:</label><br />
            <input className="pet-name" onChange={event => setPetName(event.target.value)} type="text" placeholder="ex. Spot"></input><button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Date(s):</label><br />
            <input className="date" onChange={event => setDate(event.target.value)} type="text" placeholder="ex. Dec 5-10 or just 'Dec 5'"></input><button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Total Walks:</label><br />
            <input className="total-walks" onChange={event => setWalks(event.target.value)} type="text" placeholder="ex. 2"></input><button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Est. Time Outside Per Day:</label><br />
            <input className="time-outside-day" onChange={event => setOutsideTime(event.target.value)} type="text" placeholder="ex. 60 min"></input><button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Appetite:</label><br />
            <select className="appetite" onChange={event => setAppetite(event.target.value)}>
              <option value="Ate Everything" selected>Ate Everything</option>
              <option value="Ate Almost Everything">Ate Almost Everything</option>
              <option value="Some Issues with Appetite">Some Issues with Appetite</option>
              <option value="Barely Ate">Barely Ate</option>
            </select>
            <button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Sociability:</label><br />
            <select className="sociability" onChange={event => setSociability(event.target.value)}>
              <option value="Very Sociable" selected>Very Sociable</option>
              <option value="Sociable">Sociable</option>
              <option value="Lone Wolf">Lone Wolf</option>
            </select>
            <button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label>Cooperation:</label><br />
            <select className="cooperation" onChange={event => setCooperation(event.target.value)}>
              <option value="Very Cooperative" selected>Very Cooperative</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Fussy">Fussy</option>
            </select>
            <button>Hide</button><button>Show</button><br />
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
            <button>Hide</button><button>Show</button><br />
          </div>

          <div className="input-container">
            <label for="w3review">Teachers Notes:</label>
            <textarea className="teachers-notes" rows="4" cols="50">
              (pet name) was a lot of fun to look after!
          </textarea><br />
          </div>

        </div>
      </div>

    </div >

  )
}