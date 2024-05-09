import '../css/Who.css'
import { useNavigate } from 'react-router-dom'
import bgImg from '../images/testbg.png'
import Info from '../components/common/Info'

function Test() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const navigate = useNavigate()

    const handleOnclilckStudent = () => {
        navigate('/enterstudent')
    }
    const handleOnclilckTeacher = () => {
        navigate('/enterteacher')
    }
    const handleOnclilckOutsider = () => {
        navigate('/enteroutsider')
    }

    return (
        <div className='Test'>
            <Info />
            
            <div className='testBtnContainer'>
                <button onClick={handleOnclilckStudent}>학생</button>
                <button onClick={handleOnclilckTeacher}>선생님</button>
                <button onClick={handleOnclilckOutsider}>외부인</button>
            </div>


        </div>
    )
}

export default Test