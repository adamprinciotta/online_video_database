//import logo from './logo.svg';
import './App.css';
import CharDropdown from './CharDropdown';
import React, { useState } from 'react';

//Importing the images that will be used
import Asterisk from "./SG pics/Asterisk.png";
import Logo from "./SG pics/SGLogo.png";
import VODDisplay from './VODDisplay';
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
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {

  //These States will store the values of the character and picture to update
  //the dropdown menu in real time as they will be passed through as props to 
  //the child (CharDropdown.js)
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

  const [TO1, TO1setSelected] = useState(false)
  const [TO2, TO2setSelected] = useState(false)

  const [Player1, Player1setName] = useState('')
  const [Player2, Player2setName] = useState('')

  const TO1Clicked = () => {
    TO1setSelected(!TO1)
  }

  const TO2Clicked = () => {
    TO2setSelected(!TO2)
  }

  const Player1Change = event =>{
    Player1setName(event.target.value)
  }

  const Player2Change = event =>{
    Player2setName(event.target.value)
  }

  return (
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
            <div className="order">Order matters<input type="checkbox" onClick={TO1Clicked} checked={TO1} id="orderMatters1" name="order1"/><br/></div>
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
          <div className="order">Order matters<input type="checkbox" onClick={TO2Clicked} checked={TO2} id="orderMatters1" name="order2"/><br/></div>
          </div>
        </div>
      </div>
    </div>
        
    <VODDisplay P1P={p1selectedchar1} 
      P1M={p1selectedchar2} 
      P1A={p1selectedchar3}
      P2P={p2selectedchar1}
      P2M={p2selectedchar2}
      P2A={p2selectedchar3}
      TO1 = {TO1}
      TO2 = {TO2}
      Player1 = {Player1}
      Player2 = {Player2}></VODDisplay>
    {/* Placeholder for testing what the displayed VODs would look like */}
    
    {/* <VODDisplay selected={"Parasoul"} setSelected={p1setSelected1} selectedPic = {Parasoul} setSelectedPic={p2setSelectedPic1}
                selected2={"Double"} setSelected2={p2setSelected2} selectedPic2 = {Double} setSelectedPic2={p2setSelectedPic2}
                selected3={"Black Dahlia"} setSelected3={p2setSelected3} selectedPic3 = {BlackDahlia} setSelectedPic3={p2setSelectedPic3}
                selected4={"Fukua"} setSelected4={p2setSelected1} selectedPic4 = {Fukua} setSelectedPic4={p2setSelectedPic1}
                selected5={"Annie"} setSelected5={p2setSelected1} selectedPic5 = {Annie} setSelectedPic5={p2setSelectedPic1}
                selected6={"Robo Fortune"} setSelected6={p2setSelected1} selectedPic6 = {RoboFortune} setSelectedPic6={p2setSelectedPic1}
                /> */}
    
    </>
  );
}

export default App;
