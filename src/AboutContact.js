import './AboutContact.css';

function AboutContact() {


    return(
        <>
        <div className="mainBG-About">
            <div className="About">
                <span>
                <h1 className='h1-spacing'>About</h1>
                This is an online video database for Skullgirls VODs
                <br/>
                <br/>
                I took heavy inspriration from <a href="http://www.tunawithbacon.com" target="_blank">tunawithbacon.com</a> and <a href="http://www.slowtrainroll.in" target="_blank">slowtrainroll.in</a>
                </span>

                <span>
                <h1 className='h1-spacing'>
                    Contact Me
                </h1>
                    Please let me know if something is not working or if you have any feedback so I can improve the experience
                    <br/>
                    <br/>
                    Email: onemoreoncevods@gmail.com
                    <br/> 
                    Discord: aD Time#7734
                    <br/>
                    Twitter: @aDTimeGaming
                </span>

                <span>
                <h1 className='h1-spacing'>Other Resources</h1>
                    The best place to get started is the check out the <a href="https://wiki.gbl.gg/w/Skullgirls" target="_blank">Wiki</a>
                    <br/>
                    It even has an <a href="https://wiki.gbl.gg/w/Skullgirls/FAQ" target="_blank">FAQ page</a> for beginners
                    <br/>
                    The <a href="https://discord.gg/skullgirls" target="_blank">Discord Server</a> is also very useful for all questions you have
                </span>
            </div>
        </div>
        </>
    )
}


export default AboutContact;
