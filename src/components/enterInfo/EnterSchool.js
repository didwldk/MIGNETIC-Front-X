import bgImg from '../../images/testbg.png'
import '../../css/Who.css'
import Info from '../../components/common/Info'

import { useNavigate } from 'react-router-dom';

function EnterStudent() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const navigate= useNavigate()

    const handleSubmit= ()=> {
        navigate('/question')
    }

    return (
        <div className="enterStudent">
            <Info />
            <div className='enterStudentContainer'>
                <div className='enterStudentBox'>
                    <input className='inputText' type="text" placeholder="이름" id='studentName' />
                    <input className='inputText' type="text" placeholder="과목" id='studentSubject' />

                    <div className='privacyContainer'>
                        개인정보정의
                        <input className='inputCheck' type="checkbox" />
                    </div>
                </div>

                <button className='testBtn' onClick={handleSubmit}>검사하기</button>
            </div>
        </div>
    )
}

export default EnterStudent