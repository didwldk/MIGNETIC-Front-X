import '../css/reset.css'
import '../css/Letter.css'
import envelop1 from '../images/Envelope1.png'
import envelop2 from '../images/Envelope2.png'

function Letter(){
    return (
        <div className="Letter">
            <div className="envelop1">
                <img src={envelop1}/>
            </div>
            <div className="letterPaper">
                ㅆ발..
            <button>전송하기</button>
            </div>
            <div className="envelop2">
                <img src={envelop2}/>
            </div>
        </div>
    );
}

export default Letter