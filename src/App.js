//import logo from './logo.svg';
import './App.css';
import CharDropdown from './CharDropdown';
import React, { useState } from 'react';
import Asterisk from "./SG pics/Asterisk.png";
import Logo from "./SG pics/SGLogo.png";

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

  return (
    <><body>
      <header>
        <nav class="main-nav">
          <ul>
            <li><a href="submission.html">Submit VODs</a></li>
            <li><a href="about.html">About/Contact</a></li>
          </ul>
        </nav>
        <div class="header1">One More Once</div>
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
              <input type="text" name = "name"></input>
              </label>
            </div>
          </form>
          <br></br>
          <div className='teamBtn'>
            <CharDropdown selected={p1selectedchar1} setSelected={p1setSelected1} selectedPic = {p1selectedPic1} setSelectedPic={p1setSelectedPic1}/>
            <CharDropdown selected={p1selectedchar2} setSelected={p1setSelected2} selectedPic = {p1selectedPic2} setSelectedPic={p1setSelectedPic2}/>
            <CharDropdown selected={p1selectedchar3} setSelected={p1setSelected3} selectedPic = {p1selectedPic3} setSelectedPic={p1setSelectedPic3}/>
            <div class="order">Order matters<input type="checkbox" id="orderMatters1" name="order1"/><br/></div>
          </div>
        </div>

        <img src={Logo} height = "250px" width = "375px"></img>

        <div className="p2Team">
          <div className = "teamSelect">Select Team 2</div>
          <br></br>
          <form>
            <div className ="playerName">
              <label>Player 2 Name
              <input type="text" name = "name"></input>
              </label>
            </div>
          </form>
          <br></br>
          <div className='teamBtn'>
          <CharDropdown selected={p2selectedchar1} setSelected={p2setSelected1} selectedPic = {p2selectedPic1} setSelectedPic={p2setSelectedPic1}/>
          <CharDropdown selected={p2selectedchar2} setSelected={p2setSelected2} selectedPic = {p2selectedPic2} setSelectedPic={p2setSelectedPic2}/>
          <CharDropdown selected={p2selectedchar3} setSelected={p2setSelected3} selectedPic = {p2selectedPic3} setSelectedPic={p2setSelectedPic3}/>
          <div className="order">Order matters<input type="checkbox" id="orderMatters1" name="order2"/><br/></div>
          </div>
        </div>
      </div>
      <div className = "submitCenter">
        <button type="button" className = "submitButton">Search</button>
      </div>
    </div>
    </>
  );
}

export default App;
