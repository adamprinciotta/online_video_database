
// import Multiselect from 'multiselect-react-dropdown';
import './charDropdown.css';
import './App';
//import VODDisplay from './VODDisplay';
import React, { useState, } from 'react';
//import { render } from '@testing-library/react';
//import $ from 'jquery';
//import { options } from '@mobiscroll/react';

//Importing pictures used
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
import RoboFortune from './SG pics/Robo Fortune.jpg';
import Squigly from './SG pics/Squigly.jpg';
import Umbrella from './SG pics/Umbrella.jpg';
import Valentine from './SG pics/Valentine.jpg';
import BlackDahlia from './SG pics/Black Dahlia.jpg';
import 'normalize.css';


function CharDropdown(props) {
    const[isActive, setIsActive] = useState(false);

    //Stores each character's name and picture as imported
    const options = [
                {
                    Character: 'Any',
                    src: Any
                },
                {
                    Character: 'None',
                    src: None
                },
                {
                    Character: 'Filia',
                    src: Filia
                },
                {
                    Character: 'Cerebella',
                    src: Cerebella
                },
                {
                    Character: 'Peacock',
                    src: Peacock
                },
                {
                    Character: 'Parasoul',
                    src: Parasoul
                },
                {
                    Character: 'Ms Fortune',
                    src: MsFortune
                },
                {
                    Character: 'Painwheel',
                    src: Painwheel
                },
                {
                    Character: 'Valentine',
                    src: Valentine
                },
                {
                    Character: 'Double',
                    src: Double
                },
                {
                    Character: 'Squigly',
                    src: Squigly
                },
                {
                    Character: 'Big Band',
                    src: BigBand
                },
                {
                    Character: 'Eliza',
                    src: Eliza
                },
                {
                    Character: 'Fukua',
                    src: Fukua
                },
                {
                    Character: 'Beowulf',
                    src: Beowulf
                },
                {
                    Character: 'Robo Fortune',
                    src: RoboFortune
                },
                {
                    Character: 'Annie',
                    src: Annie
                },
                {
                    Character: 'Umbrella',
                    src: Umbrella
                },
                {
                    Character: 'Black Dahlia',
                    src: BlackDahlia
                }
            ]


    return (
        <>
        <div className="div-dropdown">
            {/* When the dropdown is clicked it swaps it's state from closed to open or vice versa */}
            <a className="div-dropdown-btn" 
             onClick={(e) => {
             setIsActive(!isActive) 
            }}>
                {/* Displays the character image and name in the dropdown */}
                <img src = {props.selectedPic} width = "40" height = "40"></img>
                {props.selected}</a> 
            
            {/* If it's active/clicked on, it will display each character name and picture */}
            {/* When a character is chosen it will update the props and close the menu */}
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                            props.setSelected(option.Character) 
                            setIsActive(false)
                            props.setSelectedPic(option.src)
                        }}
                        className="dropdown-item">
                            <img src={option.src} width = "40" height = "40"></img>&nbsp;&nbsp;{option.Character}
                            </div>
                    ))}
            </div>)}
        </div>
        <br></br>
        <br></br>
        </>
        
    );
}

export default CharDropdown;