import bgImg from '../../images/testbg.png'
import Info from '../common/Info'
import '../../css/Who.css'

function EnterStudent() {
    document.body.style.backgroundImage = `url(${bgImg})`;

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

                <button className='testBtn'>검사하기</button>
            </div>
        </div>
    )
}

export default EnterStudent