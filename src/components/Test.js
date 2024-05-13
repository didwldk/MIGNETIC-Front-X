import '../css/Who.css'
import { useNavigate } from 'react-router-dom'
import bgImg from '../images/testbg.png'

function Test() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const navigate = useNavigate()

    const handleOnclilckSchool = (text) => {
        navigate('/enterschool', { state: { text } })
    }
    const handleOnclilckOutsider = () => {
        navigate('/enteroutsider')
    }

    return (
        <div className='Test'>
            <div className='testBtnContainer'>
                <button onClick={() => { handleOnclilckSchool('학생') }}>학생</button>
                <button onClick={() => { handleOnclilckSchool('선생님') }}>선생님</button>
                <button onClick={handleOnclilckOutsider}>외부인</button>
            </div>
        </div>
    )
}

export default Test