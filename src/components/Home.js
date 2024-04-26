import '../css/Home.css'
import { useNavigate } from 'react-router-dom'

import Info from '../components/common/Info'

function Home() {
    const navigate = useNavigate()

    const handleOnclickTest = () => {
        navigate('/who')
    }

    const handleOnclickView = () => {
        navigate('/hotplace')
    }

    return (
        <div className='home'>
            <div className='btnContainer'>
                <button onClick={handleOnclickTest}>검사하기</button>
                <button onClick={handleOnclickView}>핫플보기</button>
            </div>

            <Info />
        </div>
    )
}

export default Home