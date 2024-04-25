import '../css/NoticeBoard.css'
import bgImg2 from '../images/NoticeBoardBG.png'
import envelop1 from '../images/Envelope1.png'
import envelop2 from '../images/Envelope2.png'
import { useState } from 'react'

function NoticeBoard(){

    const [showLetter, setShowLetter] = useState(false);

    const handleMouseOver = () => {
        setShowLetter(true);
    };

    const handleMouseOut = () => {
        setShowLetter(false);
    };

    document.body.style.backgroundImage = `url(${bgImg2})`;
    // document.body.style.backgroundColor = "#3373FF";

    return(
        <div className="NLetter">
            <div className="Nenvelop1">
                <img src={envelop1}/>
                <div className="NletterPaper" style={{ visibility: showLetter ? 'visible' : 'hidden' }}>
            </div>
            </div>
            <div className="Nenvelop2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={envelop2}/>
            </div>
        </div>
    );



}

export default NoticeBoard