import '../css/Test.css'
import bgImg from '../images/testbg.png';

function Test() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    return (
        <div className='Test'>
            <div className='testBtn'>
                <button>학생</button>
                <button>선생님</button>
                <button>외부인</button>
            </div>
        </div>
    )
}

export default Test