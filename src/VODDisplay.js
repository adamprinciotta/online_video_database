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


    useEffect(() => {
        const databaseData = {
            method: 'GET',
            url: 'http://localhost:8000/data'
        }

        axios.request(databaseData).then((response) => {
            
            setDataArray(response.data);
            dataArray.map((row) => {
            console.log(row.P1A)
            
            })
            console.log(response.data)
            
        }).catch((error)=>{
            console.error(error)
        })
    }, [])





    const dataP1A = dataArray.map(info => {
    
    var dateParts = info.VODDate.split("-");
    var dateYear = dateParts[2].substring(0, 2) + "/" + dateParts[1] + "/" + dateParts[0];   
    
    return(<tr>
        <td class="tbl-hdr">{info.Player1}</td>
        <td class="tbl-hdr" valign='center'>
            {info.P1P}&nbsp;&nbsp;<img class="img" src ={getImage(info.P1P)} height = "35"/><br/>
            {info.P1M}&nbsp;&nbsp;<img class="img" src={getImage(info.P1M)} height = "35"/><br/>
            {info.P1A}&nbsp;&nbsp;<img class="img" src={getImage(info.P1A)} height = "35"/>
        </td>
        <td class="tbl-hdr">
            <img class="img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}<br/>
            <img class="img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}<br/>
            <img class="img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}
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
    })



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
                    {dataP1A}
                    
                </table>
            </div>
        </div>
        </>
    );
}


export default VODDisplay