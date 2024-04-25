import React, { useRef, useEffect, useState } from "react";
import '../css/hotPlace.css';

function Hot_place(){
    const {kakao} = window;

    const container = useRef(null)
    const options = {
        center: new kakao.maps.LatLng(37.4661018035835, 126.931927855676),
        level: 2
    }

    useEffect(() => {
        // debugger;
        // const container2 = document.getElementById('map');
        new kakao.maps.Map(container.current, options)
        return () => {};
    }, []);

    return(
        <div class="place">
            <div id="map" ref={container}></div>
        </div>
    )
}

export default Hot_place;