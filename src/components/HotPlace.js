import React, { useRef, useEffect, useState } from "react";
import '../css/HotPlace.css';
import '../css/common/Info.css';
import { markerdata } from './markerData';


import Info from '../components/common/Info'
import bgImg from '../images/bgImg.png';
import logo from '../images/icons/logo.png';

function Hot_place() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const { kakao } = window;

    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.4667835831981, 126.932529286133),
            level: 2,
        };
        const map = new kakao.maps.Map(container, options);

        markerdata.forEach((el) => {
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(el.lat, el.lng),
            });
            const infowindow = new kakao.maps.InfoWindow({
                title: el.title,
            });
        });
    };




    return (
        <div class="hot-place">
            <div class="full-display">
                <div class="logo-img"><img src={logo} /></div>
                <div class="place">
                    <div class="btns">
                        <button>카페</button>
                        <button>편의점</button>
                        <button>디져트</button>
                        <button>맛집</button>
                    </div>
                    <div id="map" class="map-class"></div>
                </div>
            </div>
            <Info />
        </div>
    )
}

export default Hot_place;