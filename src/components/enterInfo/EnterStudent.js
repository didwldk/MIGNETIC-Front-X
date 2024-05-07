import Info from '../../components/common/Info'
import '../../css/Who.css'

function EnterStudent() {
    return (
        <div className="enterStudent">
            <Info />

            <input type="text" placeholder="이름" />
            <input type="text" placeholder="학번" />
        </div>
    )
}

export default EnterStudent