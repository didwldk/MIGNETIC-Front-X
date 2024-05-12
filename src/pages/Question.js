import RandomQuestion from "../components/RandomQuestion"
import Info from "../components/common/Info"

function Question() {
    return (
        <div>
            <Info type={'blue'} />
            <RandomQuestion />
        </div>
    )
}

export default Question