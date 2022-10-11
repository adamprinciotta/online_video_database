import React, { useState } from 'react';
import CharDropdown from './CharDropdown';
import './Submit.css'
import emailjs from '@emailjs/browser';
import { Application, DatePicker } from "react-rainbow-components";
import axios from 'axios';

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

    const [fullDate, setFullDate] = useState('')

    function onChange(date){
        setDate(date)
        //sets the date in the format which will be useful for the database
        setFullDate(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate())
    }

    
    const [EventName, SetEventName] = useState('')

    const EventNameChange = event =>{
      SetEventName(event.target.value)
    }

    const [Link, SetLink] = useState('')

    const LinkChange = event =>{
      SetLink(event.target.value)
    }

    const themes = {
      dark: {
          rainbow: {
              palette: {
                  mainBackground: '#212121',
              },
           },
      },
    };

    // function Email(){
    //   console.log("CLICKED")

    //   const emailData = {
    //     method: 'GET',
    //     url: 'http://localhost:8000/email',
    //     //params: {Player1: "", P1P: "Any", P1M: "Any", P1A: "Any", P2P:"Any", P2M:"Any", P2A:"Any", Player2:"", TO1: false, TO2: false}
    //     params: {emailMessage: "Testing Email Message"}
    //     //params: {Player1, P1P, P1M, P1A, P2P, P2M, P2A, Player2, EventName, Link, VODDate}
    //   }

    // axios.request("email").then((response) => {
    //   console.log("Requested")
    //   // console.log("JUST SET DATA ARRAY = " + dataArray)
    //   // setData(response.data)
    //   // console.log("JUST SET SET DATA = " + dataTest)
    //   //testingData()
      
    //   }).catch((error)=>{
    //       console.error(error)
    //   })
    // }

    function Email(){
      console.log("CLICKED")
      
      //Makes sure they enter player names
      if(Player1 === ''|| Player2 === ''){
        alert('Please enter player names')
      }
      //Makes sure they enter a link
      else if(Link === ''){
        alert('Please enter link to VOD')
      }
      //Makes sure they enter the event name
      else if(EventName === ''){
        alert('Please enter the event name. Causals is acceptable if it was not in a tournament')
      }
      //Makes sure they enter every character
      else if(p1selectedchar1 === 'Any' || p1selectedchar2 === 'Any' || p1selectedchar3 === 'Any' || p2selectedchar1 === 'Any' || p2selectedchar2 === 'Any' || p2selectedchar3 === 'Any'){
        alert('Any is not acceptable in character slots here')
      }
      //If they've filled every category then the email can send
      else{
        //Message for the email, tried to format it to the database format as much as possible for copy pasting after double checking,
        //though the date will need to be adjusted if they are not double digit dates
        var data = [
          {
            message: "INSERT INTO `sg_vod_database`.`vod_data` (`Player1`, `P1P`, `P1M`, `P1A`, `P2P`, `P2M`, `P2A`, `Player2`, `EventName`, `Link`, `VODDate`) VALUES ('" 
            + Player1 + '", "' + p1selectedchar1 + '", "'+ p1selectedchar2 + '", "' + p1selectedchar3 + '", "'
            + p2selectedchar1 + '", "' + p2selectedchar2 + '", "' + p2selectedchar3 + '", "' + Player2 + '", "' 
            + EventName + '", "' + Link + '", ' + fullDate + "'" + ');'
          }
        ]

  
        // fetch('http://localhost:8000/',{
        fetch('https://onemoreonce.netlify.app/',{
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(data)
        }).then(()=>{
          alert('Successful Submission')
          console.log("Email sent")
        })

        //resets the submission data when they successfully submit
        p1setSelected1("Any")
        p1setSelectedPic1(Asterisk)
        p1setSelected2("Any")
        p1setSelectedPic2(Asterisk)
        p1setSelected3("Any")
        p1setSelectedPic3(Asterisk)
        p2setSelected1("Any")
        p2setSelectedPic1(Asterisk)
        p2setSelected2("Any")
        p2setSelectedPic2(Asterisk)
        p2setSelected3("Any")
        p2setSelectedPic3(Asterisk)
        Player1setName("")
        Player2setName("")
        SetEventName("")
        SetLink("")
      }

     
      
    }




    return(
        <>
        {/* <header>
          <nav className="main-nav">
            <ul>
              <li><a href="submission.html">Submit VODs</a></li>
              <li><a href="about.html">About/Contact</a></li>
            </ul>
          </nav>
          <div className="header1">One More Once</div>
        </header> */}
  
  
      <div className="mainBG-Submit">
          <div className="dateAndEvent">
              <div className="date">
                <div className="dateLabel">Date of VOD</div>
                {/* <Application theme = {themes.dark}> */}
                  <DatePicker id="datePicker" onChange={onChange} value ={date} formatStyle='medium'/>
                {/* </Application> */}
              </div>
              <div className="link">
                <div className="linkLabel">Link to VOD</div>
                <input className="linkInput" type="text" label="Event" placeholder="Youtube/Twitch Link" value = {Link} onChange = {LinkChange}></input>
                {/* <input className="linkInput" type="text" label="Event" placeholder="Youtube/Twitch Link"></input> */}
              </div>
              <div className="event">
                <div className="eventLabel">Event</div>
                <input type="text" value = {EventName} onChange = {EventNameChange} className="eventInput" label="Event" placeholder="Casuals"></input>
                {/* <input className="eventInput" type="text" label="Event" placeholder="Casuals"></input> */}
              </div>
            </div>
          {/* <div className="date">
              <DatePicker id="datePicker"  onChange={onChange} value ={date} label='Date of VOD' formatStyle='medium'/>
          </div> */}
          {/* <DatePicker onChange={onChange} value={date}/> */}
          {/* <DayPickerInput onDayChange={onChange}/> */}
          {/* <LocalizationProvider dateAdapter = {AdapterDateFns}><DatePicker/></LocalizationProvider> */}
          <div className="teamsContainer">
          <div className='breaker'></div>
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
    
            <img className='SGImg' src={Logo} height = "250px" width = "375px"></img>
            <div className='breaker'><br></br></div>
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
          
          <div className = "submitCenter">
          <br></br>
              <button type="button" onClick={() => {Email()}} className = "submitButton" >Submit</button>
        </div>
        </div>
        
      </>
    )
}

export default Submit