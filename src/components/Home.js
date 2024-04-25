import '../css/H ome.css'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()

    const handleOnclickTest = () => {
        navigate('/test')
    }

    const handleOnclickView= ()=> {
        navigate('/view')
    }

    return (
        <div className='home'>
            <div className='btnContainer'>
                <button onClick={handleOnclickTest}>검사하기</button>
                <button onClick={handleOnclickView}>핫플보기</button>
            </div>

            <i class="bi bi-info-circle-fill"></i>
        </div>
    )
}

export default Home