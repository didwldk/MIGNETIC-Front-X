import '../css/reset.css';
import '../css/Hot_place';

import { useEffect } from "react";

//스크립트로 kakao maps api를 심어서 가져오면 window 전역에 객체에 들어가게 됨
//그런데 함수형 컴포넌트에서는 이를 바로 인식 못함
//그래서 상단에 
const {kakao} = window;
//를 작성하여 함수형 컴포넌트에 인지시키고 window에서 kakao 객체를 뽑아서 사용

function Kakao() {
    useEffect(() => {
        const container = document.getElementById('map');
        //지도를 담을 영역의 DOM 레퍼런스
        const options = {
            center: new kakao.maps.LatLng(37.4661018035835, 126.931927855676),
            //지도의 중심 좌표 (미림마이스터고)
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [])
    // useEffect를 이용해 지도를 가지고 있는 컴포넌트가 처음 렌더링 될 때 지도를 띄우기 위해
    // 두번째 인자를 빈배열로 설정

    return (
        <div class = "place">
            <div id = "map"></div>
        </div>
        
    )
}

export default Kakao;