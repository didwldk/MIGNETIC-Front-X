import React, { useEffect, useState } from "react";
import '../css/HotPlace.css';
import '../css/common/Info.css';
import { markerdata } from './markerData';

import Info from '../components/common/Info'
import bgImg from '../images/bgImg.png';
import logo from '../images/icons/logo.png';

function Hot_place() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const { kakao } = window;
    
    const [activeButton, setActiveButton] = useState(null);
    const [map, setMap] = useState(null);
    const [mapZoom, setMapZoom] = useState(2);
    const [mapCenter, setMapCenter] = useState({ lat: 37.4667835831981, lng: 126.932529286133 });
    const [markers, setMarkers] = useState([]); // 마커들을 관리하는 state 추가
    const [filteredMarkerData, setFilteredMarkerData] = useState(markerdata);

    useEffect(() => {
        if (!map) return;
        updateMap();
    }, [filteredMarkerData]);

    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
            level: mapZoom,
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);
    };

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
                    <div id="map" className="map-class"></div>
                </div>
            </div>
            <Info />
        </div>
    )
}

export default Hot_place;