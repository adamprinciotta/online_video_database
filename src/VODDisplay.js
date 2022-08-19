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
        
    
    return(<tr>
        <td class="tbl-hdr">{info.Player1}</td>
        <td class="tbl-hdr" valign='center'>
            {info.P1P}&nbsp;&nbsp;<img src ={props.selectedPic1} height = "25"/><br/>
            {info.P1M}&nbsp;&nbsp;<img src={props.selectedPic2} height = "25"/><br/>
            {info.P1A}&nbsp;&nbsp;<img src={props.selectedPic3} height = "25"/>
        </td>
        <td class="tbl-hdr">
            <img src={info.P2P} height = "25"/>&nbsp;&nbsp;{props.selected4}<br/>
            <img src={info.P2M} height = "25"/>&nbsp;&nbsp;{props.selected5}<br/>
            <img src={info.P2A} height = "25"/>&nbsp;&nbsp;{props.selected6}
        </td>
        <td class="tbl-hdr">{info.Player2}</td>
        <td class="tbl-hdr">{info.EventName} {dateParts} <a href={info.Link} target="_blank">Link</a></td>
    </tr>)
    })

    return(
        <>
        {dataP1A}
        
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
                    <tr>
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
                    </tr>

                    
                </table>
                <div>
                    <div>Hello
                        {
                            dataArray.map((row) => {
                            <div>{row.P1A}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default VODDisplay