import bgImg from '../../images/testbg.png'
import '../../css/Who.css'
import Info from '../../components/common/Info'

import { useNavigate, useLocation } from 'react-router-dom';

function EnterSchool() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const navigate = useNavigate()
    const location = useLocation();
    
    const handleSubmit = () => {
        navigate('/question')
    }
    
    const text = location.state?.text || '학생';
    const inputText = ['학생', '선생님'].includes(text) ? text : '학생';

    const inputPlaceholder = (inpuText) => {
        if (inpuText === '학생') return '학년'
        else if (inpuText === '선생님') return '과목'
    }

    return (
        <div className="enterStudent">
            <Info />
            <div className='enterStudentContainer'>
                <div className='enterStudentBox'>
                    <input className='inputText' type="text" placeholder='이름' id='studentName' autoComplete="off" />
                    <input className='inputText' type="text" placeholder={inputPlaceholder(inputText)} id='studentSubject' autoComplete="off" />

                    <div className='privacyContainer'>
                        개인정보동의
                        <input className='inputCheck' type="checkbox" />
                    </div>
                </div>

                <button className='testBtn' onClick={handleSubmit}>검사하기</button>
            </div>
        </div>
    )
}

export default EnterSchool