// import '../css/reset.css';
// import '../css/Hot_place';

import React, { useRef, useEffect, useState } from "react";

function Hot_place(){
    const {kakao} = window;

    const container = useRef(null)
    const options = {
        center: new kakao.maps.LatLng(37.4661018035835, 126.931927855676),
        level: 3
    }

    useEffect(() => {
        new kakao.maps.Map(container, options)
        return () => {};
    }, []);

    return(
        <div id = "map" ref={container} style={{
            width: '1366px',
            height: '700px'
        }}>
        </div>
    )
}

// const Hot_place = () => {
//     const [map,setMap] = useState(null);

//     useEffect(() => {
//         const container = document.getElementById('map');
//         //지도를 담을 영역의 DOM 레퍼런스
//         const options = {
//             center: new kakao.maps.LatLng(37.4661018035835, 126.931927855676),
//             //지도의 중심 좌표 (미림마이스터고)
//             level: 3
//         };
//         const map = new kakao.maps.Map(container, options);
//     }, [])
//     // useEffect를 이용해 지도를 가지고 있는 컴포넌트가 처음 렌더링 될 때 지도를 띄우기 위해
//     // 두번째 인자를 빈배열로 설정

//     return (
//         <div class = "place" style={{
//             width: '1860px',
//             height: '776px'
//         }}>
//             <div id = "map" style={{
//                 width: '1366px',
//                 height: '700px'
//             }}></div>
//         </div>
        
//     )
// }

export default Hot_place;