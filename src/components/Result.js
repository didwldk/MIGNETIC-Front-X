import React, { useEffect } from "react";
import '../css/Result.css';
import '../css/common/Info.css';

import Info from '../components/common/Info'
import bgImg from '../images/bgImg.png'
import reult_logo from '../images/icons/result_logo.png';
import result_wave from '../images/result_wave.png'
function Result() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    return(
        <div className="result">
            <div className="full-display">
                <div className="result-logo-img"><img src={reult_logo} alt="result-logo" /></div>
                <div className="type">
                    <p className="my-type">나의 타입은?</p>
                    <div className="type-roulette"></div>
                    <p>
                    </p>
                </div>
            </div>
            {/* 공통 정보 컴포넌트 */}
            <Info />
            <div className="bgimg-result"><img src = {result_wave} alt = "result_wave"/></div>
        </div>
    )
}

export default Result;