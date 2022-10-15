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
import VODMap from './VODMap';
import Pagination from './Pagination';

function VODDisplay(props) {

    const [dataArray, setDataArray] = useState([])

    const [searched, setSearched] = useState(false)

    const [dataTest, setData] = useState([])

    const [pagedData, setPagedData] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)

    function paginate(pageNumber){
        setCurrentPage(pageNumber)
        indexOfLastPost = pageNumber * postsPerPage
        indexOfFirstPost = indexOfLastPost - postsPerPage
        console.log("PAGINATE PAGE NUMBER " + currentPage)
        console.log("indexOfLastPost " + indexOfLastPost)
        console.log("indexOfFirstPost " + indexOfFirstPost)
        var currentPosts = dataTest.slice(indexOfFirstPost, indexOfLastPost)
        setPagedData(currentPosts.map(info => {
            if(info != undefined){
                console.log("currentPosts  "+ info)
                return(info)
            }
        }))
    } 
    
    var indexOfFirstPost = 0;
    var indexOfLastPost = 3;
    //Gets everything from database on load then store it in the dataArray state
    useEffect(() => {
        // console.log("requested")
        const databaseData = {
            method: 'GET',
            // url: 'http://localhost:8000/',
            url: '/data',
            params: {Player1: props.Player1, P1P: props.P1P, P1M: props.P1M, P1A: props.P1A, P2P: props.P2P, P2M: props.P2M, P2A: props.P2A, Player2: props.Player2, TO1: props.TO1, TO2: props.TO2}
        }

        axios.request(databaseData).then((response) => {
            console.log("REQUEST MADE")
            console.log(response.data)
            setDataArray(response.data)
        }).catch((error)=>{
            console.error(error)
        })
            // console.log("JUST SET DATA ARRAY = " + dataArray)
            // setData(response.data)
            // console.log("JUST SET SET DATA = " + dataTest)
            //testingData()
        // console.log("P1P = " + props.p1selected1)
        // console.log("P1M = " + props.p1selected2)
        // console.log("P1A = " + props.p1selected3)
        // console.log("P2P = " + props.p2selected1)
        // console.log("P2M = " + props.p2selected2)
        // console.log("P2A = " + props.p2selected3)
    }, []) //[search]


    // function testingData() {
    //     setData(data)
    //     console.log("DATA TEST VALUES = " + dataTest)
    // }

    // useEffect(() =>{
    //     setData(data)
    //     console.log("dataTest = " + dataTest.map(info =>{
    //         console.log(info)
    //     }))
    // }, [data])


    //Maps the array and then displays the data from the database
    var data = dataArray.map(info => {
    //Splits date time object into parts
        var dateParts = info.VODDate.split("-");

        //Changes format into MM/DD/YYYY
        var dateYear =  dateParts[1] + "/" + dateParts[2].substring(0, 2) + "/" + dateParts[0];   

        //If/Else statements to display the teams in the right spacings
        if(!checkIfNone(info.P1A) && !checkIfNone(info.P1M) && !checkIfNone(info.P2M) && !checkIfNone(info.P2A)){
            return(<tr>
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" valign='center'>
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" valign='center'>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>

                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>

                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>
                    <div className ="centerpls">{info.P1A}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1A)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src={getImage(info.P1M)} height = "35"/></div>
                    <div className ="centerpls">{info.P1A}&nbsp;&nbsp;<img className = "img" src={getImage(info.P1A)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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

    // function setPages(){
    //     const indexOfLastPost = currentPage * postsPerPage
    //     const indexOfFirstPost = indexOfLastPost - postsPerPage
    //     const currentPosts = dataTest.slice(indexOfFirstPost, indexOfLastPost)
    
    //     console.log("indexOfLastPost: " + indexOfLastPost + "\n" 
    //                 +"indexOfFirstPost: " + indexOfFirstPost + "\n"
    //                 +"currentPosts: " + currentPosts)
    // }

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


    // function Search(){
    //     console.log(dataArray)
    //     console.log("P1P = " + props.P1P)
    //     console.log("P1M = " + props.P1M)
    //     console.log("P1A = " + props.P1A)
    //     console.log("P2P = " + props.P2P)
    //     console.log("P2M = " + props.P2M)
    //     console.log("P2A = " + props.P2A)
    //     console.log(props.Player1)
    //     console.log(props.Player2)
    //     console.log(props.TO1)
    //     console.log(props.TO2)
    //     var data = dataArray.map(info =>{
    //         console.log("Checking team...")
    //         if(props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any" && props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any"){
    //             //display all teams
    //         }
    //         else if(!(props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any") && ((props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any"))){
    //             if(!props.TO1){
    //                 if(props.P1P === "Any" || (props.P1P === info.P1P || props.P1P === info.P1M || props.P1P === info.P1A)){
    //                     if((props.P1M === "Any" || (props.P1M === info.P1P || props.P1M === info.P1M || props.P1M === info.P1A))){
    //                         if((props.P1A === "Any" || (props.P1A === info.P1P || props.P1A === info.P1M || props.P1A === info.P1A))){
    //                             console.log("I found the team :) = " + info.P1P + " " + info.P1M + " " + info.P1A)
    //                         }
    //                     }
    //                 }
    //                 if(props.P1P === "Any" || (props.P1P === info.P2P || props.P1P === info.P2M || props.P1P === info.P2A)){
    //                     if((props.P1M === "Any" || (props.P1M === info.P2P || props.P1M === info.P2M || props.P1M === info.P2A))){
    //                         if((props.P1A === "Any" || (props.P1A === info.P2P || props.P1A === info.P2M || props.P1A === info.P2A))){
    //                             console.log("I found the team :) = " + info.P2P + " " + info.P2M + " " + info.P2A)
    //                         }
    //                     }
    //                 }
    //             }
    //             else{
    //                 if((props.P1P === "Any" || (props.P1P === info.P1P)) && (props.P1M === "Any" || (props.P1M === info.P1M)) && (props.P1A === "Any" || (props.P1A === info.P1A))){
    //                     console.log("I found the team :) = " + info.P1P + " " + info.P1M + " " + info.P1A)
    //                 }
    //                 if((props.P1P === "Any" || (props.P1P === info.P2P)) && (props.P1M === "Any" || (props.P1M === info.P2M)) && (props.P1A === "Any" || (props.P1A === info.P2A))){
    //                     console.log("I found the team :) = " + info.P2P + " " + info.P2M + " " + info.P2A)
    //                 }
    //             }
    //         }
    //         else if(!(props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any") && !((props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any"))){
    //             if((props.P1P === "Any" || (props.P1P === info.P1P || props.P1P === info.P1M || props.P1P === info.P1A)) && (props.P2P === "Any" || (props.P2P === info.P2P || props.P2P === info.P2M || props.P2P === info.P2A))){
    //                 if((props.P1M === "Any" || (props.P1M === info.P1P || props.P1M === info.P1M || props.P1M === info.P1A)) && (props.P2M === "Any" || (props.P2M === info.P2P || props.P2M === info.P2M || props.P2M === info.P2A))){
    //                     if((props.P1A === "Any" || (props.P1A === info.P1P || props.P1A === info.P1M || props.P1A === info.P1A)) && (props.P2A === "Any" || (props.P2A === info.P2P || props.P2A === info.P2M || props.P2A === info.P2A))){
    //                         console.log("I found the team :) = " + info.P1P + " " + info.P1M + " " + info.P1A)
    //                     }
    //                 }
    //             }
    //             if((props.P1P === "Any" || (props.P1P === info.P2P || props.P1P === info.P2M || props.P1P === info.P2A)) && (props.P2P === "Any" || (props.P2P === info.P1P || props.P2P === info.P1M || props.P2P === info.P1A))){
    //                 if((props.P1M === "Any" || (props.P1M === info.P2P || props.P1M === info.P2M || props.P1M === info.P2A)) && (props.P2M === "Any" || (props.P2M === info.P1P || props.P2M === info.P1M || props.P2M === info.P1A))){
    //                     if((props.P1A === "Any" || (props.P1A === info.P2P || props.P1A === info.P2M || props.P1A === info.P2A)) && (props.P2A === "Any" || (props.P2A === info.P1P || props.P2A === info.P1M || props.P2A === info.P1A))){
    //                         console.log("I found the team :) = " + info.P2P + " " + info.P2M + " " + info.P2A)
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // }

    function displaySearch(info){ //See if it can take in info as a parameter to get the current object
        // console.log("DISPLAY SEARCH " + info.P1P)
        var dateParts = info.VODDate.split("-");

        //Changes format into MM/DD/YYYY
        var dateYear =  dateParts[1] + "/" + dateParts[2].substring(0, 2) + "/" + dateParts[0];   

        //If/Else statements to display the teams in the right spacings
        if(!checkIfNone(info.P1A) && !checkIfNone(info.P1M) && !checkIfNone(info.P2M) && !checkIfNone(info.P2A)){
            return(<tr>
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" valign='center'>
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" valign='center'>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>

                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>

                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1M)} height = "35"/></div>
                    <div className ="centerpls">{info.P1A}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1A)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
                <td className="tbl-hdr">{info.Player1}</td>
                <td className="tbl-hdr" >
                    <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    <div className ="centerpls">{info.P1M}&nbsp;&nbsp;<img className = "img" src={getImage(info.P1M)} height = "35"/></div>
                    <div className ="centerpls">{info.P1A}&nbsp;&nbsp;<img className = "img" src={getImage(info.P1A)} height = "35"/></div>
                </td>
                <td className="tbl-hdr" >
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2M)} height = "35"/>&nbsp;&nbsp;{info.P2M}</div>
                    <div className ="centerpls"><img className = "img" src={getImage(info.P2A)} height = "35"/>&nbsp;&nbsp;{info.P2A}</div>
                </td>
                <td className="tbl-hdr">{info.Player2}</td>
                <td className="tbl-event">
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
    }

    function Search(){
        //If they try to search with just the second team
        if((props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any") && !(props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any")){
            alert("Please select at least 1 character for team 1")
        }
        //Makes sure there are no duplicate characters in the search
        else if(((props.P1P != "Any" && (props.P1P === props.P1M || props.P1P === props.P1A)) || (props.P1M != "Any" && props.P1M === props.P1A)) ||
                ((props.P2P != "Any" && (props.P2P === props.P2M || props.P2P === props.P2A)) || (props.P2M != "Any" && props.P2M === props.P2A))){
            alert("Please do not search with duplicate characters")
        }
        //Valid team search
        else{
            data = dataArray.map(info => {
                //console.log("Checking team...")

                //Variable to make sure the names are correct before wasting time searching for characters
                var correctNames = false
                //If user is searching for a specific player vs player
                if(props.Player1 != "" && props.Player2 != ""){
                    if((info.Player1.toLowerCase() === props.Player1.toLowerCase() && info.Player2.toLowerCase() === props.Player2.toLowerCase()) 
                    || (info.Player2.toLowerCase() === props.Player1.toLowerCase() && info.Player1.toLowerCase() === props.Player2.toLowerCase())){
                        correctNames = true
                    }
                }
                //If user put a name in the player 1 search
                else if(props.Player1 != ""){
                    if(props.Player1.toLowerCase() === info.Player1.toLowerCase() || props.Player1.toLowerCase() === info.Player2.toLowerCase()){
                        correctNames = true
                    }
                }
                //If user put a name in the player 2 search
                else if(props.Player2 != ""){
                    if(props.Player2.toLowerCase() === info.Player1.toLowerCase() || props.Player2.toLowerCase() === info.Player2.toLowerCase()){
                        correctNames = true
                    }
                }
                //If no names were input, then search all teams
                else if(props.Player1 === "" && props.Player2 === ""){
                    correctNames = true
                }
                if(correctNames){
                    //If every slot is Any
                    if(props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any" && props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any"){
                        return(displaySearch(info))
                        //display all teams
                    }

                    //If team 1 has at least 1 character and team 2 has only Any
                    else if(!(props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any") && ((props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any"))){
                        if(!props.TO1){ //If team order does not matter
                            //If team 1 search has all characters in any order on team 1
                            if(props.P1P === "Any" || (props.P1P === info.P1P || props.P1P === info.P1M || props.P1P === info.P1A)){
                                if((props.P1M === "Any" || (props.P1M === info.P1P || props.P1M === info.P1M || props.P1M === info.P1A))){
                                    if((props.P1A === "Any" || (props.P1A === info.P1P || props.P1A === info.P1M || props.P1A === info.P1A))){
                                        return(displaySearch(info))
                                    }
                                }
                            }
                            //If team 1 search has all characters in any order on team 2
                            if(props.P1P === "Any" || (props.P1P === info.P2P || props.P1P === info.P2M || props.P1P === info.P2A)){
                                if((props.P1M === "Any" || (props.P1M === info.P2P || props.P1M === info.P2M || props.P1M === info.P2A))){
                                    if((props.P1A === "Any" || (props.P1A === info.P2P || props.P1A === info.P2M || props.P1A === info.P2A))){
                                        return(displaySearch(info))
                                    }
                                }
                            }
                        }
                        else{//If team 1 order matters
                            //If team 1 has every character in the correct order for the team 1 search
                            if((props.P1P === "Any" || (props.P1P === info.P1P)) && (props.P1M === "Any" || (props.P1M === info.P1M)) && (props.P1A === "Any" || (props.P1A === info.P1A))){
                                return(displaySearch(info))
                            }
                            //If team 2 has every character in the correct order for the team 1 search
                            if((props.P1P === "Any" || (props.P1P === info.P2P)) && (props.P1M === "Any" || (props.P1M === info.P2M)) && (props.P1A === "Any" || (props.P1A === info.P2A))){
                                return(displaySearch(info))
                            }
                        }
                    }
                    //If both teams have at least 1 character that is not Any
                    else if(!(props.P1P === "Any" && props.P1M === "Any" && props.P1A === "Any") && !((props.P2P === "Any" && props.P2M === "Any" && props.P2A === "Any"))){
                        //If neither team order matters  
                        if(!props.TO1 && !props.TO2){
                            //If team 1 and team 2 have their characters on P1 and P2 side as originally asked
                            if((props.P1P === "Any" || (props.P1P === info.P1P || props.P1P === info.P1M || props.P1P === info.P1A)) && (props.P2P === "Any" || (props.P2P === info.P2P || props.P2P === info.P2M || props.P2P === info.P2A))){
                                if((props.P1M === "Any" || (props.P1M === info.P1P || props.P1M === info.P1M || props.P1M === info.P1A)) && (props.P2M === "Any" || (props.P2M === info.P2P || props.P2M === info.P2M || props.P2M === info.P2A))){
                                    if((props.P1A === "Any" || (props.P1A === info.P1P || props.P1A === info.P1M || props.P1A === info.P1A)) && (props.P2A === "Any" || (props.P2A === info.P2P || props.P2A === info.P2M || props.P2A === info.P2A))){
                                        return(displaySearch(info))
                                    }
                                }
                            }
                            //If team 1 and team 2 have their characters on the opposide side as originally asked
                            if((props.P1P === "Any" || (props.P1P === info.P2P || props.P1P === info.P2M || props.P1P === info.P2A)) && (props.P2P === "Any" || (props.P2P === info.P1P || props.P2P === info.P1M || props.P2P === info.P1A))){
                                if((props.P1M === "Any" || (props.P1M === info.P2P || props.P1M === info.P2M || props.P1M === info.P2A)) && (props.P2M === "Any" || (props.P2M === info.P1P || props.P2M === info.P1M || props.P2M === info.P1A))){
                                    if((props.P1A === "Any" || (props.P1A === info.P2P || props.P1A === info.P2M || props.P1A === info.P2A)) && (props.P2A === "Any" || (props.P2A === info.P1P || props.P2A === info.P1M || props.P2A === info.P1A))){
                                        return(displaySearch(info))
                                    }
                                }
                            }
                        }
                        //If only team order 1 matters
                        else if(props.TO1 && !props.TO2){
                            //If team 1 has every character in the correct order for the team 1 search and team 2 is correct in any order
                            if((props.P1P === "Any" || (props.P1P === info.P1P)) && (props.P1M === "Any" || (props.P1M === info.P1M)) && (props.P1A === "Any" || (props.P1A === info.P1A))){
                                if((props.P2P === "Any" || (props.P2P === info.P2P || props.P2P === info.P2M || props.P2P === info.P2A))){
                                    if(props.P2M === "Any" || (props.P2M === info.P2P || props.P2M === info.P2M || props.P2M === info.P2A)){
                                        if(props.P2A === "Any" || (props.P2A === info.P2P || props.P2A === info.P2M || props.P2A === info.P2A)){
                                            return(displaySearch(info))
                                        }
                                    }
                                }
                            }
                            //If team 2 has every character in the correct order for the team 1 search and team 1 is correct in any order
                            if((props.P1P === "Any" || (props.P1P === info.P2P)) && (props.P1M === "Any" || (props.P1M === info.P2M)) && (props.P1A === "Any" || (props.P1A === info.P2A))){
                                if((props.P2P === "Any" || (props.P2P === info.P1P || props.P2P === info.P1M || props.P2P === info.P1A))){
                                    if(props.P2M === "Any" || (props.P2M === info.P1P || props.P2M === info.P1M || props.P2M === info.P1A)){
                                        if(props.P2A === "Any" || (props.P2A === info.P1P || props.P2A === info.P1M || props.P2A === info.P1A)){
                                            return(displaySearch(info))
                                        }
                                    }
                                }
                            }
                        }
                        //If only team 2 order matters
                        else if(!props.TO1 && props.TO2){
                            //If team 2 is every character in the correct order for the second team search and the team 2 is correct in any order
                            if((props.P2P === "Any" || (props.P2P === info.P2P)) && (props.P2M === "Any" || (props.P2M === info.P2M)) && (props.P2A === "Any" || (props.P2A === info.P2A))){
                                if((props.P1P === "Any" || (props.P1P === info.P1P || props.P1P === info.P1M || props.P1P === info.P1A))){
                                    if(props.P1M === "Any" || (props.P1M === info.P1P || props.P1M === info.P1M || props.P1M === info.P1A)){
                                        if(props.P1A === "Any" || (props.P1A === info.P1P || props.P1A === info.P1M || props.P1A === info.P1A)){
                                            return(displaySearch(info))
                                        }
                                    }
                                }
                            }
                            //If team 1 is every character in the correct order for the second team search and team 1 is correct in any order
                            if((props.P2P === "Any" || (props.P2P === info.P1P)) && (props.P2M === "Any" || (props.P2M === info.P1M)) && (props.P2A === "Any" || (props.P2A === info.P1A))){
                                if((props.P1P === "Any" || (props.P1P === info.P2P || props.P1P === info.P2M || props.P1P === info.P2A))){
                                    if(props.P1M === "Any" || (props.P1M === info.P2P || props.P1M === info.P2M || props.P1M === info.P2A)){
                                        if(props.P1A === "Any" || (props.P1A === info.P2P || props.P1A === info.P2M || props.P1A === info.P2A)){
                                            return(displaySearch(info))
                                        }
                                    }
                                }
                            }
                        }
                        //If both team orders matter
                        else if(props.TO1 && props.TO2){
                            //If team 1 and team 2 are in the correct order from the search
                            if((props.P1P === "Any" || (props.P1P === info.P1P)) && (props.P1M === "Any" || (props.P1M === info.P1M)) && (props.P1A === "Any" || (props.P1A === info.P1A))){
                                if((props.P2P === "Any" || (props.P2P === info.P2P)) && (props.P2M === "Any" || props.P2M === info.P2M) && (props.P2A || (props.P2A === info.P2A))){
                                    return(displaySearch(info))
                                }
                            }
                            //If team 1 and team 2 are in the correct order for the opposite teams as submitted
                            if((props.P1P === "Any" || (props.P1P === info.P2P)) && (props.P1M === "Any" || (props.P1M === info.P2M)) && (props.P1A === "Any" || (props.P1A === info.P2A))){
                                if((props.P2P === "Any" || (props.P2P === info.P1P)) && (props.P2M === "Any" || props.P2M === info.P1M) && (props.P2A || (props.P2A === info.P1A))){
                                    return(displaySearch(info))
                                }
                            }
                        }
                    }

                    //Most likely useless code but saving just in case
                    // else{
                    //     info = <tr>
                    //         <td className="tbl-hdr">{info.Player1}</td>
                    //         <td className="tbl-hdr" valign='center'>
                    //             <div className ="centerpls">{info.P1P}&nbsp;&nbsp;<img className = "img" src ={getImage(info.P1P)} height = "35"/></div>
                    //         </td>
                    //         <td className="tbl-hdr" valign='center'>
                    //             <div className ="centerpls"><img className = "img" src={getImage(info.P2P)} height = "35"/>&nbsp;&nbsp;{info.P2P}</div>
                    //         </td>
                    //         <td className="tbl-hdr">{info.Player2}</td>
                    //         <td className="tbl-event">
                    //             <div>
                    //                 {info.EventName}
                    //             </div>
                    //             <div>
                    //                 <a href={info.Link} target="_blank"><img src="https://brandeps.com/logo-download/Y/YouTube-Play-logo-vector-01.svg" height = "30"></img></a>
                    //             </div>
                    //         </td>
                    //     </tr>
                    // }
                }
                })
            //testingData()

            //Sets the data to be displayed for each team that was properly searched for
            setData(data.map(info => {
                if(info != undefined){
                    console.log("hello" + info)
                    return(info)
                }
            }))

            console.log("This is datatest: " + dataTest)

            indexOfLastPost = currentPage * postsPerPage
            indexOfFirstPost = indexOfLastPost - postsPerPage

            dataTest.filter(n => n)

            var results = dataTest.filter(element => {
                return element !== undefined;
            });

            results.map(info =>{
                console.log("RESULTS " + info)
            })

            dataTest.map(info =>{
                console.log("This is the filtered dataTest")
                console.log(info)
            })
            
            const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost)

            for(var x = 0; x < dataTest.length; x++){
                var sliced = dataTest.slice(indexOfFirstPost, indexOfLastPost)
                console.log("Sliced: " + sliced)
            }
        
            console.log("indexOfLastPost: " + indexOfLastPost + "\n" 
                        +"indexOfFirstPost: " + indexOfFirstPost + "\n"
                        +"currentPosts: " + currentPosts + '\n'
                        + 'datatest: ' + dataTest.map(info =>{
                            return(info)
                        }))
            

            setPagedData(currentPosts.map(info => {
                if(info != undefined){
                    console.log("currentPosts  "+ info)
                    return(info)
                }
            }))
            console.log(pagedData.length)
            setSearched(true)
            // setData(data)
            // console.log("dataTest = " + dataTest.map(info =>{
            //     console.log("Item")
            //     console.log(info)
            //     console.log(JSON.stringify(info, ["key"]))
            // }))
        }
    }


    return(
        <>
        <div className = "submitCenter">
            <a href='#search'>
                <button type="button" onClick={() => {Search()}} className = "submitButton" >Search</button>
            </a>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
        <div className='mainBG-VODs'>
            <div className="backgroundColor">
                <table className = 'table' id='search'>
                    <tr> 
                        <td className="tbl-hdr">Player 1</td>
                        <td className="tbl-hdr">Player 1 Team</td>
                        <td className="tbl-hdr">Player 2 Team</td>
                        <td className="tbl-hdr">Player 2</td>
                        <td className="tbl-hdr">Event + Date + VOD</td>
                    </tr>

                    {/* Displays all data fetched */}
                    {!searched && data.map(info =>{
                        return(info)
                    })}
                    {/* Displays all data after a search */}
                    {searched && pagedData.map(info =>{
                        return(info)
                    })}
                    {/* {searched && <VODMap IOFP = {indexOfFirstPost} IOLP = {indexOfLastPost} VODs = {dataTest}></VODMap>} */}
                    <Pagination postsPerPage={postsPerPage} totalPosts={pagedData.length-1} paginate={paginate}/>
                </table>
            </div>
        </div>
        </>
    );
}


export default VODDisplay