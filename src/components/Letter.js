import React, { useState } from 'react';
import '../css/Letter.css'
import envelop1 from '../images/Envelope1.png'
import envelop2 from '../images/Envelope2.png'
import logo from '../images/icons/logo.png'
import bgImg from '../images/bgImg.png'

function Letter(){
    document.body.style.backgroundImage = `url(${bgImg})`;
    const [letterContent, setLetterContent] = useState('');

    // 텍스트 영역의 내용이 변경될 때마다 호출될 함수
    const handleContentChange = (event) => {
        const content = event.target.value;
        setLetterContent(content);
    };

    // 전송 버튼 클릭 시 텍스트 영역의 내용을 콘솔로 출력하는 함수
    const handleSendButtonClick = () => {
        console.log(letterContent);
        setLetterContent("")
        alert("전송 완료")
    };
    return (
        
        <div className="Letter">
            <div className="logo"><img src={logo}/></div>
            <div className="envelop1">
                <img src={envelop1}/>
            </div>
            <div className="letterPaper">
                {/* <input type="text" className="InputText" translate="여기에 편지"/> */}
                <textarea className="InputText" placeholder="내용을 입력해 주세요."
                value={letterContent}  // 텍스트 영역의 값은 상태에 의해 결정됩니다.
                onChange={handleContentChange}/>
            </div>
            <div className="envelop2">
                <img src={envelop2}/>
            </div>
                <div className="buttonContainer" onClick={handleSendButtonClick}><button>전송하기</button></div>
        </div>
    );
}

export default Letter