import bgImg from '../../images/testbg.png'
import Info from '../../components/common/Info'
import '../../css/Who.css'

function EnterStudent() {
    document.body.style.backgroundImage = `url(${bgImg})`;

    return (
        <div className="enterStudent">
            <Info />

            <div className='enterStudentBox'>
                <input type="text" placeholder="이름" id='studentName'/>
                <input type="text" placeholder="과목" id='studentSubject'/>
            </div>
        </div>
    )
}

export default EnterStudent