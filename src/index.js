import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CharDropdown from './CharDropdown';
import reportWebVitals from './reportWebVitals';
import VODDisplay from './VODDisplay';
import Submit from './Submit'
import AboutContact from './AboutContact'
import Routing from './Routing'
//import testDropdown from './testDropdown';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        <Routing/>
      </BrowserRouter>


          {/* <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/submit" element={<Submit />} />
                    <Route path="/about" element={<AboutContact />} />
                </Routes>
            </main>
        </BrowserRouter> */}
      {/* <App/> */}
    {/* <AboutContact/> */}
    {/* <App/> */}
    {/* <Submit/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
