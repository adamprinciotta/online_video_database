import React, { useState } from 'react';
import CharDropdown from './CharDropdown';
import './Submit.css'
//import emailjs from '@emailjs/browser';
import { DatePicker } from "react-rainbow-components";
import axios from 'axios';

import Asterisk from "./SG pics/Asterisk.png";
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

    function Email(){  
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
        var emailData = "INSERT INTO `sg_vod_database`.`vod_data` (`Player1`, `P1P`, `P1M`, `P1A`, `P2P`, `P2M`, `P2A`, `Player2`, `EventName`, `Link`, `VODDate`) VALUES (\"" 
            + Player1 + '", "' + p1selectedchar1 + '", "'+ p1selectedchar2 + '", "' + p1selectedchar3 + '", "'
            + p2selectedchar1 + '", "' + p2selectedchar2 + '", "' + p2selectedchar3 + '", "' + Player2 + '", "' 
            + EventName + '", "' + Link + '", \'' + fullDate + "'" + ');'
    

        axios.post('/email', {
          emailData: emailData
        })
        .then(()=>{
          alert('Successful Submission')
        })
        .catch(()=>{
          alert('Failed Submission')
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
      <div className="mainBG-Submit">
          <div className="dateAndEvent">
              <div className="date">
                <div className="dateLabel">Date of VOD</div>
                  <DatePicker id="datePicker" onChange={onChange} value ={date} formatStyle='medium'/>
              </div>
              <div className="link">
                <div className="linkLabel">Link to VOD</div>
                <input className="linkInput" type="text" label="Event" placeholder="Youtube/Twitch Link" value = {Link} onChange = {LinkChange}></input>
              </div>
              <div className="event">
                <div className="eventLabel">Event</div>
                <input type="text" value = {EventName} onChange = {EventNameChange} className="eventInput" label="Event" placeholder="Casuals"></input>
              </div>
            </div>
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