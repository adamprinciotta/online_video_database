import React, { useState } from 'react';
import CharDropdown from './CharDropdown';
import './Submit.css'


import { DatePicker } from "react-rainbow-components";

// import DatePicker from 'react-date-picker';

// import DayPickerInput from "react-day-picker/DayPickerInput";
// import "react-day-picker/lib/style.css";

// import {LocalizationProvider} from '@mui/lab'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'

import Asterisk from "./SG pics/Asterisk.png";
import Annie from './SG pics/Annie.jpg';
import Any from './SG pics/Asterisk.png';
import Beowulf from './SG pics/Beowulf.jpg';
import BigBand from './SG pics/Big Band.jpg';
import Cerebella from './SG pics/Cerebella.jpg';
import Double from './SG pics/Double.jpg';
import Eliza from './SG pics/Eliza.jpg';
import Filia from './SG pics/Filia.jpg';
import Fukua from './SG pics/Fukua.jpg';
import MsFortune from './SG pics/Ms Fortune.jpg';
import None from './SG pics/None.png';
import Parasoul from './SG pics/Parasoul.jpg';
import Painwheel from './SG pics/Painwheel.jpg';
import Peacock from './SG pics/Peacock.jpg';
import QuestionMark from './SG pics/Question mark.png';
import RoboFortune from './SG pics/Robo Fortune.jpg';
import Squigly from './SG pics/Squigly.jpg';
import Umbrella from './SG pics/Umbrella.jpg';
import Valentine from './SG pics/Valentine.jpg';
import BlackDahlia from './SG pics/Black Dahlia.jpg';
import Logo from './SG pics/SGLogo.png'

function Submit() {

    const [p1selectedchar1, p1setSelected1] = useState("Any")
    const [p1selectedPic1, p1setSelectedPic1] = useState(Asterisk)
  
    const [p1selectedchar2, p1setSelected2] = useState("Any")
    const [p1selectedPic2, p1setSelectedPic2] = useState(Asterisk)
  
    const [p1selectedchar3, p1setSelected3] = useState("Any")
    const [p1selectedPic3, p1setSelectedPic3] = useState(Asterisk)
  
    const [p2selectedchar1, p2setSelected1] = useState("Any")
    const [p2selectedPic1, p2setSelectedPic1] = useState(Asterisk)
  
    const [p2selectedchar2, p2setSelected2] = useState("Any")
    const [p2selectedPic2, p2setSelectedPic2] = useState(Asterisk)
  
    const [p2selectedchar3, p2setSelected3] = useState("Any")
    const [p2selectedPic3, p2setSelectedPic3] = useState(Asterisk)
  
  
    const [Player1, Player1setName] = useState('')
    const [Player2, Player2setName] = useState('')

    const Player1Change = event =>{
        Player1setName(event.target.value)
      }
    
      const Player2Change = event =>{
        Player2setName(event.target.value)
      }

    const [date, setDate] = useState(new Date())

    function onChange(date){
        setDate(date)
    }

    return(
        <><body>
        <header>
          <nav className="main-nav">
            <ul>
              <li><a href="submission.html">Submit VODs</a></li>
              <li><a href="about.html">About/Contact</a></li>
            </ul>
          </nav>
          <div className="header1">One More Once</div>
        </header>
      </body>
  
  
      <div className="mainBG">
        <div className="date">
            <DatePicker id="datePicker"  onChange={onChange} value ={date} label='Date of VOD' formatStyle='medium'/>
        </div>
        {/* <DatePicker onChange={onChange} value={date}/> */}
        {/* <DayPickerInput onDayChange={onChange}/> */}
        {/* <LocalizationProvider dateAdapter = {AdapterDateFns}><DatePicker/></LocalizationProvider> */}
        <div className="teamsContainer">
          <div className="p1Team">
            <div className = "teamSelect">Select Team 1</div>
            <br></br>
            <form>
              <div className ="playerName">
                <label>Player 1 Name
                <input type="text" value = {Player1} onChange = {Player1Change} className = "name"></input>
                </label>
              </div>
            </form>
            <br></br>
            <div className='teamBtn'>{/* Team 1 dropdown menus have the state variables passed through as props */}
              <CharDropdown selected={p1selectedchar1} setSelected={p1setSelected1} selectedPic = {p1selectedPic1} setSelectedPic={p1setSelectedPic1}/>
              <CharDropdown selected={p1selectedchar2} setSelected={p1setSelected2} selectedPic = {p1selectedPic2} setSelectedPic={p1setSelectedPic2}/>
              <CharDropdown selected={p1selectedchar3} setSelected={p1setSelected3} selectedPic = {p1selectedPic3} setSelectedPic={p1setSelectedPic3}/>
            </div>
          </div>
  
          <img src={Logo} height = "250px" width = "375px"></img>
  
          <div className="p2Team">
            <div className = "teamSelect">Select Team 2</div>
            <br></br>
            <form>
              <div className ="playerName">
                <label>Player 2 Name
                <input type="text" value = {Player2} onChange = {Player2Change} name = "name"></input>
                </label>
              </div>
            </form>
            <br></br>
            <div className='teamBtn'>{/* Team 2 dropdown menus have the state variables passed through as props */}
            <CharDropdown selected={p2selectedchar1} setSelected={p2setSelected1} selectedPic = {p2selectedPic1} setSelectedPic={p2setSelectedPic1}/>
            <CharDropdown selected={p2selectedchar2} setSelected={p2setSelected2} selectedPic = {p2selectedPic2} setSelectedPic={p2setSelectedPic2}/>
            <CharDropdown selected={p2selectedchar3} setSelected={p2setSelected3} selectedPic = {p2selectedPic3} setSelectedPic={p2setSelectedPic3}/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Submit