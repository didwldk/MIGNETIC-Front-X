import bgImg2 from '../images/bgImg2.png'
import '../css/NoticeBoard.css'
import envelop1 from '../images/Envelope1.png'
import envelop2 from '../images/Envelope2.png'

function NoticeBoard(){

    document.body.style.backgroundImage = `url(${bgImg2})`;
    // document.body.style.backgroundColor = "#3373FF";

    return(
        <div className="NLetter">
            <div className="Nenvelop1">
                <img src={envelop1}/>
            </div>
            <div className="NletterPaper">
                <input type="text" className="InputText" translate="여기에 편지"/>
                <textarea className="NInputText" placeholder="내용을 입력해 주세요."/>
            </div>
            <div className="Nenvelop2">
                <img src={envelop2}/>
            </div>
        </div>
    );



}

export default NoticeBoard