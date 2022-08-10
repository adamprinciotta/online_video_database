import React, { useState, useEffect, useRef } from 'react';
import './VODDisplay.css'

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

function VODDisplay(props) {





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
            </div>
        </div>
        </>
    );
}


export default VODDisplay