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
import { Search } from '@syncfusion/ej2-react-dropdowns';

function VODDisplay(props) {

    const [dataArray, setDataArray] = useState([]);

    const [search, setSearch] = useState([]) 

    //Gets everything from database on load then store it in the dataArray state
    useEffect(() => {
        // console.log("requested")
        const databaseData = {
            method: 'GET',
            url: 'http://localhost:8000/data',
            //params: {Player1: "", P1P: "Any", P1M: "Any", P1A: "Any", P2P:"Any", P2M:"Any", P2A:"Any", Player2:"", TO1: false, TO2: false}
            params: {Player1: props.Player1, P1P: props.P1P, P1M: props.P1M, P1A: props.P1A, P2P: props.P2P, P2M: props.P2M, P2A: props.P2A, Player2: props.Player2, TO1: props.TO1, TO2: props.TO2}
            //params: {Player1, P1P, P1M, P1A, P2P, P2M, P2A, Player2, EventName, Link, VODDate}
        }

        axios.request(databaseData).then((response) => {
            
            setDataArray(response.data);
            console.log(response.data)
            
        }).catch((error)=>{
            console.error(error)
        })

        console.log("P1P = " + props.P1P)
        console.log("P1M = " + props.P1M)
        console.log("P1A = " + props.P1A)
        console.log("P2P = " + props.P2P)
        console.log("P2M = " + props.P2M)
        console.log("P2A = " + props.P2A)


        // console.log("P1P = " + props.p1selected1)
        // console.log("P1M = " + props.p1selected2)
        // console.log("P1A = " + props.p1selected3)
        // console.log("P2P = " + props.p2selected1)
        // console.log("P2M = " + props.p2selected2)
        // console.log("P2A = " + props.p2selected3)
    }, [search])

    

    //Maps the array and then displays the data from the database
    const dataP1A = dataArray.map(info => {
    //Splits date time object into parts
        var dateParts = info.VODDate.split("-");

        //Changes format into MM/DD/YYYY
        var dateYear =  dateParts[1] + "/" + dateParts[2].substring(0, 2) + "/" + dateParts[0];   

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

    //Checks if the character is None, returns false so it doesn't display that space
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
            <button type="button" onClick={() => {setSearch(search + 1)}} className = "submitButton" >Search</button>
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

                    {/* Displays all data fetched */}
                    {dataP1A} 
                    
                </table>
            </div>
        </div>
        </>
    );
}


export default VODDisplay