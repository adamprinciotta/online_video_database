import React, { useState, useEffect, useRef } from 'react';
import './VODDisplay.css'

//Importing character images
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
import axios from 'axios';
import { data } from 'jquery';

function VODDisplay(props) {

    const [dataArray, setDataArray] = useState([]);

    //Gets everything from database on load then store it in the dataArray state
    useEffect(() => {
        console.log("requested")
        const databaseData = {
            method: 'GET',
            url: 'http://localhost:8000/data',
            params: {Player1: "", P1P: "Any", P1M: "Any", P1A: "Double", P2P:"Any", P2M:"Annie", P2A:"Any", Player2:"", EventName:"Casuals", TO1: false, TO2: false}
            //params: {Player1, P1P, P1M, P1A, P2P, P2M, P2A, Player2, EventName, Link, VODDate}
        }

        axios.request(databaseData).then((response) => {
            
            setDataArray(response.data);
            console.log(response.data)
            
        }).catch((error)=>{
            console.error(error)
        })
    }, [])

    //Maps the array and then displays the data from the database
    const dataP1A = dataArray.map(info => {
    //Splits date time object into parts
        var dateParts = info.VODDate.split("-");

        //Changes format into MM/DD/YYYY
        var dateYear =  dateParts[1] + "/" + dateParts[2].substring(0, 2) + "/" + dateParts[0];   
        
        // var imgP1M = getImage(info.P1M)
        // var imgP1A = getImage(info.P1A)
        // var imgP2M = getImage(info.P2M)
        // var imgP2A = getImage(info.P2A)

        //If there is no character, set the image to null, not necessary if using these if statements
        // if(checkIfNone(info.P1M)){
        //     imgP1M = null
        // }
        // if(checkIfNone(info.P1A)){
        //     imgP1A = null
        // }
        // if(checkIfNone(info.P2M)){
        //     imgP2M = null
        // }
        // if(checkIfNone(info.P2A)){
        //     imgP2A = null
        // }

        //If/Else statements to display the teams in the right spacings
        if(!checkIfNone(info.P1A) && !checkIfNone(info.P1M) && !checkIfNone(info.P2M) && !checkIfNone(info.P2A)){
            return(<tr>
                <td class="tbl-hdr">{info.Player1}</td>
                <td class="tbl-hdr" valign='center'>
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                </td>
                <td class="tbl-hdr" valign='center'>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                </td>
                <td class="tbl-hdr">{info.Player2}</td>
                <td class="tbl-event">
                    <div>
                        {info.EventName}
                    </div>
                    <div>
                        {dateYear}
                    </div> 
                    <div>
                        <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    </div>
                </td>
            </tr>)
        }
        else if(!checkIfNone(info.P1A) && !checkIfNone(info.P1M) && checkIfNone(info.P2M) && !checkIfNone(info.P2A)){
            return(<tr>
                <td class="tbl-hdr">{info.Player1}</td>
                <td class="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                </td>
                <td class="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td class="tbl-hdr">{info.Player2}</td>
                <td class="tbl-event">
                    <div>
                        {info.EventName}
                    </div>
                    <div>
                        {dateYear}
                    </div> 
                    <div>
                        <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    </div>
                </td>
            </tr>)
        }
        else if(!checkIfNone(info.P1A) && checkIfNone(info.P1M) && checkIfNone(info.P2M) && !checkIfNone(info.P2A)){
            return(<tr>
                <td class="tbl-hdr">{info.Player1}</td>
                <td class="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>

                </td>
                <td class="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td class="tbl-hdr">{info.Player2}</td>
                <td class="tbl-event">
                    <div>
                        {info.EventName}
                    </div>
                    <div>
                        {dateYear}
                    </div> 
                    <div>
                        <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    </div>
                </td>
            </tr>)
        }
        else if(!checkIfNone(info.P1A)){
            return(<tr>
                <td class="tbl-hdr">{info.Player1}</td>
                <td class="tbl-hdr" >
                <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>

                </td>
                <td class="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}</div>
                </td>
                <td class="tbl-hdr">{info.Player2}</td>
                <td class="tbl-event">
                    <div>
                        {info.EventName}
                    </div>
                    <div>
                        {dateYear}
                    </div> 
                    <div>
                        <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    </div>
                </td>
            </tr>)
        }
        else if(!checkIfNone(info.P2A)){
            return(<tr>
                <td class="tbl-hdr">{info.Player1}</td>
                <td class="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>
                    <div className ="centerpls">{info.P1A}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1A)} height = "35"/></div>
                </td>
                <td class="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td class="tbl-hdr">{info.Player2}</td>
                <td class="tbl-event">
                    <div>
                        {info.EventName}
                    </div>
                    <div>
                        {dateYear}
                    </div> 
                    <div>
                        <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    </div>
                </td>
            </tr>)
        }
        //Only case left is a 3v3 team
        else{
            return(<tr>
                <td class="tbl-hdr">{info.Player1}</td>
                <td class="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src={getImage(info.P1M)} height = "35"/></div>
                    <div className ="centerpls">{info.P1A}&nbsp;&nbsp;<img className = "img" src={getImage(info.P1A)} height = "35"/></div>
                </td>
                <td class="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}</div>
                </td>
                <td class="tbl-hdr">{info.Player2}</td>
                <td class="tbl-event">
                    <div>
                        {info.EventName}
                    </div>
                    <div>
                        {dateYear}
                    </div> 
                    <div>
                        <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    </div>
                </td>
            </tr>)
        }
        
    })

    //Checks if the character is null, maybe change to return boolean value
    function checkIfNone(character){
        // if(character == null){
        // }
        if(character === "None"){
            return false;
        }
        else{
            return character
        }
    }

    //Returns the image for the corresponding character
    function getImage(character){
        if(character === "Annie"){
            return Annie
        }
        if(character === "Any"){
            return Any
        }
        if(character === "Beowulf"){
            return Beowulf
        }
        if(character === "Big Band"){
            return BigBand
        }
        if(character === "Cerebella"){
            return Cerebella
        }
        if(character === "Double"){
            return Double
        }
        if(character === "Eliza"){
            return Eliza
        }
        if(character === "Filia"){
            return Filia
        }
        if(character === "Fukua"){
            return Fukua
        }
        if(character === "Ms Fortune"){
            return MsFortune
        }
        if(character === "None"){
            return None
        }
        if(character === "Parasoul"){
            return Parasoul
        }
        if(character === "Painwheel"){
            return Painwheel
        }
        if(character === "Peacock"){
            return Peacock
        }
        if(character === "Robo Fortune"){
            return RoboFortune
        }
        if(character === "Squigly"){
            return Squigly
        }
        if(character === "Umbrella"){
            return Umbrella
        }
        if(character === "Valentine"){
            return Valentine
        }
        if(character === "Black Dahlia"){
            return BlackDahlia
        }
    }


    return(
        <>
        <div className = "submitCenter">
            <button type="button" className = "submitButton">Search</button>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
        <div className='mainBG'>
            <div class="backgroundColor">
                <table className = 'table'>
                    <tr> 
                        <td class="tbl-hdr">Player 1</td>
                        <td class="tbl-hdr">Player 1 Team</td>
                        <td class="tbl-hdr">Player 2 Team</td>
                        <td class="tbl-hdr">Player 2</td>
                        <td class="tbl-hdr">Event + Date + VOD</td>
                    </tr>

                    {/* Hard coded rows for testing */}
                    {/* <tr>
                        <td class="tbl-hdr">Adam</td>
                        <td class="tbl-hdr" valign='center'>
                            {props.selected}&nbsp;&nbsp;<img class="img" src={props.selectedPic} height = "25"/><br/>
                            {props.selected2}&nbsp;&nbsp;<img class="img" src={props.selectedPic2} height = "25"/><br/>
                            {props.selected3}&nbsp;&nbsp;<img class="img" src={props.selectedPic3} height = "25"/>
                        </td>
                        <td class="tbl-hdr">
                            <img class="img" src={props.selectedPic4} height = "25"/>&nbsp;&nbsp;{props.selected4}<br/>
                            <img class="img" src={props.selectedPic5} height = "25"/>&nbsp;&nbsp;{props.selected5}<br/>
                            <img class="img" src={props.selectedPic6} height = "25"/>&nbsp;&nbsp;{props.selected6}
                        </td>
                        <td class="tbl-hdr">Dahviess</td>
                        <td class="tbl-hdr">Event + Date + VOD</td>
                    </tr>
                    <tr>
                        <td class="tbl-hdr">Adam</td>
                        <td class="tbl-hdr" valign='center'>
                            {props.selected}&nbsp;&nbsp;<img src={props.selectedPic} height = "25"/><br/>
                            {props.selected2}&nbsp;&nbsp;<img src={props.selectedPic2} height = "25"/><br/>
                            {props.selected3}&nbsp;&nbsp;<img src={props.selectedPic3} height = "25"/>
                        </td>
                        <td class="tbl-hdr">
                            <img src={props.selectedPic4} height = "25"/>&nbsp;&nbsp;{props.selected4}<br/>
                            <img src={props.selectedPic5} height = "25"/>&nbsp;&nbsp;{props.selected5}<br/>
                            <img src={props.selectedPic6} height = "25"/>&nbsp;&nbsp;{props.selected6}
                        </td>
                        <td class="tbl-hdr">Dahviess</td>
                        <td class="tbl-hdr">Event + Date + VOD</td>
                    </tr> */}
                    
                    {/* Displays all data fetched */}
                    {dataP1A} 
                    
                </table>
            </div>
        </div>
        </>
    );
}


export default VODDisplay