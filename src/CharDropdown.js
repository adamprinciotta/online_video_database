
// import Multiselect from 'multiselect-react-dropdown';
import './charDropdown.css';
import './App';
import VODDisplay from './VODDisplay';
import React, { useState, useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import $ from 'jquery';
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
import QuestionMark from './SG pics/Question mark.png';
import RoboFortune from './SG pics/Robo Fortune.jpg';
import Squigly from './SG pics/Squigly.jpg';
import Umbrella from './SG pics/Umbrella.jpg';
import Valentine from './SG pics/Valentine.jpg';
import BlackDahlia from './SG pics/Black Dahlia.jpg';


function CharDropdown(props) {
    const[isActive, setIsActive] = useState(false);

    // useEffect(() =>{
    //     document.addEventListener("click", handleClickOutside, true);
    // },[])

    // const refOne = useRef(null);

    // const handleClickOutside = (e) => {
    //     if(!refOne.current.contains(e.target)){
    //         setIsActive(false);
    //     }
    //     else if(e.target.id == 'dropdownButton'){
    //         setIsActive(true);
    //     }
    //     else if(e.target.class == 'dropdown-content'){
    //         console.log(e.target.innerHTML);
    //         {options.map((option) => (
    //                     <div onClick={(e) => {
    //                         props.setSelected(option.Character) 
    //                         setIsActive(false)
    //                         props.setSelectedPic(option.src)
    //                     }}
    //                     className="dropdown-item">
    //                         <img src={option.src} width = "40" height = "40"></img>&nbsp;&nbsp;{option.Character}
    //                         </div>
    //         ))}
    //     }
    //}

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
            <a id="dropdownButton" href="#dropdownButton" className="div-dropdown-btn" 
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




                {/* <div className="dropdown-item">
                    <img src={require("./SG pics/Asterisk.png")} width = "40" height = "40"></img>&nbsp;&nbsp;Any
                </div>
                <div className="dropdown-item">
                    <img src={require("./SG pics/Filia.jpg")} width = "40" height = "40"></img>&nbsp;&nbsp;Filia
                </div> */}



        {/* <div className = "p1Select">
            <Navbar>
                <NavItem char = "Any" img={require("./SG pics/Asterisk.png")}> <DropdownMenu/> </NavItem>
                <NavItem char = "Cerebella" img={require("./SG pics/Cerebella.jpg")}> <DropdownMenu/> </NavItem>
                <NavItem char = "Robo Fortune" img={require("./SG pics/Robo Fortune.jpg")}> <DropdownMenu/> </NavItem>
            </Navbar>
        </div> */}

// function Navbar(props){
//     return(
//         <nav className="navbar">
//             <ul className="navbar-nav">{ props.children }</ul>
//         </nav>
//     );
// }

// function NavItem(props){
//     const [open, setOpen] = useState(false);

//     return(
//         <li className="nav-item" onClick= {() => setOpen(!open)}>
//             <a href="#" className="charSelection" >
//                 <button className = "charButton"><img src = {props.img} width = "40" height = "40"></img>&nbsp;&nbsp;{props.char}</button>
//                 {/* <div className="icon-button"><img alt={props.char} src={props.img} width="40" height="40" /></div>
//                 <div className="charName">{props.char}</div> */}
//             </a>
//             {open && props.children}
//         </li>
//     );
// }


// function DropdownMenu(props){
//     function DropdownItem(props){
//         return(
//             <a href="#" /*onClick={}*/ className='menu-item'>
//                 {/* <img alt={props.char} src={props.img} width="30" height="30" />
//                 <div className="navItem">&nbsp;&nbsp;{props.char}</div> */}
//                 <button className = "charButtonMenu"><img src = {props.img} width = "40" height = "40" alt="character"></img>&nbsp;&nbsp;{props.char}</button>
//             </a>
//         )
//     }
//     return(
//         <nav>
//             <ul className="dropdown">
//                 <li><DropdownItem char="Any" img = {require("./SG pics/Asterisk.png")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Filia" img = {require("./SG pics/Filia.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Cerebella" img = {require("./SG pics/Cerebella.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Peacock" img = {require("./SG pics/Peacock.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Parasoul" img = {require("./SG pics/Parasoul.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Ms Fortune" img = {require("./SG pics/Ms Fortune.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Painwheel" img = {require("./SG pics/Painwheel.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Valentine" img = {require("./SG pics/Valentine.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Double" img = {require("./SG pics/Double.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Squigly" img = {require("./SG pics/Squigly.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Big Band" img = {require("./SG pics/Big Band.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Eliza" img = {require("./SG pics/Eliza.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Fukua" img = {require("./SG pics/Fukua.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Beowulf" img = {require("./SG pics/Beowulf.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Robo Fortune" img = {require("./SG pics/Robo Fortune.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Annie" img = {require("./SG pics/Annie.jpg")}> Player 1 Point</DropdownItem></li>
//                 <li><DropdownItem char="Umbrella" img = {require("./SG pics/Umbrella.jpg")}> Player 1 Point</DropdownItem></li>
//             </ul>
//         </nav>
//     )
// }


        /* <div class="dropdown">
<button class="btn-p1 btn btn-team  
                dropdown-toggle" type="button" id="dropdownMenuButtonP1TP" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    <img id="btn-p1-pic" src="SG pics/Asterisk.png" width="40" height="40"/>
    Any
</button>

<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Asterisk.png" alt="Any" width="40" height="40"/> Any
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Filia.jpg" alt="Filia" width="40" height="40"/> Filia
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Cerebella.jpg" alt="Cerebella" width="40" height="40"/> Cerebella
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Peacock.jpg"  width="40" height="40"/> Peacock
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Parasoul.jpg" alt="Parasoul" width="40" height="40"/> Parasoul
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Ms Fortune.jpg" alt="Ms Fortune" width="40" height="40"/> Ms Fortune
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Painwheel.jpg" alt="Painwheel" width="40" height="40"/> Painwheel
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Valentine.jpg" alt="Valentine" width="40" height="40"/> Valentine
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Double.jpg" alt="Double" width="40" height="40"/> Double
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Squigly.jpg" alt="Squigly" width="40" height="40"/> Squigly
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Big Band.jpg" alt="Big Band" width="40" height="40"/> Big Band
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Eliza.jpg" alt="Eliza" width="40" height="40"/> Eliza
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Fukua.jpg" alt="Fukua" width="40" height="40"/> Fukua
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Beowulf.jpg" alt="Beowulf" width="40" height="40"/> Beowulf
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Robo Fortune.jpg" alt="Robo Fortune" width="40" height="40"/> Rbbo Fortune
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Annie.jpg" alt="Annie" width="40" height="40"/> Annie
    </li>
    <li onclick="P1TP(this)" class="dropdown-TP">
        <img src="SG pics/Umbrella.jpg" alt="Umbrella" width="40" height="40"/> Umbrella
    </li>
</ul>
</div></>
); }*/

// <Multiselect
        //     displayValue="key"
        //     onKeyPressFn={function noRefCheck() { }}
        //     onRemove={function noRefCheck() { }}
        //     onSearch={function noRefCheck() { }}
        //     onSelect={function noRefCheck() { }}
        //     placeholder = "Player 1's Team"
        

        //     options={[
        //         {
        //             Character: 'Any',
        //             key: 'Any'
        //         },
        //         {
        //             Character: 'Filia',
        //             key: 'Filia'
        //         },
        //         {
        //             Character: 'Cerebella',
        //             key: 'Cerebella'
        //         },
        //         {
        //             Character: 'Peacock',
        //             key: 'Peacock'
        //         },
        //         {
        //             Character: 'Parasoul',
        //             key: 'Parasoul'
        //         },
        //         {
        //             Character: 'Ms Fortune',
        //             key: 'Ms Fortune'
        //         },
        //         {
        //             Character: 'Painwheel',
        //             key: 'Painwheel'
        //         }
        //     ]}
        //     selectionLimit={3}
        // />




        
