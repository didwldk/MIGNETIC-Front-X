import React, { useEffect, useState } from "react";
import '../css/HotPlace.css';
import '../css/common/Info.css';
import { markerdata } from './markerData';

import Info from '../components/common/Info'
import bgImg from '../images/bgImg.png';
import logo from '../images/icons/logo.png';

function Hot_place() {
    // 배경 이미지와 이미지 및 스타일 등을 불러오고, 카카오 맵 API를 사용할 수 있도록 선언
    document.body.style.backgroundImage = `url(${bgImg})`;
    const { kakao } = window;
    
    // 버튼의 활성화 상태, 맵 객체, 맵의 확대 수준 및 중심 위치, 마커, 필터링된 마커 데이터를 관리하는 state 선언
    const [activeButton, setActiveButton] = useState(null);
    const [map, setMap] = useState(null);
    const [mapZoom, setMapZoom] = useState(2);
    const [mapCenter, setMapCenter] = useState({ lat: 37.4667835831981, lng: 126.932529286133 });
    const [markers, setMarkers] = useState([]); // 마커들을 관리하는 state 추가
    const [filteredMarkerData, setFilteredMarkerData] = useState(markerdata);

    // 필터링된 마커 데이터가 변경될 때마다 맵 업데이트
    useEffect(() => {
        if (!map) return;
        updateMap();
    }, [filteredMarkerData]);

    // 컴포넌트가 마운트될 때마다 맵 초기화
    useEffect(() => {
        mapscript();
    }, []);

    // 맵을 초기화하고 맵 객체를 생성하는 함수
    const mapscript = () => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
            level: mapZoom,
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);
    };

    // 맵에 마커를 업데이트하는 함수
    const updateMap = () => {
        if (!map) return;
        
        // 이전에 생성된 모든 마커 제거
        markers.forEach(marker => marker.setMap(null));

        // 클릭한 버튼에 해당하는 값만 필터링하여 마커 생성
        const newMarkers = filteredMarkerData.map((el) => {
            if (el.value === activeButton) {
                return new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(el.lat, el.lng),
                });
            }
        });
        setMarkers(newMarkers.filter(marker => marker !== undefined));
    };

    // 버튼 클릭 시 해당 버튼을 활성화 상태로 설정하고 필터링된 마커 데이터 업데이트
    const handleButtonClick = (buttonValue) => {
        setActiveButton(buttonValue);
        setFilteredMarkerData(markerdata.filter(data => data.value === buttonValue));
    };

    return (
        <div className="hot-place">
            <div className="full-display">
                <div className="logo-img"><img src={logo} alt="logo" /></div>
                <div className="place">
                    <div className="btns">
                        {/* 각 버튼은 클릭 시 해당하는 값을 받아 활성화되도록 설정 */}
                        <button
                            className={activeButton === '카페' ? 'active' : ''}
                            onClick={() => handleButtonClick('카페')}
                        >
                            카페
                        </button>
                        <button
                            className={activeButton === '편의점' ? 'active' : ''}
                            onClick={() => handleButtonClick('편의점')}
                        >
                            편의점
                        </button>
                        <button
                            className={activeButton === '디져트' ? 'active' : ''}
                            onClick={() => handleButtonClick('디져트')}
                        >
                            디져트
                        </button>
                        <button
                            className={activeButton === '맛집' ? 'active' : ''}
                            onClick={() => handleButtonClick('맛집')}
                        >
                            맛집
                        </button>
                    </div>
                    {/* 맵을 표시할 컨테이너 */}
                    <div id="map" className="map-class"></div>
                </div>
            </div>
            {/* 공통 정보 컴포넌트 */}
            <Info />
        </div>
    )
}

export default Hot_place;