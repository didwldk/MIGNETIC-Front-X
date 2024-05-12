import bgImg from '../images/questionImg.png'

import '../css/RandomQuestion.css'

function RandomQuestion() {
    document.body.style.backgroundImage = `url(${bgImg})`
    return (
        <div className='RandomQuestion'>
            <div className='questionTitle'>내 스타일에 가까운 선생님은?</div>
            {/* <div className='questionContainer'>
                <button className='questions'>당근 주는 지훈쌤</button>
                <button className='questions'>채찍 주는 규정쌤</button>
                <button className='questions'>공주님 시켜주는 재민쌤</button>
            </div> */}

            <div className='questionContainerVer2'>
                <button className='questionsVer2'>못들은척하고 도망간다</button>
                <button className='questionsVer2'>당당하게 선생님 앞으로 간다</button>
            </div>
        </div>
    )
}

export default RandomQuestion